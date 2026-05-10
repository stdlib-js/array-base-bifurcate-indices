"use strict";var g=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var v=g(function(l,i){"use strict";var h=require("@stdlib/array-base-resolve-getter");function o(a,e){var s,t,n,u,r;if(t=a.length,e.length!==t)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(t===0)return[];for(s=h(e),n=[[],[]],r=0;r<t;r++)u=s(e,r),u?n[0].push(r):n[1].push(r);return n}i.exports=o});var c=v();module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
