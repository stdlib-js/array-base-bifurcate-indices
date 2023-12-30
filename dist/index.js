"use strict";var g=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var v=g(function(l,i){
var h=require('@stdlib/array-base-resolve-getter/dist');function o(a,e){var s,t,n,u,r;if(t=a.length,e.length!==t)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(t===0)return[];for(s=h(e),n=[[],[]],r=0;r<t;r++)u=s(e,r),u?n[0].push(r):n[1].push(r);return n}i.exports=o
});var c=v();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
