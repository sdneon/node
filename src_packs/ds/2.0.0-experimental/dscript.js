//SD: EXPERIMENTAL external dscript.js -- AST-rework D Script engine
//(tools/bundle-transpilers/ast-prototype/ in the D:\n Node.JS+ source tree).
//Requires the HOST node.exe to already have global.transpiler.babel wired in
//(v26.8.2+ of this fork) -- this file reuses it rather than bundling Babel a
//second time, so it will NOT work as an --experimental-external-dscript
//override on an older host that lacks global.transpiler.babel.
//
//Unlike the in-binary DS_ENGINE=ast toggle (build/nodejs+ only), this file is
//a WHOLESALE replacement of transpiler.dscript -- there is no old/new choice
//here, loading this file always means "use the AST engine".
function loadTranspilers()
{
    global.transpiler ??= {};
    const { transpiler } = global;

    //SD: EXPERIMENTAL -- AST-rework D Script engine (tools/bundle-transpilers/ast-prototype/).
    //Additive only: the original `expand()` above is untouched. Selected via the
    //DS_ENGINE=ast environment variable at the two real call sites (this file's own
    //require()/`.ds` dispatch, and lib/internal/main/embedding.js's SEA path).
    //Reuses the already-bundled transpiler.babel (parse/generate) rather than bundling
    //Babel a second time. See tools/bundle-transpilers/ast-prototype/README.md for the
    //full writeup, the 40/40 validation harness, and known gaps (#inflatez unimplemented,
    //approximate multi-#include sourcemap alignment).
    (function() {
        const KEYWORDS = 'ds|define|undef|ifndef|ifdef|if|elif|else|endif|put|include_once|include|import|inflate|cs|ts|end';
        const DIRECTIVE_RE = new RegExp(`^#[ \\t]*(?:(${KEYWORDS})\\b[ \\t]*(.*)|([a-zA-Z_$][a-zA-Z_$0-9]*|#)(.*))$`);
        const DYN_IMPORT_RE = /(\{?\s*(?:[a-zA-Z_$]+[a-zA-Z_$0-9]*)(?:\s*,\s*(?:[a-zA-Z_$]+[a-zA-Z_$0-9]*))*\s*\}?)\s+((['"])(.+)\3)/;
        const DS_HEADER_RE = /^(?:(seapp))?(?:[ \t]*(colors))?(?:[ \t]*(.+))?$/;
        const GLOB_EXP = /(?:^|[^\\])\*/;
        const DS_LOGO = '// ( •̀ᴗ•́ )و ̑̑ D script ala JS++!';
        const CODE_SEAPP_REQ = "require=require('module').createRequire(__filename);\n";
        const CODE_COLORS = "require('colors').setTheme({silly:'rainbow',input:'grey',verbose:'cyan',prompt:'grey',info:'green',data:'grey',help:'cyan',warn:'yellow',debug:'blue',error:'red'});\n";
        const IF_KINDS = new Set(['if', 'ifdef', 'ifndef']);

        function parseDScript(source) {
            const lines = source.split(/\r?\n/);
            const root = [];
            const stack = [];
            let jsChunkLines = [];
            let chunkStartLine = 1;
            let absLine = 0;
            let openBlock = null;

            function currentArray() {
                if (stack.length === 0) return root;
                const top = stack[stack.length - 1];
                return top.node.branches[top.branchIdx].body;
            }
            function flushJsChunk() {
                if (jsChunkLines.length === 0) return;
                const text = jsChunkLines.join('\n');
                const startLine = chunkStartLine;
                jsChunkLines = [];
                if (text.trim() === '') return;
                currentArray().push({ type: 'DSChunk', text, startLine });
            }
            function stripQuotes(s) {
                s = s.trim();
                if (s.length > 1 && s[0] === s[s.length - 1] && (s[0] === "'" || s[0] === '"')) {
                    return s.substring(1, s.length - 1);
                }
                return s;
            }

            for (const line of lines) {
                absLine++;
                if (openBlock) {
                    const m = /^#[ \t]*(end)\b[ \t]*(.*)$/.exec(line);
                    if (m) {
                        currentArray().push({ type: 'DSBlock', ...openBlock, raw: openBlock.rawLines.join('\n') });
                        openBlock = null;
                    } else {
                        openBlock.rawLines.push(line);
                    }
                    continue;
                }
                const m = DIRECTIVE_RE.exec(line);
                if (!m) {
                    if (jsChunkLines.length === 0) chunkStartLine = absLine;
                    jsChunkLines.push(line);
                    continue;
                }
                flushJsChunk();
                const kw = m[1];
                const rest = m[1] ? m[2] : m[4];
                const nameSugar = m[3];

                if (kw === 'ds') {
                    const dm = DS_HEADER_RE.exec(rest);
                    if (dm) currentArray().push({ type: 'DSHeader', seapp: !!dm[1], colors: dm[2] === 'colors', trailing: dm[3] });
                    continue;
                }
                if (kw && (IF_KINDS.has(kw) || kw === 'elif' || kw === 'else')) {
                    if (IF_KINDS.has(kw)) {
                        const node = { type: 'DSIfChain', branches: [{ kind: kw, key: kw === 'if' ? undefined : rest.trim(), expr: kw === 'if' ? rest.trim() : undefined, body: [] }] };
                        currentArray().push(node);
                        stack.push({ node, branchIdx: 0 });
                    } else if (kw === 'elif') {
                        if (stack.length === 0) continue;
                        const top = stack[stack.length - 1];
                        top.node.branches.push({ kind: 'elif', expr: rest.trim(), body: [] });
                        top.branchIdx = top.node.branches.length - 1;
                    } else if (kw === 'else') {
                        if (stack.length === 0) continue;
                        const top = stack[stack.length - 1];
                        top.node.branches.push({ kind: 'else', body: [] });
                        top.branchIdx = top.node.branches.length - 1;
                    }
                    continue;
                }
                if (kw === 'endif') {
                    if (stack.length === 0) continue;
                    stack.pop();
                    continue;
                }
                if (kw === 'define') {
                    const fnMatch = /^function[ \t]+([a-zA-Z_][a-zA-Z0-9_]*)[ \t]*(.+)/.exec(rest);
                    if (fnMatch) {
                        currentArray().push({ type: 'DSDefine', name: fnMatch[1], funcValue: fnMatch[2] });
                    } else {
                        const defMatch = /^(\S+)(?:\s+(.+))?$/.exec(rest);
                        if (defMatch) {
                            let v = defMatch[2];
                            if (v === 'true') v = true;
                            else if (v === 'false') v = false;
                            else if (v === undefined) v = true;
                            currentArray().push({ type: 'DSDefine', name: defMatch[1], value: v });
                        }
                    }
                    continue;
                }
                if (kw === 'undef') {
                    const defMatch = /^(\S+)/.exec(rest);
                    if (defMatch) currentArray().push({ type: 'DSUndef', name: defMatch[1] });
                    continue;
                }
                if (kw === 'put') {
                    if (rest.length > 0) currentArray().push({ type: 'DSPut', expr: rest });
                    continue;
                }
                if (kw === 'include' || kw === 'include_once') {
                    const pattern = stripQuotes(rest);
                    if (pattern) currentArray().push({ type: 'DSInclude', pattern, once: kw === 'include_once' });
                    continue;
                }
                if (kw === 'inflate') {
                    if (rest.length > 0) currentArray().push({ type: 'DSInflate', b64: rest });
                    continue;
                }
                if (kw === 'cs' || kw === 'ts') {
                    openBlock = { kind: kw, rawLines: [] };
                    continue;
                }
                if (kw === 'import') {
                    const dm = DYN_IMPORT_RE.exec(rest);
                    openBlock = dm
                        ? { kind: 'import', rawLines: [], importVar: dm[1], importExpr: dm[2] }
                        : { kind: 'import_discard', rawLines: [] };
                    continue;
                }
                if (kw === 'end') continue;
                if (nameSugar !== undefined) {
                    const prefix = nameSugar === '#' ? 'module.exports' : `module.exports.${nameSugar}`;
                    const rewritten = m[4].trim().length > 0 ? `${prefix}${m[4]}` : `${prefix} = {};`;
                    if (jsChunkLines.length === 0) chunkStartLine = absLine;
                    jsChunkLines.push(rewritten);
                    continue;
                }
            }
            flushJsChunk();
            if (openBlock) {
                currentArray().push({ type: 'DSBlock', ...openBlock, raw: openBlock.rawLines.join('\n') });
            }
            return root;
        }

        function buildDefineScope(defines) {
            let s = '';
            for (const key of Object.keys(defines)) {
                const val = defines[key];
                if (val && typeof val === 'object' && val.type === 'function') {
                    s += `function ${key} ${val.value};\n`;
                } else {
                    s += `var ${key} = ${val};\n`;
                }
            }
            return s;
        }
        function evalExpr(expr, defines) {
            const src = `(function() {\n${buildDefineScope(defines)}return ${expr};\n}());`;
            try {
                // eslint-disable-next-line no-eval
                return eval(src);
            } catch (ignore) {
                return false;
            }
        }
        function hasDefines(key, defines) {
            return Object.prototype.hasOwnProperty.call(defines, key);
        }

        function resolve(nodes, ctx) {
            let out = '';
            const emit = (text) => {
                if (!text) return;
                out += text;
                for (let i = 0; i < text.length; i++) if (text.charCodeAt(i) === 10) ctx.outputLineCount++;
            };
            for (const node of nodes) {
                switch (node.type) {
                    case 'DSHeader': {
                        emit(node.trailing === undefined ? `${DS_LOGO}\n` : `${DS_LOGO} ${node.trailing}\n`);
                        if (node.seapp) emit(CODE_SEAPP_REQ);
                        if (node.colors) emit(CODE_COLORS);
                        break;
                    }
                    case 'DSChunk': {
                        if (node.startLine - 1 > ctx.outputLineCount) {
                            emit('\n'.repeat(node.startLine - 1 - ctx.outputLineCount));
                        }
                        emit(node.text + '\n');
                        break;
                    }
                    case 'DSIfChain': {
                        let taken = null;
                        for (const b of node.branches) {
                            if (b.kind === 'else') { taken = b; break; }
                            if (b.kind === 'ifdef') { if (hasDefines(b.key, ctx.defines)) { taken = b; break; } }
                            else if (b.kind === 'ifndef') { if (!hasDefines(b.key, ctx.defines)) { taken = b; break; } }
                            else if (b.kind === 'if' || b.kind === 'elif') { if (evalExpr(b.expr, ctx.defines)) { taken = b; break; } }
                        }
                        if (taken) emit(resolve(taken.body, ctx));
                        break;
                    }
                    case 'DSDefine':
                        ctx.defines[node.name] = node.funcValue !== undefined ? { type: 'function', value: node.funcValue } : node.value;
                        break;
                    case 'DSUndef':
                        delete ctx.defines[node.name];
                        break;
                    case 'DSPut': {
                        const result = evalExpr(node.expr, ctx.defines);
                        emit(String(result));
                        break;
                    }
                    case 'DSInclude':
                        emit(resolveInclude(node, ctx));
                        break;
                    case 'DSInflate': {
                        try {
                            const zlib = require('zlib');
                            const decoded = zlib.unzipSync(Buffer.from(node.b64.trim(), 'base64')).toString('utf8') + '\n';
                            emit(decoded);
                        } catch (ignore) {}
                        break;
                    }
                    case 'DSBlock':
                        emit(resolveBlock(node, ctx));
                        break;
                    default:
                        throw new Error(`unexpected node type: ${node.type}`);
                }
            }
            return out;
        }

        function resolveInclude(node, ctx) {
            const { pattern, once } = node;
            const fs = require('fs');
            if (Object.prototype.hasOwnProperty.call(ctx.includes, pattern)) {
                if (once) return '';
                return resolve(parseDScript(ctx.includes[pattern]), ctx);
            }
            let content;
            try {
                if (GLOB_EXP.test(pattern)) {
                    const files = fs.globSync(ctx.baseDir + pattern, { sync: true });
                    content = files.map((f) => fs.readFileSync(f) + '\n').join('');
                } else {
                    content = fs.readFileSync(ctx.baseDir + pattern) + '';
                }
            } catch (ignore) {
                return '';
            }
            ctx.includes[pattern] = content;
            return resolve(parseDScript(content), ctx);
        }

        function resolveBlock(node, ctx) {
            if (node.kind === 'cs' || node.kind === 'ts') {
                const preprocessed = resolve(parseDScript(node.raw), ctx);
                if (node.kind === 'cs') return ctx.transpiler.coffeescript.compile(preprocessed, { bare: true });
                return ctx.transpiler.typescript.transpileModule(preprocessed, {}).outputText;
            }
            if (node.kind === 'import') {
                const bodyText = resolve(parseDScript(node.raw), ctx);
                return `(async () => {\n    const ${node.importVar} = await import(${node.importExpr});\n${bodyText}})();\n`;
            }
            return '';
        }

        //Matches expand()'s own getEnvDefines() exactly (duplicated -- that one is
        //private to expand()'s closure, not reachable from here).
        function getEnvDefinesAst() {
            const out = {};
            let defs = process.env.DS_DEFINES;
            if (typeof defs === 'string') {
                defs = defs.split(';');
                for (let i = 0; i < defs.length; i++) {
                    const def = defs[i].trim();
                    const eq = def.indexOf('=');
                    if (eq > 0) {
                        let value = def.substring(eq + 1).trim();
                        if (value === 'true') value = true;
                        else if (value === 'false') value = false;
                        out[def.substring(0, eq).trim()] = value;
                    } else if (def) {
                        out[def] = true;
                    }
                }
            }
            return out;
        }

        //Same call signature as expand(s, defines_, nestLvl, noSrcMap, orgFilename),
        //so both engines are drop-in interchangeable at the call sites.
        function transpileAst(s, defines_, nestLvl, noSrcMap, orgFilename) {
            if ((typeof s !== 'string') || (s.length <= 0)) return '';
            const ctx = {
                defines: defines_ || getEnvDefinesAst(),
                includes: {},
                baseDir: ((typeof process.env.DS_ROOT === 'string') ? process.env.DS_ROOT : '.') + '/',
                transpiler,
                outputLineCount: 0,
            };
            const parsed = parseDScript(s);
            const assembledText = resolve(parsed, ctx);
            let ast;
            try {
                ast = transpiler.babel.parse(assembledText, { sourceType: 'script', allowReturnOutsideFunction: true });
            } catch (parseErr) {
                //SD: re-throw a plain Error, not Babel's own error object -- Babel's error
                //carries a stack trace through loader.js's giant single-line bundled-code
                //frame, and Node's default uncaught-exception printer then tries to render
                //that whole line as "source context", dumping the entire minified bundle
                //to the console before the actual message. The real error info (message,
                //location) is preserved; only the noisy stack/codeframe is discarded.
                const clean = new Error(`D Script (AST engine) parse error in ${orgFilename || '<unknown>'}: ${parseErr.message}`);
                clean.dscriptOriginal = parseErr;
                throw clean;
            }
            const genOpts = { sourceMaps: !noSrcMap, retainLines: true };
            if (orgFilename) genOpts.sourceFileName = orgFilename;
            const result = transpiler.babel.generate(ast, genOpts, assembledText);
            let code = result.code;
            if (!noSrcMap && result.map) {
                code += '\n//# sourceMappingURL=data:application/json;base64,' + Buffer.from(JSON.stringify(result.map)).toString('base64');
            }
            return code;
        }

        transpiler.dscript = { transpile: transpileAst };
    }());
}
loadTranspilers();
console.log('external dscript.js (v2.0.0-experimental, AST engine) loaded =)');
