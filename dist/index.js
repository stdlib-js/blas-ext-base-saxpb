"use strict";var o=function(v,i){return function(){try{return i||v((i={exports:{}}).exports,i),i.exports}catch(n){throw (i=0, n)}};};var c=o(function(I,m){
var M=require('@stdlib/blas-ext-base-sapx/dist').ndarray,O=require('@stdlib/blas-base-sscal/dist').ndarray,u=require('@stdlib/number-float64-base-to-float32/dist'),t=5;function g(v,i,n,r,a,f){var e,q,s;if(v<=0)return r;if(i===1)return M(v,n,r,a,f);if(n===0)return O(v,i,r,a,f);if(e=f,a===1){if(q=v%t,q>0)for(s=0;s<q;s++)r[e]=u(u(i*r[e])+n),e+=a;if(v<t)return r;for(s=q;s<v;s+=t)r[e]=u(u(i*r[e])+n),r[e+1]=u(u(i*r[e+1])+n),r[e+2]=u(u(i*r[e+2])+n),r[e+3]=u(u(i*r[e+3])+n),r[e+4]=u(u(i*r[e+4])+n),e+=t;return r}for(s=0;s<v;s++)r[e]=u(u(i*r[e])+n),e+=a;return r}m.exports=g
});var j=o(function(J,d){
var k=require('@stdlib/strided-base-stride2offset/dist'),w=c();function z(v,i,n,r,a){return w(v,i,n,r,a,k(v,a))}d.exports=z
});var _=o(function(K,R){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=j(),B=c();A(p,"ndarray",B);R.exports=p
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=_(),y,E=D(C(__dirname,"./native.js"));F(E)?y=G:y=E;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
