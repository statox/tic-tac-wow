import{_ as v}from"./preload-helper-41c905a7.js";import{S as D,i as S,s as k,k as E,l as w,m as P,h as m,n as o,b as p,a2 as C,B as _,V as I,o as V}from"./index-1d785069.js";function j(r){let e,n,s;return{c(){e=E("div"),this.h()},l(a){e=w(a,"DIV",{style:!0,class:!0}),P(e).forEach(m),this.h()},h(){o(e,"style",r[0]),o(e,"class","m-0")},m(a,l){p(a,e,l),n||(s=C(r[1].call(null,e)),n=!0)},p(a,[l]){l&1&&o(e,"style",a[0])},i:_,o:_,d(a){a&&m(e),n=!1,s()}}}function O(r,e){return e.forEach(([n,s])=>r[n]=s),r}function q(r,e,n){let{target:s=void 0}=e,{sketch:a=void 0}=e,{parentDivStyle:l="display: block;"}=e,{debug:c=!1}=e,f;const u=I(),d={ref(){u("ref",s)},instance(){u("instance",f)}};function g(t){return n(2,s=t),{destroy(){n(2,s=void 0)}}}return V(async()=>{const t=await v(()=>import("./p5.min-7dea8225.js").then(i=>i.p),[],import.meta.url),{default:y}=t,h=Object.entries(t).filter(([i,b])=>b instanceof Function&&i[0]!=="_"&&i!=="default");c&&console.log("available p5 native classes",h),f=new y(i=>(i=O(i,h),c&&console.log("p5 instance",i),window._p5Instance=i,a(i)),s),d.ref(),d.instance()}),r.$$set=t=>{"target"in t&&n(2,s=t.target),"sketch"in t&&n(3,a=t.sketch),"parentDivStyle"in t&&n(0,l=t.parentDivStyle),"debug"in t&&n(4,c=t.debug)},[l,g,s,a,c]}class F extends D{constructor(e){super(),S(this,e,q,j,k,{target:2,sketch:3,parentDivStyle:0,debug:4})}}export{F as P};
