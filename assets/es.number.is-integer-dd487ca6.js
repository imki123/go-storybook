var m=Object.defineProperty;var i=(e,r)=>m(e,"name",{value:r,configurable:!0});import{_ as u,x as h,a2 as b,at as j,V as $,a1 as I,au as w,a7 as D,H as N,av as S,aw as y,M as E,Z as O,q as P,ax as M}from"./es.number.to-fixed-230d3e2e.js";import{I as U}from"./es.number.is-nan-4981cb9d.js";var _=u,L=h.findIndex,q=b,v="findIndex",p=!0;v in[]&&Array(1)[v](function(){p=!1});_({target:"Array",proto:!0,forced:p},{findIndex:i(function(r){return L(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});q(v);var A=u,F=U,R=b;A({target:"Array",proto:!0},{fill:F});R("fill");var T=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),V=$,C=j,G=I,W=w,H=D,c=T,d=N,K=S,X=y;C("search",function(e,r,t){return[i(function(a){var s=H(this),o=W(a)?void 0:K(a,e);return o?V(o,a,s):new RegExp(a)[e](d(s))},"search"),function(n){var a=G(this),s=d(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=X(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var g=E,Z=i(function(e){return e!==void 0&&(g(e,"value")||g(e,"writable"))},"isDataDescriptor$1"),k=u,z=$,B=O,J=I,Q=Z,Y=P,rr=M;function x(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(J(e)===t)return e[r];if(n=Y.f(e,r),n)return Q(n)?n.value:n.get===void 0?void 0:z(n.get,t);if(B(a=rr(e)))return x(a,r,t)}i(x,"get");k({target:"Reflect",stat:!0},{get:x});var er=O,ar=Math.floor,tr=Number.isInteger||i(function(r){return!er(r)&&isFinite(r)&&ar(r)===r},"isInteger"),nr=u,ir=tr;nr({target:"Number",stat:!0},{isInteger:ir});export{tr as i};
//# sourceMappingURL=es.number.is-integer-dd487ca6.js.map