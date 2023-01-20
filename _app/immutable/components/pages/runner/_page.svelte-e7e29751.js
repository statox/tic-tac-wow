import{S as Ge,i as Te,s as We,k as E,l as P,m as L,h as _,n as U,p as ge,I as Je,b as F,B as pe,q as d,a as B,r as g,c as M,D as u,e as Qe,J as Ce,u as ee,w as ze,x as De,K as Ke,L as Xe,M as Oe,y as Fe,N as be,O as _t,f as Se,g as St,t as Ie,d as wt,z as He,P as Et,Q as Ye}from"../../../chunks/index-1d785069.js";import{s as we,g as Pt,c as Ze,p as $e,a as xe,b as Lt}from"../../../chunks/service-a0b0a97b.js";function bt(t){return function(...e){var r=e.pop();return t.call(this,e,r)}}var At=typeof queueMicrotask=="function"&&queueMicrotask,pt=typeof setImmediate=="function"&&setImmediate,vt=typeof process=="object"&&typeof process.nextTick=="function";function It(t){setTimeout(t,0)}function Ot(t){return(e,...r)=>t(()=>e(...r))}var Ae;At?Ae=queueMicrotask:pt?Ae=setImmediate:vt?Ae=process.nextTick:Ae=It;var ht=Ot(Ae);function Gt(t){return je(t)?function(...e){const r=e.pop(),n=t.apply(this,e);return et(n,r)}:bt(function(e,r){var n;try{n=t.apply(this,e)}catch(a){return r(a)}if(n&&typeof n.then=="function")return et(n,r);r(null,n)})}function et(t,e){return t.then(r=>{tt(e,null,r)},r=>{tt(e,r&&r.message?r:new Error(r))})}function tt(t,e,r){try{t(e,r)}catch(n){ht(a=>{throw a},n)}}function je(t){return t[Symbol.toStringTag]==="AsyncFunction"}function Tt(t){return t[Symbol.toStringTag]==="AsyncGenerator"}function Wt(t){return typeof t[Symbol.asyncIterator]=="function"}function z(t){if(typeof t!="function")throw new Error("expected a function");return je(t)?Gt(t):t}function v(t,e=t.length){if(!e)throw new Error("arity is undefined");function r(...n){return typeof n[e-1]=="function"?t.apply(this,n):new Promise((a,i)=>{n[e-1]=(l,...s)=>{if(l)return i(l);a(s.length>1?s:s[0])},t.apply(this,n)})}return r}function qe(t,e,r,n){e=e||[];var a=[],i=0,l=z(r);return t(e,(s,o,c)=>{var w=i++;l(s,(h,S)=>{a[w]=S,c(h)})},s=>{n(s,a)})}function Ne(t){return t&&typeof t.length=="number"&&t.length>=0&&t.length%1===0}const Be={};function Ee(t){function e(...r){if(t!==null){var n=t;t=null,n.apply(this,r)}}return Object.assign(e,t),e}function Nt(t){return t[Symbol.iterator]&&t[Symbol.iterator]()}function Bt(t){var e=-1,r=t.length;return function(){return++e<r?{value:t[e],key:e}:null}}function Mt(t){var e=-1;return function(){var n=t.next();return n.done?null:(e++,{value:n.value,key:e})}}function Ct(t){var e=t?Object.keys(t):[],r=-1,n=e.length;return function a(){var i=e[++r];return i==="__proto__"?a():r<n?{value:t[i],key:i}:null}}function zt(t){if(Ne(t))return Bt(t);var e=Nt(t);return e?Mt(e):Ct(t)}function Pe(t){return function(...e){if(t===null)throw new Error("Callback was already called.");var r=t;t=null,r.apply(this,e)}}function nt(t,e,r,n){let a=!1,i=!1,l=!1,s=0,o=0;function c(){s>=e||l||a||(l=!0,t.next().then(({value:S,done:m})=>{if(!(i||a)){if(l=!1,m){a=!0,s<=0&&n(null);return}s++,r(S,o,w),o++,c()}}).catch(h))}function w(S,m){if(s-=1,!i){if(S)return h(S);if(S===!1){a=!0,i=!0;return}if(m===Be||a&&s<=0)return a=!0,n(null);c()}}function h(S){i||(l=!1,a=!0,n(S))}c()}var ae=t=>(e,r,n)=>{if(n=Ee(n),t<=0)throw new RangeError("concurrency limit cannot be less than 1");if(!e)return n(null);if(Tt(e))return nt(e,t,r,n);if(Wt(e))return nt(e[Symbol.asyncIterator](),t,r,n);var a=zt(e),i=!1,l=!1,s=0,o=!1;function c(h,S){if(!l)if(s-=1,h)i=!0,n(h);else if(h===!1)i=!0,l=!0;else{if(S===Be||i&&s<=0)return i=!0,n(null);o||w()}}function w(){for(o=!0;s<t&&!i;){var h=a();if(h===null){i=!0,s<=0&&n(null);return}s+=1,r(h.value,h.key,Pe(c))}o=!1}w()};function Dt(t,e,r,n){return ae(e)(t,z(r),n)}var mt=v(Dt,4);function Ft(t,e,r){r=Ee(r);var n=0,a=0,{length:i}=t,l=!1;i===0&&r(null);function s(o,c){o===!1&&(l=!0),l!==!0&&(o?r(o):(++a===i||c===Be)&&r(null))}for(;n<i;n++)e(t[n],n,Pe(s))}function Ht(t,e,r){return mt(t,1/0,e,r)}function jt(t,e,r){var n=Ne(t)?Ft:Ht;return n(t,z(e),r)}var ve=v(jt,3);function qt(t,e,r){return qe(ve,t,e,r)}var Vt=v(qt,3);function Ut(t,e,r){return mt(t,1,e,r)}var Le=v(Ut,3);function kt(t,e,r){return qe(Le,t,e,r)}v(kt,3);function Rt(t,e,r,n){n=Ee(n);var a=z(r);return Le(t,(i,l,s)=>{a(e,i,(o,c)=>{e=c,s(o)})},i=>n(i,e))}v(Rt,4);function Jt(t,e,r,n){return qe(ae(e),t,r,n)}var yt=v(Jt,4);function Qt(t,e,r,n){var a=z(r);return yt(t,e,(i,l)=>{a(i,(s,...o)=>s?l(s):l(s,o))},(i,l)=>{for(var s=[],o=0;o<l.length;o++)l[o]&&(s=s.concat(...l[o]));return n(i,s)})}var dt=v(Qt,4);function Kt(t,e,r){return dt(t,1/0,e,r)}v(Kt,3);function Xt(t,e,r){return dt(t,1,e,r)}v(Xt,3);function ie(t,e){return(r,n,a,i)=>{var l=!1,s;const o=z(a);r(n,(c,w,h)=>{o(c,(S,m)=>{if(S||S===!1)return h(S);if(t(m)&&!s)return l=!0,s=e(!0,c),h(null,Be);h()})},c=>{if(c)return i(c);i(null,l?s:e(!1))})}}function Yt(t,e,r){return ie(n=>n,(n,a)=>a)(ve,t,e,r)}v(Yt,3);function Zt(t,e,r,n){return ie(a=>a,(a,i)=>i)(ae(e),t,r,n)}v(Zt,4);function $t(t,e,r){return ie(n=>n,(n,a)=>a)(ae(1),t,e,r)}v($t,3);function xt(t,e,r){r=Pe(r);var n=z(t),a=z(e),i;function l(o,...c){if(o)return r(o);o!==!1&&(i=c,a(...c,s))}function s(o,c){if(o)return r(o);if(o!==!1){if(!c)return r(null,...i);n(l)}}return s(null,!0)}v(xt,3);function gt(t){return(e,r,n)=>t(e,n)}function en(t,e,r){return ve(t,gt(z(e)),r)}var tn=v(en,3);function nn(t,e,r,n){return ae(e)(t,gt(z(r)),n)}var rn=v(nn,4);function an(t,e,r){return rn(t,1,e,r)}var ln=v(an,3);function sn(t){return je(t)?t:function(...e){var r=e.pop(),n=!0;e.push((...a)=>{n?ht(()=>r(...a)):r(...a)}),t.apply(this,e),n=!1}}function on(t,e,r){return ie(n=>!n,n=>!n)(ve,t,e,r)}v(on,3);function un(t,e,r,n){return ie(a=>!a,a=>!a)(ae(e),t,r,n)}v(un,4);function fn(t,e,r){return ie(n=>!n,n=>!n)(Le,t,e,r)}v(fn,3);function cn(t,e,r,n){var a=new Array(e.length);t(e,(i,l,s)=>{r(i,(o,c)=>{a[l]=!!c,s(o)})},i=>{if(i)return n(i);for(var l=[],s=0;s<e.length;s++)a[s]&&l.push(e[s]);n(null,l)})}function _n(t,e,r,n){var a=[];t(e,(i,l,s)=>{r(i,(o,c)=>{if(o)return s(o);c&&a.push({index:l,value:i}),s(o)})},i=>{if(i)return n(i);n(null,a.sort((l,s)=>l.index-s.index).map(l=>l.value))})}function Me(t,e,r,n){var a=Ne(e)?cn:_n;return a(t,e,z(r),n)}function pn(t,e,r){return Me(ve,t,e,r)}v(pn,3);function vn(t,e,r,n){return Me(ae(e),t,r,n)}v(vn,4);function hn(t,e,r){return Me(Le,t,e,r)}v(hn,3);function mn(t,e){var r=Pe(e),n=z(sn(t));function a(i){if(i)return r(i);i!==!1&&n(a)}return a()}v(mn,2);function yn(t,e,r,n){var a=z(r);return yt(t,e,(i,l)=>{a(i,(s,o)=>s?l(s):l(s,{key:o,val:i}))},(i,l)=>{for(var s={},{hasOwnProperty:o}=Object.prototype,c=0;c<l.length;c++)if(l[c]){var{key:w}=l[c],{val:h}=l[c];o.call(s,w)?s[w].push(h):s[w]=[h]}return n(i,s)})}v(yn,4);function dn(t,e,r,n){n=Ee(n);var a={},i=z(r);return ae(e)(t,(l,s,o)=>{i(l,s,(c,w)=>{if(c)return o(c);a[s]=w,o(c)})},l=>n(l,a))}v(dn,4);vt?process.nextTick:pt&&setImmediate;v((t,e,r)=>{var n=Ne(e)?[]:{};t(e,(a,i,l)=>{z(a)((s,...o)=>{o.length<2&&([o]=o),n[i]=o,l(s)})},a=>r(a,n))},3);function gn(t,e){if(e=Ee(e),!Array.isArray(t))return e(new TypeError("First argument to race must be an array of functions"));if(!t.length)return e();for(var r=0,n=t.length;r<n;r++)z(t[r])(e)}v(gn,2);function Ve(t,e,r,n){const a=z(r);return Me(t,e,(i,l)=>{a(i,(s,o)=>{l(s,!o)})},n)}function Sn(t,e,r){return Ve(ve,t,e,r)}v(Sn,3);function wn(t,e,r,n){return Ve(ae(e),t,r,n)}v(wn,4);function En(t,e,r){return Ve(Le,t,e,r)}v(En,3);function Pn(t,e,r){return ie(Boolean,n=>n)(ve,t,e,r)}v(Pn,3);function Ln(t,e,r,n){return ie(Boolean,a=>a)(ae(e),t,r,n)}v(Ln,4);function bn(t,e,r){return ie(Boolean,n=>n)(Le,t,e,r)}v(bn,3);function An(t,e,r){var n=z(e);return Vt(t,(i,l)=>{n(i,(s,o)=>{if(s)return l(s);l(s,{value:i,criteria:o})})},(i,l)=>{if(i)return r(i);r(null,l.sort(a).map(s=>s.value))});function a(i,l){var s=i.criteria,o=l.criteria;return s<o?-1:s>o?1:0}}v(An,3);function In(t,e){var r=null,n;return ln(t,(a,i)=>{z(a)((l,...s)=>{if(l===!1)return i(l);s.length<2?[n]=s:n=s,r=l,i(l?null:{})})},()=>e(r,n))}v(In);function On(t,e,r){r=Pe(r);var n=z(e),a=z(t),i=[];function l(o,...c){if(o)return r(o);i=c,o!==!1&&a(s)}function s(o,c){if(o)return r(o);if(o!==!1){if(!c)return r(null,...i);n(l)}}return a(s)}v(On,3);function Gn(t,e){if(e=Ee(e),!Array.isArray(t))return e(new Error("First argument to waterfall must be an array of functions"));if(!t.length)return e();var r=0;function n(i){var l=z(t[r++]);l(...i,Pe(a))}function a(i,...l){if(i!==!1){if(i||r===t.length)return e(i,...l);n(l)}}n([])}v(Gn);function Tn(t){let e;return{c(){e=E("div"),this.h()},l(r){e=P(r,"DIV",{class:!0,style:!0}),L(e).forEach(_),this.h()},h(){U(e,"class","circle svelte-dqjlks"),ge(e,"--size",t[3]+t[1]),ge(e,"--color",t[0]),ge(e,"--duration",t[2]),Je(e,"pause-animation",t[4])},m(r,n){F(r,e,n)},p(r,[n]){n&10&&ge(e,"--size",r[3]+r[1]),n&1&&ge(e,"--color",r[0]),n&4&&ge(e,"--duration",r[2]),n&16&&Je(e,"pause-animation",r[4])},i:pe,o:pe,d(r){r&&_(e)}}}function Wn(t,e,r){let{color:n="#FF3E00"}=e,{unit:a="px"}=e,{duration:i="0.75s"}=e,{size:l="60"}=e,{pause:s=!1}=e;return t.$$set=o=>{"color"in o&&r(0,n=o.color),"unit"in o&&r(1,a=o.unit),"duration"in o&&r(2,i=o.duration),"size"in o&&r(3,l=o.size),"pause"in o&&r(4,s=o.pause)},[n,a,i,l,s]}class Nn extends Ge{constructor(e){super(),Te(this,e,Wn,Tn,We,{color:0,unit:1,duration:2,size:3,pause:4})}}function rt(t,e,r){const n=t.slice();return n[1]=e[r],n}function at(t){let e,r=[...t[0]].reverse(),n=[];for(let a=0;a<r.length;a+=1)n[a]=lt(rt(t,r,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=Qe()},l(a){for(let i=0;i<n.length;i+=1)n[i].l(a);e=Qe()},m(a,i){for(let l=0;l<n.length;l+=1)n[l].m(a,i);F(a,e,i)},p(a,i){if(i&1){r=[...a[0]].reverse();let l;for(l=0;l<r.length;l+=1){const s=rt(a,r,l);n[l]?n[l].p(s,i):(n[l]=lt(s),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=r.length}},d(a){Ce(n,a),a&&_(e)}}}function lt(t){let e,r=t[1].totalGame+"",n,a,i,l=t[1].p1Strat+"",s,o,c=t[1].p2Strat+"",w,h,S,m,T,j,V=t[1].p1Win+"",W,A,I=t[1].p1WinPercent*100+"",k,H,J,q,te,K=t[1].p2Win+"",se,ue,ne=t[1].p2WinPercent*100+"",Q,Z,fe,X,re,C=t[1].draw+"",$,D,N=t[1].drawPercent*100+"",f,O,b,y,R=t[1].avgMovesByGame+"",ce,_e,le,oe=t[1].timeSeconds+"",x;return{c(){e=E("span"),n=d(r),a=B(),i=E("span"),s=d(l),o=d(" vs "),w=d(c),h=B(),S=E("div"),m=E("ul"),T=E("li"),j=d("P1 win: "),W=d(V),A=d(" ("),k=d(I),H=d("%)"),J=B(),q=E("li"),te=d("P2 win: "),se=d(K),ue=d(" ("),Q=d(ne),Z=d("%)"),fe=B(),X=E("li"),re=d("Draw: "),$=d(C),D=d(" ("),f=d(N),O=d("%)"),b=B(),y=E("span"),ce=d(R),_e=B(),le=E("span"),x=d(oe)},l(p){e=P(p,"SPAN",{});var G=L(e);n=g(G,r),G.forEach(_),a=M(p),i=P(p,"SPAN",{});var Y=L(i);s=g(Y,l),o=g(Y," vs "),w=g(Y,c),Y.forEach(_),h=M(p),S=P(p,"DIV",{});var Ue=L(S);m=P(Ue,"UL",{});var he=L(m);T=P(he,"LI",{});var me=L(T);j=g(me,"P1 win: "),W=g(me,V),A=g(me," ("),k=g(me,I),H=g(me,"%)"),me.forEach(_),J=M(he),q=P(he,"LI",{});var ye=L(q);te=g(ye,"P2 win: "),se=g(ye,K),ue=g(ye," ("),Q=g(ye,ne),Z=g(ye,"%)"),ye.forEach(_),fe=M(he),X=P(he,"LI",{});var de=L(X);re=g(de,"Draw: "),$=g(de,C),D=g(de," ("),f=g(de,N),O=g(de,"%)"),de.forEach(_),he.forEach(_),Ue.forEach(_),b=M(p),y=P(p,"SPAN",{});var ke=L(y);ce=g(ke,R),ke.forEach(_),_e=M(p),le=P(p,"SPAN",{});var Re=L(le);x=g(Re,oe),Re.forEach(_)},m(p,G){F(p,e,G),u(e,n),F(p,a,G),F(p,i,G),u(i,s),u(i,o),u(i,w),F(p,h,G),F(p,S,G),u(S,m),u(m,T),u(T,j),u(T,W),u(T,A),u(T,k),u(T,H),u(m,J),u(m,q),u(q,te),u(q,se),u(q,ue),u(q,Q),u(q,Z),u(m,fe),u(m,X),u(X,re),u(X,$),u(X,D),u(X,f),u(X,O),F(p,b,G),F(p,y,G),u(y,ce),F(p,_e,G),F(p,le,G),u(le,x)},p(p,G){G&1&&r!==(r=p[1].totalGame+"")&&ee(n,r),G&1&&l!==(l=p[1].p1Strat+"")&&ee(s,l),G&1&&c!==(c=p[1].p2Strat+"")&&ee(w,c),G&1&&V!==(V=p[1].p1Win+"")&&ee(W,V),G&1&&I!==(I=p[1].p1WinPercent*100+"")&&ee(k,I),G&1&&K!==(K=p[1].p2Win+"")&&ee(se,K),G&1&&ne!==(ne=p[1].p2WinPercent*100+"")&&ee(Q,ne),G&1&&C!==(C=p[1].draw+"")&&ee($,C),G&1&&N!==(N=p[1].drawPercent*100+"")&&ee(f,N),G&1&&R!==(R=p[1].avgMovesByGame+"")&&ee(ce,R),G&1&&oe!==(oe=p[1].timeSeconds+"")&&ee(x,oe)},d(p){p&&_(e),p&&_(a),p&&_(i),p&&_(h),p&&_(S),p&&_(b),p&&_(y),p&&_(_e),p&&_(le)}}}function Bn(t){let e,r,n,a,i,l,s,o,c,w,h,S,m,T,j,V,W=t[0].length&&at(t);return{c(){e=E("div"),r=E("span"),n=d("Game played"),a=B(),i=E("span"),l=d("Compared strategies"),s=B(),o=E("span"),c=d("Win rates"),w=B(),h=E("span"),S=d("Avg move by game"),m=B(),T=E("span"),j=d("Total time"),V=B(),W&&W.c(),this.h()},l(A){e=P(A,"DIV",{class:!0});var I=L(e);r=P(I,"SPAN",{class:!0});var k=L(r);n=g(k,"Game played"),k.forEach(_),a=M(I),i=P(I,"SPAN",{class:!0});var H=L(i);l=g(H,"Compared strategies"),H.forEach(_),s=M(I),o=P(I,"SPAN",{class:!0});var J=L(o);c=g(J,"Win rates"),J.forEach(_),w=M(I),h=P(I,"SPAN",{class:!0});var q=L(h);S=g(q,"Avg move by game"),q.forEach(_),m=M(I),T=P(I,"SPAN",{class:!0});var te=L(T);j=g(te,"Total time"),te.forEach(_),V=M(I),W&&W.l(I),I.forEach(_),this.h()},h(){U(r,"class","grid-header svelte-n839zb"),U(i,"class","grid-header svelte-n839zb"),U(o,"class","grid-header svelte-n839zb"),U(h,"class","grid-header svelte-n839zb"),U(T,"class","grid-header svelte-n839zb"),U(e,"class","overlay svelte-n839zb")},m(A,I){F(A,e,I),u(e,r),u(r,n),u(e,a),u(e,i),u(i,l),u(e,s),u(e,o),u(o,c),u(e,w),u(e,h),u(h,S),u(e,m),u(e,T),u(T,j),u(e,V),W&&W.m(e,null)},p(A,[I]){A[0].length?W?W.p(A,I):(W=at(A),W.c(),W.m(e,null)):W&&(W.d(1),W=null)},i:pe,o:pe,d(A){A&&_(e),W&&W.d()}}}function Mn(t,e,r){let{statsHistory:n}=e;return t.$$set=a=>{"statsHistory"in a&&r(0,n=a.statsHistory)},[n]}class Cn extends Ge{constructor(e){super(),Te(this,e,Mn,Bn,We,{statsHistory:0})}}const zn=({player1Strat:t,player2Strat:e,showSteps:r,showFinalGame:n})=>{const a=we[t],i=we[e],l=Pt();let s=0;for(;s<10&&!["draw","winner"].includes(l.state.action);)a(l,l.player1),s++,Ze(l),r&&($e(l),xe(l)),!["draw","winner"].includes(l.state.action)&&(i(l,l.player2),s++,Ze(l),r&&($e(l),xe(l),console.log()));return n&&Lt(l),{nbMoves:s,finalState:{...l.state}}},it=(t,e,r)=>{const n={totalGame:r,p1Strat:t,p2Strat:e,totalMoves:0,avgMovesByGame:0,p1Win:0,p2Win:0,draw:0,p1WinPercent:0,p2WinPercent:0,drawPercent:0,timeSeconds:0},a=()=>{const l=Date.now();n.timeSeconds=(l-i)/1e3,n.p1WinPercent=n.p1Win/n.totalGame,n.p2WinPercent=n.p2Win/n.totalGame,n.drawPercent=n.draw/n.totalGame,n.avgMovesByGame=n.totalMoves/n.totalGame},i=Date.now();for(let l=0;l<n.totalGame;l++){const{finalState:s,nbMoves:o}=zn({player1Strat:n.p1Strat,player2Strat:n.p2Strat,showSteps:!1,showFinalGame:!1});n.totalMoves+=o,s.action==="winner"?s.player===1?n.p1Win++:n.p2Win++:n.draw++}return a(),n};function st(t,e,r){const n=t.slice();return n[11]=e[r],n}function ot(t,e,r){const n=t.slice();return n[11]=e[r],n}function ut(t){let e,r=t[11]+"",n,a;return{c(){e=E("option"),n=d(r),a=B(),this.h()},l(i){e=P(i,"OPTION",{});var l=L(e);n=g(l,r),a=M(l),l.forEach(_),this.h()},h(){e.__value=t[11],e.value=e.__value},m(i,l){F(i,e,l),u(e,n),u(e,a)},p:pe,d(i){i&&_(e)}}}function ft(t){let e,r=t[11]+"",n,a;return{c(){e=E("option"),n=d(r),a=B(),this.h()},l(i){e=P(i,"OPTION",{});var l=L(e);n=g(l,r),a=M(l),l.forEach(_),this.h()},h(){e.__value=t[11],e.value=e.__value},m(i,l){F(i,e,l),u(e,n),u(e,a)},p:pe,d(i){i&&_(e)}}}function ct(t){let e,r;return e=new Nn({props:{size:"10",color:"#FF3E00",unit:"px",duration:"1s"}}),{c(){ze(e.$$.fragment)},l(n){De(e.$$.fragment,n)},m(n,a){Fe(e,n,a),r=!0},i(n){r||(Se(e.$$.fragment,n),r=!0)},o(n){Ie(e.$$.fragment,n),r=!1},d(n){He(e,n)}}}function Dn(t){let e,r,n,a,i,l,s,o,c,w,h,S,m,T,j,V,W,A,I,k,H,J,q,te,K,se,ue,ne,Q,Z,fe,X,re=Object.keys(we),C=[];for(let f=0;f<re.length;f+=1)C[f]=ut(ot(t,re,f));let $=Object.keys(we),D=[];for(let f=0;f<$.length;f+=1)D[f]=ft(st(t,$,f));let N=t[3]&&ct();return Q=new Cn({props:{statsHistory:t[4]}}),{c(){e=E("h2"),r=d("Tic Tac Cup - Runner"),n=B(),a=E("div"),i=E("label"),l=d("Number of games to play"),s=B(),o=E("input"),c=B(),w=E("label"),h=d("Player 1 algorithm"),S=B(),m=E("select");for(let f=0;f<C.length;f+=1)C[f].c();T=B(),j=E("label"),V=d("Player 2 algorithm"),W=B(),A=E("select");for(let f=0;f<D.length;f+=1)D[f].c();I=B(),k=E("div"),H=E("span"),J=E("button"),q=d("Start runner"),te=B(),K=E("button"),se=d("Start all strats"),ue=B(),N&&N.c(),ne=B(),ze(Q.$$.fragment),this.h()},l(f){e=P(f,"H2",{});var O=L(e);r=g(O,"Tic Tac Cup - Runner"),O.forEach(_),n=M(f),a=P(f,"DIV",{});var b=L(a);i=P(b,"LABEL",{for:!0});var y=L(i);l=g(y,"Number of games to play"),y.forEach(_),s=M(b),o=P(b,"INPUT",{id:!0,type:!0,min:!0}),c=M(b),w=P(b,"LABEL",{for:!0});var R=L(w);h=g(R,"Player 1 algorithm"),R.forEach(_),S=M(b),m=P(b,"SELECT",{id:!0});var ce=L(m);for(let Y=0;Y<C.length;Y+=1)C[Y].l(ce);ce.forEach(_),T=M(b),j=P(b,"LABEL",{for:!0});var _e=L(j);V=g(_e,"Player 2 algorithm"),_e.forEach(_),W=M(b),A=P(b,"SELECT",{id:!0});var le=L(A);for(let Y=0;Y<D.length;Y+=1)D[Y].l(le);le.forEach(_),b.forEach(_),I=M(f),k=P(f,"DIV",{});var oe=L(k);H=P(oe,"SPAN",{});var x=L(H);J=P(x,"BUTTON",{});var p=L(J);q=g(p,"Start runner"),p.forEach(_),te=M(x),K=P(x,"BUTTON",{});var G=L(K);se=g(G,"Start all strats"),G.forEach(_),ue=M(x),N&&N.l(x),x.forEach(_),oe.forEach(_),ne=M(f),De(Q.$$.fragment,f),this.h()},h(){U(i,"for","nbGames"),U(o,"id","nbGames"),U(o,"type","number"),U(o,"min","1"),o.disabled=t[3],U(w,"for","player1Strat"),U(m,"id","player1Strat"),m.disabled=t[3],t[0]===void 0&&Ke(()=>t[8].call(m)),U(j,"for","player2Strat"),U(A,"id","player2Strat"),A.disabled=t[3],t[1]===void 0&&Ke(()=>t[9].call(A))},m(f,O){F(f,e,O),u(e,r),F(f,n,O),F(f,a,O),u(a,i),u(i,l),u(a,s),u(a,o),Xe(o,t[2]),u(a,c),u(a,w),u(w,h),u(a,S),u(a,m);for(let b=0;b<C.length;b+=1)C[b].m(m,null);Oe(m,t[0]),u(a,T),u(a,j),u(j,V),u(a,W),u(a,A);for(let b=0;b<D.length;b+=1)D[b].m(A,null);Oe(A,t[1]),F(f,I,O),F(f,k,O),u(k,H),u(H,J),u(J,q),u(H,te),u(H,K),u(K,se),u(H,ue),N&&N.m(H,null),F(f,ne,O),Fe(Q,f,O),Z=!0,fe||(X=[be(o,"input",t[7]),be(m,"change",t[8]),be(A,"change",t[9]),be(J,"click",t[5]),be(K,"click",t[6])],fe=!0)},p(f,[O]){if((!Z||O&8)&&(o.disabled=f[3]),O&4&&_t(o.value)!==f[2]&&Xe(o,f[2]),O&0){re=Object.keys(we);let y;for(y=0;y<re.length;y+=1){const R=ot(f,re,y);C[y]?C[y].p(R,O):(C[y]=ut(R),C[y].c(),C[y].m(m,null))}for(;y<C.length;y+=1)C[y].d(1);C.length=re.length}if((!Z||O&8)&&(m.disabled=f[3]),O&1&&Oe(m,f[0]),O&0){$=Object.keys(we);let y;for(y=0;y<$.length;y+=1){const R=st(f,$,y);D[y]?D[y].p(R,O):(D[y]=ft(R),D[y].c(),D[y].m(A,null))}for(;y<D.length;y+=1)D[y].d(1);D.length=$.length}(!Z||O&8)&&(A.disabled=f[3]),O&2&&Oe(A,f[1]),f[3]?N?O&8&&Se(N,1):(N=ct(),N.c(),Se(N,1),N.m(H,null)):N&&(St(),Ie(N,1,1,()=>{N=null}),wt());const b={};O&16&&(b.statsHistory=f[4]),Q.$set(b)},i(f){Z||(Se(N),Se(Q.$$.fragment,f),Z=!0)},o(f){Ie(N),Ie(Q.$$.fragment,f),Z=!1},d(f){f&&_(e),f&&_(n),f&&_(a),Ce(C,f),Ce(D,f),f&&_(I),f&&_(k),N&&N.d(),f&&_(ne),He(Q,f),fe=!1,Et(X)}}}function Fn(t,e,r){let n="random",a="random",i=10,l=!1,s=[];const o=()=>{r(3,l=!0),setTimeout(()=>{const T=it(n,a,i);s.push(T),r(4,s),r(3,l=!1)},0)},c=[{player1Strat:"random",player2Strat:"random"},{player1Strat:"random",player2Strat:"win_or_random"},{player1Strat:"win_or_random",player2Strat:"random"},{player1Strat:"random",player2Strat:"euristic"},{player1Strat:"euristic",player2Strat:"random"},{player1Strat:"random",player2Strat:"minmax"},{player1Strat:"minmax",player2Strat:"random"},{player1Strat:"random",player2Strat:"negamax"},{player1Strat:"negamax",player2Strat:"random"},{player1Strat:"random",player2Strat:"alphabeta"},{player1Strat:"alphabeta",player2Strat:"random"},{player1Strat:"random",player2Strat:"alphabeta_ordered"},{player1Strat:"alphabeta_ordered",player2Strat:"random"}],w=()=>{r(3,l=!0),r(4,s=[]),tn(c,(T,j)=>{setTimeout(()=>{const V=it(T.player1Strat,T.player2Strat,i);return s.push(V),r(4,s),j()},0)},()=>{r(3,l=!1)})};function h(){i=_t(this.value),r(2,i)}function S(){n=Ye(this),r(0,n)}function m(){a=Ye(this),r(1,a)}return[n,a,i,l,s,o,w,h,S,m]}class Hn extends Ge{constructor(e){super(),Te(this,e,Fn,Dn,We,{})}}function jn(t){let e,r;return e=new Hn({}),{c(){ze(e.$$.fragment)},l(n){De(e.$$.fragment,n)},m(n,a){Fe(e,n,a),r=!0},p:pe,i(n){r||(Se(e.$$.fragment,n),r=!0)},o(n){Ie(e.$$.fragment,n),r=!1},d(n){He(e,n)}}}class Un extends Ge{constructor(e){super(),Te(this,e,null,jn,We,{})}}export{Un as default};