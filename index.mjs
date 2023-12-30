// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.1.0-esm/index.mjs";function r(r,t){var n,s,a,h;if(s=r.length,t.length!==s)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===s)return[];for(n=e(t),a=[[],[]],h=0;h<s;h++)n(t,h)?a[0].push(h):a[1].push(h);return a}export{r as default};
//# sourceMappingURL=index.mjs.map
