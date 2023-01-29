import{S as G,i as j,s as q,C,k as D,l as U,m as V,h as w,n as m,b as F,J as ue,E as H,F as J,G as K,f as I,t as L,H as B,_ as _e,o as se,j as me,U as ye,I as ee,$ as ae,A as ge,Z as be,g as we,d as Ie}from"./index-e565ab33.js";import{w as M}from"./index-bcec075a.js";let Se=1;function oe(){return`svelte-tabs-${Se++}`}function Te(t){let e,n,r,i;const u=t[4].default,s=C(u,t,t[3],null);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=U(a,"DIV",{class:!0});var o=V(e);s&&s.l(o),o.forEach(w),this.h()},h(){m(e,"class","svelte-tabs")},m(a,o){F(a,e,o),s&&s.m(e,null),n=!0,r||(i=ue(e,"keydown",t[1]),r=!0)},p(a,[o]){s&&s.p&&(!n||o&8)&&H(s,u,a,a[3],n?K(u,a[3],o,null):J(a[3]),null)},i(a){n||(I(s,a),n=!0)},o(a){L(s,a),n=!1},d(a){a&&w(e),s&&s.d(a),r=!1,i()}}}const X={};function Le(t,e,n){const r=t.indexOf(e);t.splice(r,1),n.update(i=>i===e?t[r]||t[t.length-1]:i)}function $e(t,e,n){let r,{$$slots:i={},$$scope:u}=e,{initialSelectedIndex:s=0}=e;const a=[],o=[],l=[],d=M({}),h=M({}),v=M(null);B(t,v,f=>n(5,r=f));const y=M(null);function A(f,_,k){f.push(_),k.update(pe=>pe||_),ye(()=>Le(f,_,k))}function T(f){const _=o.indexOf(f);v.set(f),y.set(l[_])}_e(X,{registerTab(f){A(o,f,v)},registerTabElement(f){a.push(f)},registerPanel(f){A(l,f,y)},selectTab:T,selectedTab:v,selectedPanel:y,controls:d,labeledBy:h}),se(()=>{T(o[s])}),me(()=>{for(let f=0;f<o.length;f++)d.update(_=>({..._,[o[f].id]:l[f].id})),h.update(_=>({..._,[l[f].id]:o[f].id}))});async function Z(f){if(f.target.classList.contains("svelte-tabs__tab")){let _=o.indexOf(r);switch(f.key){case"ArrowRight":_+=1,_>o.length-1&&(_=0),T(o[_]),a[_].focus();break;case"ArrowLeft":_-=1,_<0&&(_=o.length-1),T(o[_]),a[_].focus()}}}return t.$$set=f=>{"initialSelectedIndex"in f&&n(2,s=f.initialSelectedIndex),"$$scope"in f&&n(3,u=f.$$scope)},[v,Z,s,u,i]}class Ft extends G{constructor(e){super(),j(this,e,$e,Te,q,{initialSelectedIndex:2})}}function Ee(t){let e,n,r,i,u,s;const a=t[9].default,o=C(a,t,t[8],null);return{c(){e=D("li"),o&&o.c(),this.h()},l(l){e=U(l,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var d=V(e);o&&o.l(d),d.forEach(w),this.h()},h(){m(e,"role","tab"),m(e,"id",t[3].id),m(e,"aria-controls",n=t[2][t[3].id]),m(e,"aria-selected",t[1]),m(e,"tabindex",r=t[1]?0:-1),m(e,"class","svelte-tabs__tab svelte-1fbofsd"),ee(e,"svelte-tabs__selected",t[1])},m(l,d){F(l,e,d),o&&o.m(e,null),t[10](e),i=!0,u||(s=ue(e,"click",t[11]),u=!0)},p(l,[d]){o&&o.p&&(!i||d&256)&&H(o,a,l,l[8],i?K(a,l[8],d,null):J(l[8]),null),(!i||d&4&&n!==(n=l[2][l[3].id]))&&m(e,"aria-controls",n),(!i||d&2)&&m(e,"aria-selected",l[1]),(!i||d&2&&r!==(r=l[1]?0:-1))&&m(e,"tabindex",r),(!i||d&2)&&ee(e,"svelte-tabs__selected",l[1])},i(l){i||(I(o,l),i=!0)},o(l){L(o,l),i=!1},d(l){l&&w(e),o&&o.d(l),t[10](null),u=!1,s()}}}function Oe(t,e,n){let r,i,{$$slots:u={},$$scope:s}=e,a;const o={id:oe()},{registerTab:l,registerTabElement:d,selectTab:h,selectedTab:v,controls:y}=ae(X);B(t,v,f=>n(7,r=f)),B(t,y,f=>n(2,i=f));let A;l(o),se(async()=>{await ge(),d(a)});function T(f){be[f?"unshift":"push"](()=>{a=f,n(0,a)})}const Z=()=>h(o);return t.$$set=f=>{"$$scope"in f&&n(8,s=f.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(1,A=r===o)},[a,A,i,o,h,v,y,r,s,u,T,Z]}class Ht extends G{constructor(e){super(),j(this,e,Oe,Ee,q,{})}}function Ae(t){let e,n;const r=t[1].default,i=C(r,t,t[0],null);return{c(){e=D("ul"),i&&i.c(),this.h()},l(u){e=U(u,"UL",{role:!0,class:!0});var s=V(e);i&&i.l(s),s.forEach(w),this.h()},h(){m(e,"role","tablist"),m(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(u,s){F(u,e,s),i&&i.m(e,null),n=!0},p(u,[s]){i&&i.p&&(!n||s&1)&&H(i,r,u,u[0],n?K(r,u[0],s,null):J(u[0]),null)},i(u){n||(I(i,u),n=!0)},o(u){L(i,u),n=!1},d(u){u&&w(e),i&&i.d(u)}}}function Pe(t,e,n){let{$$slots:r={},$$scope:i}=e;return t.$$set=u=>{"$$scope"in u&&n(0,i=u.$$scope)},[i,r]}class Jt extends G{constructor(e){super(),j(this,e,Pe,Ae,q,{})}}function te(t){let e;const n=t[6].default,r=C(n,t,t[5],null);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,u){r&&r.m(i,u),e=!0},p(i,u){r&&r.p&&(!e||u&32)&&H(r,n,i,i[5],e?K(n,i[5],u,null):J(i[5]),null)},i(i){e||(I(r,i),e=!0)},o(i){L(r,i),e=!1},d(i){r&&r.d(i)}}}function Be(t){let e,n,r,i=t[1]===t[2]&&te(t);return{c(){e=D("div"),i&&i.c(),this.h()},l(u){e=U(u,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var s=V(e);i&&i.l(s),s.forEach(w),this.h()},h(){m(e,"id",t[2].id),m(e,"aria-labelledby",n=t[0][t[2].id]),m(e,"class","svelte-tabs__tab-panel svelte-epfyet"),m(e,"role","tabpanel")},m(u,s){F(u,e,s),i&&i.m(e,null),r=!0},p(u,[s]){u[1]===u[2]?i?(i.p(u,s),s&2&&I(i,1)):(i=te(u),i.c(),I(i,1),i.m(e,null)):i&&(we(),L(i,1,1,()=>{i=null}),Ie()),(!r||s&1&&n!==(n=u[0][u[2].id]))&&m(e,"aria-labelledby",n)},i(u){r||(I(i),r=!0)},o(u){L(i),r=!1},d(u){u&&w(e),i&&i.d()}}}function Me(t,e,n){let r,i,{$$slots:u={},$$scope:s}=e;const a={id:oe()},{registerPanel:o,selectedPanel:l,labeledBy:d}=ae(X);return B(t,l,h=>n(1,i=h)),B(t,d,h=>n(0,r=h)),o(a),t.$$set=h=>{"$$scope"in h&&n(5,s=h.$$scope)},[r,i,a,l,d,s,u]}class Kt extends G{constructor(e){super(),j(this,e,Me,Be,q,{})}}function Ge(t){return function(...e){var n=e.pop();return t.call(this,e,n)}}var je=typeof queueMicrotask=="function"&&queueMicrotask,le=typeof setImmediate=="function"&&setImmediate,fe=typeof process=="object"&&typeof process.nextTick=="function";function qe(t){setTimeout(t,0)}function Ce(t){return(e,...n)=>t(()=>e(...n))}var P;je?P=queueMicrotask:le?P=setImmediate:fe?P=process.nextTick:P=qe;var ce=Ce(P);function De(t){return Y(t)?function(...e){const n=e.pop(),r=t.apply(this,e);return ne(r,n)}:Ge(function(e,n){var r;try{r=t.apply(this,e)}catch(i){return n(i)}if(r&&typeof r.then=="function")return ne(r,n);n(null,r)})}function ne(t,e){return t.then(n=>{re(e,null,n)},n=>{re(e,n&&n.message?n:new Error(n))})}function re(t,e,n){try{t(e,n)}catch(r){ce(i=>{throw i},r)}}function Y(t){return t[Symbol.toStringTag]==="AsyncFunction"}function Ue(t){return t[Symbol.toStringTag]==="AsyncGenerator"}function Ve(t){return typeof t[Symbol.asyncIterator]=="function"}function p(t){if(typeof t!="function")throw new Error("expected a function");return Y(t)?De(t):t}function c(t,e=t.length){if(!e)throw new Error("arity is undefined");function n(...r){return typeof r[e-1]=="function"?t.apply(this,r):new Promise((i,u)=>{r[e-1]=(s,...a)=>{if(s)return u(s);i(a.length>1?a:a[0])},t.apply(this,r)})}return n}function x(t,e,n,r){e=e||[];var i=[],u=0,s=p(n);return t(e,(a,o,l)=>{var d=u++;s(a,(h,v)=>{i[d]=v,l(h)})},a=>{r(a,i)})}function N(t){return t&&typeof t.length=="number"&&t.length>=0&&t.length%1===0}const Q={};function $(t){function e(...n){if(t!==null){var r=t;t=null,r.apply(this,n)}}return Object.assign(e,t),e}function Fe(t){return t[Symbol.iterator]&&t[Symbol.iterator]()}function He(t){var e=-1,n=t.length;return function(){return++e<n?{value:t[e],key:e}:null}}function Je(t){var e=-1;return function(){var r=t.next();return r.done?null:(e++,{value:r.value,key:e})}}function Ke(t){var e=t?Object.keys(t):[],n=-1,r=e.length;return function i(){var u=e[++n];return u==="__proto__"?i():n<r?{value:t[u],key:u}:null}}function Ne(t){if(N(t))return He(t);var e=Fe(t);return e?Je(e):Ke(t)}function E(t){return function(...e){if(t===null)throw new Error("Callback was already called.");var n=t;t=null,n.apply(this,e)}}function ie(t,e,n,r){let i=!1,u=!1,s=!1,a=0,o=0;function l(){a>=e||s||i||(s=!0,t.next().then(({value:v,done:y})=>{if(!(u||i)){if(s=!1,y){i=!0,a<=0&&r(null);return}a++,n(v,o,d),o++,l()}}).catch(h))}function d(v,y){if(a-=1,!u){if(v)return h(v);if(v===!1){i=!0,u=!0;return}if(y===Q||i&&a<=0)return i=!0,r(null);l()}}function h(v){u||(s=!1,i=!0,r(v))}l()}var g=t=>(e,n,r)=>{if(r=$(r),t<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!e)return r(null);if(Ue(e))return ie(e,t,n,r);if(Ve(e))return ie(e[Symbol.asyncIterator](),t,n,r);var i=Ne(e),u=!1,s=!1,a=0,o=!1;function l(h,v){if(!s)if(a-=1,h)u=!0,r(h);else if(h===!1)u=!0,s=!0;else{if(v===Q||u&&a<=0)return u=!0,r(null);o||d()}}function d(){for(o=!0;a<t&&!u;){var h=i();if(h===null){u=!0,a<=0&&r(null);return}a+=1,n(h.value,h.key,E(l))}o=!1}d()};function Qe(t,e,n,r){return g(e)(t,p(n),r)}var de=c(Qe,4);function We(t,e,n){n=$(n);var r=0,i=0,{length:u}=t,s=!1;u===0&&n(null);function a(o,l){o===!1&&(s=!0),s!==!0&&(o?n(o):(++i===u||l===Q)&&n(null))}for(;r<u;r++)e(t[r],r,E(a))}function Ze(t,e,n){return de(t,1/0,e,n)}function Xe(t,e,n){var r=N(t)?We:Ze;return r(t,p(e),n)}var S=c(Xe,3);function Ye(t,e,n){return x(S,t,e,n)}var xe=c(Ye,3);function ze(t,e,n){return de(t,1,e,n)}var O=c(ze,3);function Re(t,e,n){return x(O,t,e,n)}c(Re,3);function ke(t,e,n,r){r=$(r);var i=p(n);return O(t,(u,s,a)=>{i(e,u,(o,l)=>{e=l,a(o)})},u=>r(u,e))}c(ke,4);function et(t,e,n,r){return x(g(e),t,n,r)}var z=c(et,4);function tt(t,e,n,r){var i=p(n);return z(t,e,(u,s)=>{i(u,(a,...o)=>a?s(a):s(a,o))},(u,s)=>{for(var a=[],o=0;o<s.length;o++)s[o]&&(a=a.concat(...s[o]));return r(u,a)})}var he=c(tt,4);function nt(t,e,n){return he(t,1/0,e,n)}c(nt,3);function rt(t,e,n){return he(t,1,e,n)}c(rt,3);function b(t,e){return(n,r,i,u)=>{var s=!1,a;const o=p(i);n(r,(l,d,h)=>{o(l,(v,y)=>{if(v||v===!1)return h(v);if(t(y)&&!a)return s=!0,a=e(!0,l),h(null,Q);h()})},l=>{if(l)return u(l);u(null,s?a:e(!1))})}}function it(t,e,n){return b(r=>r,(r,i)=>i)(S,t,e,n)}c(it,3);function ut(t,e,n,r){return b(i=>i,(i,u)=>u)(g(e),t,n,r)}c(ut,4);function st(t,e,n){return b(r=>r,(r,i)=>i)(g(1),t,e,n)}c(st,3);function at(t,e,n){n=E(n);var r=p(t),i=p(e),u;function s(o,...l){if(o)return n(o);o!==!1&&(u=l,i(...l,a))}function a(o,l){if(o)return n(o);if(o!==!1){if(!l)return n(null,...u);r(s)}}return a(null,!0)}c(at,3);function ve(t){return(e,n,r)=>t(e,r)}function ot(t,e,n){return S(t,ve(p(e)),n)}var Nt=c(ot,3);function lt(t,e,n,r){return g(e)(t,ve(p(n)),r)}var ft=c(lt,4);function ct(t,e,n){return ft(t,1,e,n)}var dt=c(ct,3);function ht(t){return Y(t)?t:function(...e){var n=e.pop(),r=!0;e.push((...i)=>{r?ce(()=>n(...i)):n(...i)}),t.apply(this,e),r=!1}}function vt(t,e,n){return b(r=>!r,r=>!r)(S,t,e,n)}c(vt,3);function pt(t,e,n,r){return b(i=>!i,i=>!i)(g(e),t,n,r)}c(pt,4);function _t(t,e,n){return b(r=>!r,r=>!r)(O,t,e,n)}c(_t,3);function mt(t,e,n,r){var i=new Array(e.length);t(e,(u,s,a)=>{n(u,(o,l)=>{i[s]=!!l,a(o)})},u=>{if(u)return r(u);for(var s=[],a=0;a<e.length;a++)i[a]&&s.push(e[a]);r(null,s)})}function yt(t,e,n,r){var i=[];t(e,(u,s,a)=>{n(u,(o,l)=>{if(o)return a(o);l&&i.push({index:s,value:u}),a(o)})},u=>{if(u)return r(u);r(null,i.sort((s,a)=>s.index-a.index).map(s=>s.value))})}function W(t,e,n,r){var i=N(e)?mt:yt;return i(t,e,p(n),r)}function gt(t,e,n){return W(S,t,e,n)}c(gt,3);function bt(t,e,n,r){return W(g(e),t,n,r)}c(bt,4);function wt(t,e,n){return W(O,t,e,n)}c(wt,3);function It(t,e){var n=E(e),r=p(ht(t));function i(u){if(u)return n(u);u!==!1&&r(i)}return i()}c(It,2);function St(t,e,n,r){var i=p(n);return z(t,e,(u,s)=>{i(u,(a,o)=>a?s(a):s(a,{key:o,val:u}))},(u,s)=>{for(var a={},{hasOwnProperty:o}=Object.prototype,l=0;l<s.length;l++)if(s[l]){var{key:d}=s[l],{val:h}=s[l];o.call(a,d)?a[d].push(h):a[d]=[h]}return r(u,a)})}c(St,4);function Tt(t,e,n,r){r=$(r);var i={},u=p(n);return g(e)(t,(s,a,o)=>{u(s,a,(l,d)=>{if(l)return o(l);i[a]=d,o(l)})},s=>r(s,i))}c(Tt,4);fe?process.nextTick:le&&setImmediate;c((t,e,n)=>{var r=N(e)?[]:{};t(e,(i,u,s)=>{p(i)((a,...o)=>{o.length<2&&([o]=o),r[u]=o,s(a)})},i=>n(i,r))},3);function Lt(t,e){if(e=$(e),!Array.isArray(t))return e(new TypeError("First argument to race must be an array of functions"));if(!t.length)return e();for(var n=0,r=t.length;n<r;n++)p(t[n])(e)}c(Lt,2);function R(t,e,n,r){const i=p(n);return W(t,e,(u,s)=>{i(u,(a,o)=>{s(a,!o)})},r)}function $t(t,e,n){return R(S,t,e,n)}c($t,3);function Et(t,e,n,r){return R(g(e),t,n,r)}c(Et,4);function Ot(t,e,n){return R(O,t,e,n)}c(Ot,3);function At(t,e,n){return b(Boolean,r=>r)(S,t,e,n)}c(At,3);function Pt(t,e,n,r){return b(Boolean,i=>i)(g(e),t,n,r)}c(Pt,4);function Bt(t,e,n){return b(Boolean,r=>r)(O,t,e,n)}c(Bt,3);function Mt(t,e,n){var r=p(e);return xe(t,(u,s)=>{r(u,(a,o)=>{if(a)return s(a);s(a,{value:u,criteria:o})})},(u,s)=>{if(u)return n(u);n(null,s.sort(i).map(a=>a.value))});function i(u,s){var a=u.criteria,o=s.criteria;return a<o?-1:a>o?1:0}}c(Mt,3);function Gt(t){for(var e=Array(t);t--;)e[t]=t;return e}function jt(t,e,n,r){var i=p(n);return z(Gt(t),e,i,r)}function Qt(t,e,n){return jt(t,1,e,n)}function qt(t,e){var n=null,r;return dt(t,(i,u)=>{p(i)((s,...a)=>{if(s===!1)return u(s);a.length<2?[r]=a:r=a,n=s,u(s?null:{})})},()=>e(n,r))}c(qt);function Ct(t,e,n){n=E(n);var r=p(e),i=p(t),u=[];function s(o,...l){if(o)return n(o);u=l,o!==!1&&i(a)}function a(o,l){if(o)return n(o);if(o!==!1){if(!l)return n(null,...u);r(s)}}return i(a)}c(Ct,3);function Dt(t,e){if(e=$(e),!Array.isArray(t))return e(new Error("First argument to waterfall must be an array of functions"));if(!t.length)return e();var n=0;function r(u){var s=p(t[n++]);s(...u,E(i))}function i(u,...s){if(u!==!1){if(u||n===t.length)return e(u,...s);r(s)}}r([])}c(Dt);export{Ft as T,Jt as a,Kt as b,Ht as c,Nt as e,Qt as t};
