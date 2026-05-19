"use strict";var o=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var c=o(function(I,m){
var M=require('@stdlib/blas-ext-base-sapx/dist').ndarray,O=require('@stdlib/blas-base-sscal/dist').ndarray,u=require('@stdlib/number-float64-base-to-float32/dist'),t=5;function g(n,i,v,r,a,f){var e,q,s;if(n<=0)return r;if(i===1)return M(n,v,r,a,f);if(v===0)return O(n,i,r,a,f);if(e=f,a===1){if(q=n%t,q>0)for(s=0;s<q;s++)r[e]=u(u(i*r[e])+v),e+=a;if(n<t)return r;for(s=q;s<n;s+=t)r[e]=u(u(i*r[e])+v),r[e+1]=u(u(i*r[e+1])+v),r[e+2]=u(u(i*r[e+2])+v),r[e+3]=u(u(i*r[e+3])+v),r[e+4]=u(u(i*r[e+4])+v),e+=t;return r}for(s=0;s<n;s++)r[e]=u(u(i*r[e])+v),e+=a;return r}m.exports=g
});var j=o(function(J,d){
var k=require('@stdlib/strided-base-stride2offset/dist'),w=c();function z(n,i,v,r,a){return w(n,i,v,r,a,k(n,a))}d.exports=z
});var _=o(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=j(),B=c();A(p,"ndarray",B);R.exports=p
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),y,E=D(C(__dirname,"./native.js"));F(E)?y=G:y=E;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
