# Node.js 16 ChangeLog

<!--lint disable prohibited-strings-->
<!--lint disable maximum-line-length-->
<!--lint disable no-literal-urls-->

<table>
<tr>
<th>Current</th>
</tr>
<tr>
<td>
<a href="#16.0.0">16.0.0</a><br/>
</td>
</tr>
</table>

* Other Versions
  * [15.x](CHANGELOG_V15.md)
  * [14.x](CHANGELOG_V14.md)
  * [13.x](CHANGELOG_V13.md)
  * [12.x](CHANGELOG_V12.md)
  * [11.x](CHANGELOG_V11.md)
  * [10.x](CHANGELOG_V10.md)
  * [9.x](CHANGELOG_V9.md)
  * [8.x](CHANGELOG_V8.md)
  * [7.x](CHANGELOG_V7.md)
  * [6.x](CHANGELOG_V6.md)
  * [5.x](CHANGELOG_V5.md)
  * [4.x](CHANGELOG_V4.md)
  * [0.12.x](CHANGELOG_V012.md)
  * [0.10.x](CHANGELOG_V010.md)
  * [io.js](CHANGELOG_IOJS.md)
  * [Archive](CHANGELOG_ARCHIVE.md)

<a id="16.0.0"></a>
## 2021-04-20, Version 16.0.0 (Current), @BethGriggs

### Notable Changes

#### Deprecations and Removals

* **(SEMVER-MAJOR)** **fs**: remove permissive rmdir recursive (Antoine du Hamel) [#37216](https://github.com/nodejs/node/pull/37216)
* **(SEMVER-MAJOR)** **fs**: runtime deprecate rmdir recursive option (Antoine du Hamel) [#37302](https://github.com/nodejs/node/pull/37302)
* **(SEMVER-MAJOR)** **lib**: make process.binding('util') return only type checkers (Anna Henningsen) [#37819](https://github.com/nodejs/node/pull/37819)
* **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('crypto') (James M Snell) [#37790](https://github.com/nodejs/node/pull/37790)
* **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('signal\_wrap') (James M Snell) [#37800](https://github.com/nodejs/node/pull/37800)
* **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('v8') (James M Snell) [#37789](https://github.com/nodejs/node/pull/37789)
* **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('async\_wrap') (James M Snell) [#37576](https://github.com/nodejs/node/pull/37576)
* **(SEMVER-MAJOR)** **module**: remove module.createRequireFromPath (Antoine du Hamel) [#37201](https://github.com/nodejs/node/pull/37201)
* **(SEMVER-MAJOR)** **module**: runtime deprecate subpath folder mappings (Antoine du Hamel) [#37215](https://github.com/nodejs/node/pull/37215)
* **(SEMVER-MAJOR)** **module**: runtime deprecate "main" index and extension lookups (Antoine du Hamel) [#37206](https://github.com/nodejs/node/pull/37206)
* **(SEMVER-MAJOR)** **module**: runtime deprecate invalid package.json main entries (Antoine du Hamel) [#37204](https://github.com/nodejs/node/pull/37204)
* **(SEMVER-MAJOR)** **process**: runtime deprecate changing process.config (James M Snell) [#36902](https://github.com/nodejs/node/pull/36902)
* **(SEMVER-MAJOR)** **src**: use non-deprecated GetCreationContext from V8 (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* **(SEMVER-MAJOR)** **src**: use non-deprecated V8 module APIs (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* **(SEMVER-MAJOR)** **src**: use non-deprecated V8 module and script APIs (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)

#### V8 9.0

* TBD

#### Other Notable Changes

* **(SEMVER-MAJOR)** **buffer**: expose btoa and atob as globals (James M Snell) [#37786](https://github.com/nodejs/node/pull/37786)
* **(SEMVER-MINOR)** **http**: add http.ClientRequest.getRawHeaderNames() (simov) [#37660](https://github.com/nodejs/node/pull/37660)
* **(SEMVER-MAJOR)** **http**: align with stream.Writable (Robert Nagy) [#36816](https://github.com/nodejs/node/pull/36816)
* **(SEMVER-MAJOR)** **lib,src**: update cluster to use Parent (Michael Dawson) [#36478](https://github.com/nodejs/node/pull/36478)
* **(SEMVER-MINOR)** **module**: add support for `node:`‑prefixed `require(…)` calls (ExE Boss) [#37246](https://github.com/nodejs/node/pull/37246)
* **(SEMVER-MINOR)** **repl**: add auto‑completion for `node:`‑prefixed `require(…)` calls (ExE Boss) [#37246](https://github.com/nodejs/node/pull/37246)

### Semver-Major Commits

* [[`324a6c235a`](https://github.com/nodejs/node/commit/324a6c235a)] - **(SEMVER-MAJOR)** **async_hooks**: add thisArg to AsyncResource.bind (James M Snell) [#36782](https://github.com/nodejs/node/pull/36782)
* [[`d1e2184c8e`](https://github.com/nodejs/node/commit/d1e2184c8e)] - **(SEMVER-MAJOR)** **buffer**: expose btoa and atob as globals (James M Snell) [#37786](https://github.com/nodejs/node/pull/37786)
* [[`a572a4e34e`](https://github.com/nodejs/node/commit/a572a4e34e)] - **(SEMVER-MAJOR)** **build**: reset embedder string to "-node.0" (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`38f32386c1`](https://github.com/nodejs/node/commit/38f32386c1)] - **(SEMVER-MAJOR)** **build**: include minimal V8 headers in distribution (Michaël Zasso) [#37570](https://github.com/nodejs/node/pull/37570)
* [[`f3c7078245`](https://github.com/nodejs/node/commit/f3c7078245)] - **(SEMVER-MAJOR)** **build**: reset embedder string to "-node.0" (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`842389839b`](https://github.com/nodejs/node/commit/842389839b)] - **(SEMVER-MAJOR)** **build**: reset embedder string to "-node.0" (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`a19af5ee71`](https://github.com/nodejs/node/commit/a19af5ee71)] - **(SEMVER-MAJOR)** **build**: use C++11 ABI with libstdc++ (Anna Henningsen) [#36634](https://github.com/nodejs/node/pull/36634)
* [[`8d6b74d347`](https://github.com/nodejs/node/commit/8d6b74d347)] - **(SEMVER-MAJOR)** **build**: enable ASLR (PIE) on OS X (woodfairy) [#35704](https://github.com/nodejs/node/pull/35704)
* [[`98d1ae47cf`](https://github.com/nodejs/node/commit/98d1ae47cf)] - **(SEMVER-MAJOR)** **build**: reset embedder string to "-node.0" (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`64d5be25ab`](https://github.com/nodejs/node/commit/64d5be25ab)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 1648e050cade (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`621b544909`](https://github.com/nodejs/node/commit/621b544909)] - **(SEMVER-MAJOR)** **deps**: silence irrelevant V8 warnings (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`0d78bc3101`](https://github.com/nodejs/node/commit/0d78bc3101)] - **(SEMVER-MAJOR)** **deps**: fix V8 build issue with inline methods (Jiawen Geng) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`5214918856`](https://github.com/nodejs/node/commit/5214918856)] - **(SEMVER-MAJOR)** **deps**: make v8.h compatible with VS2015 (Joao Reis) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`6b3caf77b2`](https://github.com/nodejs/node/commit/6b3caf77b2)] - **(SEMVER-MAJOR)** **deps**: V8: forward declaration of `Rtl\*FunctionTable` (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`d0a032fafb`](https://github.com/nodejs/node/commit/d0a032fafb)] - **(SEMVER-MAJOR)** **deps**: V8: patch register-arm64.h (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`c8b2fa642e`](https://github.com/nodejs/node/commit/c8b2fa642e)] - **(SEMVER-MAJOR)** **deps**: V8: un-cherry-pick bd019bd (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`732ad99e47`](https://github.com/nodejs/node/commit/732ad99e47)] - **(SEMVER-MAJOR)** **deps**: update V8 to 9.0.257.11 (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`43cc8e4b2e`](https://github.com/nodejs/node/commit/43cc8e4b2e)] - **(SEMVER-MAJOR)** **deps**: bump minimum ICU version to 68 (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`8eeecc19ae`](https://github.com/nodejs/node/commit/8eeecc19ae)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 8957d4677aa7 (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`b186142a0b`](https://github.com/nodejs/node/commit/b186142a0b)] - **(SEMVER-MAJOR)** **deps**: V8: backport a11395433dbd (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`290f2d8d3e`](https://github.com/nodejs/node/commit/290f2d8d3e)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick deb0813166f3 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`63ed0b8bfe`](https://github.com/nodejs/node/commit/63ed0b8bfe)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 9a6a22874c81 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`47f1c5257a`](https://github.com/nodejs/node/commit/47f1c5257a)] - **(SEMVER-MAJOR)** **deps**: silence irrelevant V8 warning (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`19d975241f`](https://github.com/nodejs/node/commit/19d975241f)] - **(SEMVER-MAJOR)** **deps**: workaround stod() limitations on SmartOS (Colin Ihrig) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`70f928c6a6`](https://github.com/nodejs/node/commit/70f928c6a6)] - **(SEMVER-MAJOR)** **deps**: fix V8 build issue with inline methods (Jiawen Geng) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`b045e39513`](https://github.com/nodejs/node/commit/b045e39513)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on Xcode 8 (Mary Marchini) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`32725d2224`](https://github.com/nodejs/node/commit/32725d2224)] - **(SEMVER-MAJOR)** **deps**: make v8.h compatible with VS2015 (Joao Reis) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`fe3cee7b37`](https://github.com/nodejs/node/commit/fe3cee7b37)] - **(SEMVER-MAJOR)** **deps**: V8: forward declaration of `Rtl\*FunctionTable` (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`b2d05f7349`](https://github.com/nodejs/node/commit/b2d05f7349)] - **(SEMVER-MAJOR)** **deps**: V8: patch register-arm64.h (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`c7a0ab4e3d`](https://github.com/nodejs/node/commit/c7a0ab4e3d)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on older XCode versions (Ujjwal Sharma) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`60b623ee90`](https://github.com/nodejs/node/commit/60b623ee90)] - **(SEMVER-MAJOR)** **deps**: V8: un-cherry-pick bd019bd (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`c5ff019a4e`](https://github.com/nodejs/node/commit/c5ff019a4e)] - **(SEMVER-MAJOR)** **deps**: update V8 to 8.9.255.19 (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`577ff9fee5`](https://github.com/nodejs/node/commit/577ff9fee5)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick deb0813166f3 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`00e1c7ea83`](https://github.com/nodejs/node/commit/00e1c7ea83)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 9a6a22874c81 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`ee01d6b7fc`](https://github.com/nodejs/node/commit/ee01d6b7fc)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 2059ee813359 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`2dad8d43cc`](https://github.com/nodejs/node/commit/2dad8d43cc)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick bde7ee5473d6 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`3046131ea0`](https://github.com/nodejs/node/commit/3046131ea0)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 9a712984025e (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`d178d0738f`](https://github.com/nodejs/node/commit/d178d0738f)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 0b96e5b0bfb2 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`5c71ea151a`](https://github.com/nodejs/node/commit/5c71ea151a)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick fbb28902e049 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`c8e15cd2c6`](https://github.com/nodejs/node/commit/c8e15cd2c6)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 821fb3883a8e (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`b0d67426af`](https://github.com/nodejs/node/commit/b0d67426af)] - **(SEMVER-MAJOR)** **deps**: workaround stod() limitations on SmartOS (Colin Ihrig) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`c8a658ac53`](https://github.com/nodejs/node/commit/c8a658ac53)] - **(SEMVER-MAJOR)** **deps**: fix V8 build issue with inline methods (Jiawen Geng) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`153b8cea36`](https://github.com/nodejs/node/commit/153b8cea36)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on Xcode 8 (Mary Marchini) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`a785984133`](https://github.com/nodejs/node/commit/a785984133)] - **(SEMVER-MAJOR)** **deps**: V8: silence irrelevant warnings (Michaël Zasso) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`246c9b8c31`](https://github.com/nodejs/node/commit/246c9b8c31)] - **(SEMVER-MAJOR)** **deps**: make v8.h compatible with VS2015 (Joao Reis) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`96a567f9e9`](https://github.com/nodejs/node/commit/96a567f9e9)] - **(SEMVER-MAJOR)** **deps**: V8: forward declaration of `Rtl\*FunctionTable` (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`e74383cecb`](https://github.com/nodejs/node/commit/e74383cecb)] - **(SEMVER-MAJOR)** **deps**: V8: patch register-arm64.h (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`732847f1eb`](https://github.com/nodejs/node/commit/732847f1eb)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on older XCode versions (Ujjwal Sharma) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`70171d186f`](https://github.com/nodejs/node/commit/70171d186f)] - **(SEMVER-MAJOR)** **deps**: V8: un-cherry-pick bd019bd (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`c7b3292251`](https://github.com/nodejs/node/commit/c7b3292251)] - **(SEMVER-MAJOR)** **deps**: update V8 to 8.8.278.17 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`15c91c6dd5`](https://github.com/nodejs/node/commit/15c91c6dd5)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 821fb3883a8e (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`40b2fa4832`](https://github.com/nodejs/node/commit/40b2fa4832)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 45e49775f5a3 (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`cd91ab5865`](https://github.com/nodejs/node/commit/cd91ab5865)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 7b3a27b7ae65 (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`f4fc099080`](https://github.com/nodejs/node/commit/f4fc099080)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick d76abfed3512 (Michaël Zasso) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`6200176ef0`](https://github.com/nodejs/node/commit/6200176ef0)] - **(SEMVER-MAJOR)** **deps**: fix V8 build issue with inline methods (Jiawen Geng) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`bd5642deb9`](https://github.com/nodejs/node/commit/bd5642deb9)] - **(SEMVER-MAJOR)** **deps**: update V8 postmortem metadata script (Colin Ihrig) [#35415](https://github.com/nodejs/node/pull/35415)
* [[`9ae7159216`](https://github.com/nodejs/node/commit/9ae7159216)] - **(SEMVER-MAJOR)** **deps**: update V8 postmortem metadata script (Colin Ihrig) [#33579](https://github.com/nodejs/node/pull/33579)
* [[`f4b4e21b2f`](https://github.com/nodejs/node/commit/f4b4e21b2f)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on Xcode 8 (Mary Marchini) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`f6a84540d8`](https://github.com/nodejs/node/commit/f6a84540d8)] - **(SEMVER-MAJOR)** **deps**: V8: silence irrelevant warnings (Michaël Zasso) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`bbc3f46572`](https://github.com/nodejs/node/commit/bbc3f46572)] - **(SEMVER-MAJOR)** **deps**: make v8.h compatible with VS2015 (Joao Reis) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`0c988642dc`](https://github.com/nodejs/node/commit/0c988642dc)] - **(SEMVER-MAJOR)** **deps**: V8: forward declaration of `Rtl\*FunctionTable` (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`703bf933d4`](https://github.com/nodejs/node/commit/703bf933d4)] - **(SEMVER-MAJOR)** **deps**: V8: patch register-arm64.h (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`5451975b18`](https://github.com/nodejs/node/commit/5451975b18)] - **(SEMVER-MAJOR)** **deps**: patch V8 to run on older XCode versions (Ujjwal Sharma) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`c460f7af4d`](https://github.com/nodejs/node/commit/c460f7af4d)] - **(SEMVER-MAJOR)** **deps**: V8: un-cherry-pick bd019bd (Refael Ackermann) [#32116](https://github.com/nodejs/node/pull/32116)
* [[`48db20f6f5`](https://github.com/nodejs/node/commit/48db20f6f5)] - **(SEMVER-MAJOR)** **deps**: update V8 to 8.7.220 (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`d85e1f0703`](https://github.com/nodejs/node/commit/d85e1f0703)] - **(SEMVER-MAJOR)** **dns**: use url module instead of punycode for IDNA (Antoine du Hamel) [#35091](https://github.com/nodejs/node/pull/35091)
* [[`290c158018`](https://github.com/nodejs/node/commit/290c158018)] - **(SEMVER-MAJOR)** **doc**: update minimum supported Xcode to 11 (Michaël Zasso) [#37872](https://github.com/nodejs/node/pull/37872)
* [[`1ff2918d80`](https://github.com/nodejs/node/commit/1ff2918d80)] - **(SEMVER-MAJOR)** **doc**: update minimum supported GCC to 8.3 (Michaël Zasso) [#37871](https://github.com/nodejs/node/pull/37871)
* [[`2706e67116`](https://github.com/nodejs/node/commit/2706e67116)] - **(SEMVER-MAJOR)** **doc**: update AIX to GCC8 for v16.x (Ash Cripps) [#37677](https://github.com/nodejs/node/pull/37677)
* [[`ac2c8c530d`](https://github.com/nodejs/node/commit/ac2c8c530d)] - **(SEMVER-MAJOR)** **doc**: fixup http.IncomingMessage deprecation code (Guy Bedford) [#36917](https://github.com/nodejs/node/pull/36917)
* [[`5ae5ca90ef`](https://github.com/nodejs/node/commit/5ae5ca90ef)] - **(SEMVER-MAJOR)** **doc**: add http.IncomingMessage#connection (Pranshu Srivastava) [#33768](https://github.com/nodejs/node/pull/33768)
* [[`83d6e63aee`](https://github.com/nodejs/node/commit/83d6e63aee)] - **(SEMVER-MAJOR)** **events**: change EventTarget handler exception behavior (Nitzan Uziely) [#37237](https://github.com/nodejs/node/pull/37237)
* [[`9948036ee0`](https://github.com/nodejs/node/commit/9948036ee0)] - **(SEMVER-MAJOR)** **fs**: remove permissive rmdir recursive (Antoine du Hamel) [#37216](https://github.com/nodejs/node/pull/37216)
* [[`d4693ff430`](https://github.com/nodejs/node/commit/d4693ff430)] - **(SEMVER-MAJOR)** **fs**: add validation for fd and path (Dylan Elliott) [#35187](https://github.com/nodejs/node/pull/35187)
* [[`0ddd75bcd8`](https://github.com/nodejs/node/commit/0ddd75bcd8)] - **(SEMVER-MAJOR)** **fs**: runtime deprecate rmdir recursive option (Antoine du Hamel) [#37302](https://github.com/nodejs/node/pull/37302)
* [[`da217d0773`](https://github.com/nodejs/node/commit/da217d0773)] - **(SEMVER-MAJOR)** **fs**: fix flag and mode validation (James M Snell) [#37480](https://github.com/nodejs/node/pull/37480)
* [[`e2f5bb7574`](https://github.com/nodejs/node/commit/e2f5bb7574)] - **(SEMVER-MAJOR)** **http**: align with stream.Writable (Robert Nagy) [#36816](https://github.com/nodejs/node/pull/36816)
* [[`2ef9a76ece`](https://github.com/nodejs/node/commit/2ef9a76ece)] - **(SEMVER-MAJOR)** **http**: use objects with null prototype in Agent (Michaël Zasso) [#36409](https://github.com/nodejs/node/pull/36409)
* [[`fe73e4d578`](https://github.com/nodejs/node/commit/fe73e4d578)] - **(SEMVER-MAJOR)** **lib**: make process.binding('util') return only type checkers (Anna Henningsen) [#37819](https://github.com/nodejs/node/pull/37819)
* [[`3bee6d8aad`](https://github.com/nodejs/node/commit/3bee6d8aad)] - **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('crypto') (James M Snell) [#37790](https://github.com/nodejs/node/pull/37790)
* [[`ac00df112e`](https://github.com/nodejs/node/commit/ac00df112e)] - **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('signal\_wrap') (James M Snell) [#37800](https://github.com/nodejs/node/pull/37800)
* [[`ae595d76e3`](https://github.com/nodejs/node/commit/ae595d76e3)] - **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('v8') (James M Snell) [#37789](https://github.com/nodejs/node/pull/37789)
* [[`104dac79cc`](https://github.com/nodejs/node/commit/104dac79cc)] - **(SEMVER-MAJOR)** **lib**: aggregate errors to avoid error swallowing (Antoine du Hamel) [#37460](https://github.com/nodejs/node/pull/37460)
* [[`8d78d9ef27`](https://github.com/nodejs/node/commit/8d78d9ef27)] - **(SEMVER-MAJOR)** **lib**: load v8\_prof\_processor dependencies as ESM (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`1468c9ff7c`](https://github.com/nodejs/node/commit/1468c9ff7c)] - **(SEMVER-MAJOR)** **lib**: runtime deprecate access to process.binding('async\_wrap') (James M Snell) [#37576](https://github.com/nodejs/node/pull/37576)
* [[`295e766c27`](https://github.com/nodejs/node/commit/295e766c27)] - **(SEMVER-MAJOR)** **lib**: remove usage of url.parse (raisinten) [#36853](https://github.com/nodejs/node/pull/36853)
* [[`cb3020d824`](https://github.com/nodejs/node/commit/cb3020d824)] - **(SEMVER-MAJOR)** **lib**: add error handling for input stream (rexagod) [#31603](https://github.com/nodejs/node/pull/31603)
* [[`15164cebce`](https://github.com/nodejs/node/commit/15164cebce)] - **(SEMVER-MAJOR)** **lib,src**: update cluster to use Parent (Michael Dawson) [#36478](https://github.com/nodejs/node/pull/36478)
* [[`3cc9aec988`](https://github.com/nodejs/node/commit/3cc9aec988)] - **(SEMVER-MAJOR)** **module**: runtime deprecate subpath folder mappings (Antoine du Hamel) [#37215](https://github.com/nodejs/node/pull/37215)
* [[`9fab73c73b`](https://github.com/nodejs/node/commit/9fab73c73b)] - **(SEMVER-MAJOR)** **module**: runtime deprecate "main" index and extension lookups (Antoine du Hamel) [#37206](https://github.com/nodejs/node/pull/37206)
* [[`76a073b67e`](https://github.com/nodejs/node/commit/76a073b67e)] - **(SEMVER-MAJOR)** **module**: runtime deprecate invalid package.json main entries (Antoine du Hamel) [#37204](https://github.com/nodejs/node/pull/37204)
* [[`674614b3f5`](https://github.com/nodejs/node/commit/674614b3f5)] - **(SEMVER-MAJOR)** **module**: remove module.createRequireFromPath (Antoine du Hamel) [#37201](https://github.com/nodejs/node/pull/37201)
* [[`aecd5ebf49`](https://github.com/nodejs/node/commit/aecd5ebf49)] - **(SEMVER-MAJOR)** **module**: only set cache when finding module succeeds (Yongsheng Zhang) [#36642](https://github.com/nodejs/node/pull/36642)
* [[`f3eb224c83`](https://github.com/nodejs/node/commit/f3eb224c83)] - **(SEMVER-MAJOR)** **perf_hooks**: complete overhaul of the implementation (James M Snell) [#37136](https://github.com/nodejs/node/pull/37136)
* [[`f1753d4c76`](https://github.com/nodejs/node/commit/f1753d4c76)] - **(SEMVER-MAJOR)** **process**: disallow adding options to process.allowedNodeEnvironmentFlags (Antoine du Hamel) [#36660](https://github.com/nodejs/node/pull/36660)
* [[`96f3977ded`](https://github.com/nodejs/node/commit/96f3977ded)] - **(SEMVER-MAJOR)** **process**: runtime deprecate changing process.config (James M Snell) [#36902](https://github.com/nodejs/node/pull/36902)
* [[`45dbcbef90`](https://github.com/nodejs/node/commit/45dbcbef90)] - **(SEMVER-MAJOR)** **readline**: cursorTo throw error on NaN (Zijian Liu) [#36379](https://github.com/nodejs/node/pull/36379)
* [[`8e8dea36cc`](https://github.com/nodejs/node/commit/8e8dea36cc)] - **(SEMVER-MAJOR)** **src**: use non-deprecated GetCreationContext from V8 (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`b1c1c4695c`](https://github.com/nodejs/node/commit/b1c1c4695c)] - **(SEMVER-MAJOR)** **src**: remove V8\_FT\_ADAPTOR for V8 update (Colin Ihrig) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`8f5cce6862`](https://github.com/nodejs/node/commit/8f5cce6862)] - **(SEMVER-MAJOR)** **src**: use non-deprecated V8 module APIs (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`497f6ca5b4`](https://github.com/nodejs/node/commit/497f6ca5b4)] - **(SEMVER-MAJOR)** **src**: update NODE\_MODULE\_VERSION to 93 (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`001dc16cf1`](https://github.com/nodejs/node/commit/001dc16cf1)] - **(SEMVER-MAJOR)** **src**: use non-deprecated V8 module and script APIs (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`47a90d9f37`](https://github.com/nodejs/node/commit/47a90d9f37)] - **(SEMVER-MAJOR)** **src**: update NODE\_MODULE\_VERSION to 92 (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`5259d17309`](https://github.com/nodejs/node/commit/5259d17309)] - **(SEMVER-MAJOR)** **src**: update NODE\_MODULE\_VERSION to 91 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`bf79987433`](https://github.com/nodejs/node/commit/bf79987433)] - **(SEMVER-MAJOR)** **src**: mark internally exported functions as explicitly internal (Tyler Ang-Wanek) [#37000](https://github.com/nodejs/node/pull/37000)
* [[`1fe571aa0c`](https://github.com/nodejs/node/commit/1fe571aa0c)] - **(SEMVER-MAJOR)** **src**: inline AsyncCleanupHookHandle in headers (Tyler Ang-Wanek) [#37000](https://github.com/nodejs/node/pull/37000)
* [[`6f9cbcf6a6`](https://github.com/nodejs/node/commit/6f9cbcf6a6)] - **(SEMVER-MAJOR)** **src**: fix v8 api deprecation (Jiawen Geng) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`9d4d55bd94`](https://github.com/nodejs/node/commit/9d4d55bd94)] - **(SEMVER-MAJOR)** **src**: update NODE\_MODULE\_VERSION to 90 (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`dfc288e7fd`](https://github.com/nodejs/node/commit/dfc288e7fd)] - **(SEMVER-MAJOR)** **src**: clean up embedder API (Anna Henningsen) [#35897](https://github.com/nodejs/node/pull/35897)
* [[`fa3997d75a`](https://github.com/nodejs/node/commit/fa3997d75a)] - **(SEMVER-MAJOR)** **test**: mark test-return-on-exit as flaky (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`896ae96a15`](https://github.com/nodejs/node/commit/896ae96a15)] - **(SEMVER-MAJOR)** **test**: mark WASI's test-return-on-exit as flaky (Colin Ihrig) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`9843361c07`](https://github.com/nodejs/node/commit/9843361c07)] - **(SEMVER-MAJOR)** **tools**: update V8 gypfiles for 9.0 (Michaël Zasso) [#37587](https://github.com/nodejs/node/pull/37587)
* [[`017661768a`](https://github.com/nodejs/node/commit/017661768a)] - **(SEMVER-MAJOR)** **tools**: update V8 gypfiles for 8.9 (Michaël Zasso) [#37330](https://github.com/nodejs/node/pull/37330)
* [[`79da253473`](https://github.com/nodejs/node/commit/79da253473)] - **(SEMVER-MAJOR)** **tools**: update V8 gypfiles for 8.8 (Michaël Zasso) [#36139](https://github.com/nodejs/node/pull/36139)
* [[`770d9e2542`](https://github.com/nodejs/node/commit/770d9e2542)] - **(SEMVER-MAJOR)** **tools**: update V8 gypfiles for 8.7 (Michaël Zasso) [#35700](https://github.com/nodejs/node/pull/35700)
* [[`65e8864fa3`](https://github.com/nodejs/node/commit/65e8864fa3)] - **(SEMVER-MAJOR)** **worker**: send correct error status for worker init (Yash Ladha) [#36242](https://github.com/nodejs/node/pull/36242)

### Semver-Minor Commits

* TBD

### Semver-Patch Commits

* TBD
