import{S as Oe,i as Ae,s as Ce,k as d,a as v,q as y,l as $,m as b,c as k,r as P,h as u,n as ie,T as Ge,b as N,D as o,U as Ee,J as _e,f as B,g as Ue,t as j,d as je,Q as ye,V as He,u as Se,B as Ie,w as W,x as Z,y as x,z as ee,X as Le,a1 as xe,a2 as ht,e as De,I as bt}from"../../../chunks/index-5ee46145.js";import{T as vt,a as kt,b as Re,c as Ve}from"../../../chunks/TabPanel-06444975.js";import{c as Pe,d as pt,P as Q,B as Et,a as dt,G as $t,m as we,b as Tt,x as gt,g as yt,e as Pt,s as et,f as It}from"../../../chunks/GameInfo-eb6df6ea.js";import{t as wt}from"../../../chunks/async-8fd893d5.js";import{P as Ot}from"../../../chunks/P5-38694d20.js";function tt(a,e,l){const t=a.slice();return t[13]=e[l],t}function lt(a){let e,l,t,n;return{c(){e=d("p"),l=y("Restarting in "),t=y(a[1]),n=y(" seconds")},l(r){e=$(r,"P",{});var f=b(e);l=P(f,"Restarting in "),t=P(f,a[1]),n=P(f," seconds"),f.forEach(u)},m(r,f){N(r,e,f),o(e,l),o(e,t),o(e,n)},p(r,f){f&2&&Se(t,r[1])},d(r){r&&u(e)}}}function rt(a){let e,l=a[13]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[13],e.value=e.__value},m(r,f){N(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function nt(a){let e,l,t,n,r,f,i;return l=new Et({props:{board:a[0].board,dimensionPx:{width:400,height:400},onClick:a[3],highlightMouse:!0}}),n=new dt({props:{board:a[0].board}}),f=new $t({props:{game:a[0]}}),{c(){e=d("div"),W(l.$$.fragment),t=v(),W(n.$$.fragment),r=v(),W(f.$$.fragment),this.h()},l(_){e=$(_,"DIV",{class:!0});var s=b(e);Z(l.$$.fragment,s),t=k(s),Z(n.$$.fragment,s),s.forEach(u),r=k(_),Z(f.$$.fragment,_),this.h()},h(){ie(e,"class","grid2colsResponsive svelte-1epiyf5")},m(_,s){N(_,e,s),x(l,e,null),o(e,t),x(n,e,null),N(_,r,s),x(f,_,s),i=!0},p(_,s){const g={};s&1&&(g.board=_[0].board),l.$set(g);const E={};s&1&&(E.board=_[0].board),n.$set(E);const I={};s&1&&(I.game=_[0]),f.$set(I)},i(_){i||(B(l.$$.fragment,_),B(n.$$.fragment,_),B(f.$$.fragment,_),i=!0)},o(_){j(l.$$.fragment,_),j(n.$$.fragment,_),j(f.$$.fragment,_),i=!1},d(_){_&&u(e),ee(l),ee(n),_&&u(r),ee(f,_)}}}function At(a){let e,l,t,n,r,f,i,_,s,g,E,I,p,h,C,z,V,ae,U,he,te,ce,ue,oe,le,F,se,fe,K,T,M,re,ne,G=a[1]>0&&lt(a),me=Object.keys(Pe),H=[];for(let A=0;A<me.length;A+=1)H[A]=rt(tt(a,me,A));let w=a[0].board&&nt(a);return{c(){e=d("div"),G&&G.c(),l=v(),t=d("div"),n=d("div"),r=d("span"),f=y("Player automatic move"),i=v(),_=d("ul"),s=d("li"),g=d("button"),E=y("Random move"),I=v(),p=d("li"),h=d("button"),C=y("Hardcoded rules"),z=v(),V=d("li"),ae=d("button"),U=y("Complete hardcoded rules"),he=v(),te=d("li"),ce=d("button"),ue=y("minmax"),oe=v(),le=d("div"),F=d("label"),se=y("AI type"),fe=v(),K=d("select");for(let A=0;A<H.length;A+=1)H[A].c();T=v(),w&&w.c(),this.h()},l(A){e=$(A,"DIV",{});var X=b(e);G&&G.l(X),l=k(X),t=$(X,"DIV",{class:!0});var D=b(t);n=$(D,"DIV",{});var pe=b(n);r=$(pe,"SPAN",{});var $e=b(r);f=P($e,"Player automatic move"),$e.forEach(u),i=k(pe),_=$(pe,"UL",{});var R=b(_);s=$(R,"LI",{});var ge=b(s);g=$(ge,"BUTTON",{});var q=b(g);E=P(q,"Random move"),q.forEach(u),ge.forEach(u),I=k(R),p=$(R,"LI",{});var be=b(p);h=$(be,"BUTTON",{});var Y=b(h);C=P(Y,"Hardcoded rules"),Y.forEach(u),be.forEach(u),z=k(R),V=$(R,"LI",{});var Ne=b(V);ae=$(Ne,"BUTTON",{});var ve=b(ae);U=P(ve,"Complete hardcoded rules"),ve.forEach(u),Ne.forEach(u),he=k(R),te=$(R,"LI",{});var de=b(te);ce=$(de,"BUTTON",{});var L=b(ce);ue=P(L,"minmax"),L.forEach(u),de.forEach(u),R.forEach(u),pe.forEach(u),oe=k(D),le=$(D,"DIV",{});var Te=b(le);F=$(Te,"LABEL",{for:!0});var m=b(F);se=P(m,"AI type"),m.forEach(u),fe=k(Te),K=$(Te,"SELECT",{id:!0});var O=b(K);for(let c=0;c<H.length;c+=1)H[c].l(O);O.forEach(u),Te.forEach(u),D.forEach(u),T=k(X),w&&w.l(X),X.forEach(u),this.h()},h(){ie(F,"for","aiType"),ie(K,"id","aiType"),a[2]===void 0&&Ge(()=>a[8].call(K)),ie(t,"class","grid2colsResponsive svelte-1epiyf5")},m(A,X){N(A,e,X),G&&G.m(e,null),o(e,l),o(e,t),o(t,n),o(n,r),o(r,f),o(n,i),o(n,_),o(_,s),o(s,g),o(g,E),o(_,I),o(_,p),o(p,h),o(h,C),o(_,z),o(_,V),o(V,ae),o(ae,U),o(_,he),o(_,te),o(te,ce),o(ce,ue),o(t,oe),o(t,le),o(le,F),o(F,se),o(le,fe),o(le,K);for(let D=0;D<H.length;D+=1)H[D].m(K,null);Ee(K,a[2]),o(e,T),w&&w.m(e,null),M=!0,re||(ne=[_e(g,"click",a[4]),_e(h,"click",a[5]),_e(ae,"click",a[6]),_e(ce,"click",a[7]),_e(K,"change",a[8])],re=!0)},p(A,[X]){if(A[1]>0?G?G.p(A,X):(G=lt(A),G.c(),G.m(e,l)):G&&(G.d(1),G=null),X&0){me=Object.keys(Pe);let D;for(D=0;D<me.length;D+=1){const pe=tt(A,me,D);H[D]?H[D].p(pe,X):(H[D]=rt(pe),H[D].c(),H[D].m(K,null))}for(;D<H.length;D+=1)H[D].d(1);H.length=me.length}X&4&&Ee(K,A[2]),A[0].board?w?(w.p(A,X),X&1&&B(w,1)):(w=nt(A),w.c(),B(w,1),w.m(e,null)):w&&(Ue(),j(w,1,1,()=>{w=null}),je())},i(A){M||(B(w),M=!0)},o(A){j(w),M=!1},d(A){A&&u(e),G&&G.d(),ye(H,A),w&&w.d(),re=!1,He(ne)}}}function Ct(a,e,l){let t,n,r,f="minmax",i=!1;_();function _(){l(0,t=pt(i?Q.computer:Q.player)),i&&we(t,Q.computer,f),n=t.currentPlayer,i=!i}const s=(z,V)=>{if(n===Q.player){if(z==="manual"){if(!V)return;Tt(t,Q.player,gt(V))}else we(t,Q.player,z);l(0,t),n=t.currentPlayer,setTimeout(()=>{if(we(t,Q.computer,f),l(0,t),n=t.currentPlayer,t.state!=="not_over"){l(1,r=4);const ae=setInterval(()=>{l(1,r--,r),r===0&&(_(),clearInterval(ae))},1e3)}},500)}},g=(z,V)=>{s(z,V)},E=()=>g("random"),I=()=>g("hardcodedRules"),p=()=>g("hardcodedRulesComplete"),h=()=>g("minmax");function C(){f=Le(this),l(2,f)}return[t,r,f,g,E,I,p,h,C]}class Nt extends Oe{constructor(e){super(),Ae(this,e,Ct,At,Ce,{})}}function at(a,e,l){const t=a.slice();return t[12]=e[l],t}function Bt(a,e,l){const t=a.slice();return t[15]=e[l],t}function ot(a,e,l){const t=a.slice();return t[18]=e[l],t}function st(a,e,l){const t=a.slice();return t[21]=e[l],t}function ft(a,e,l){const t=a.slice();return t[21]=e[l],t}function it(a){let e,l=a[21]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[21],e.value=e.__value},m(r,f){N(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function ct(a){let e,l=a[21]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[21],e.value=e.__value},m(r,f){N(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function Gt(a){let e,l;return{c(){e=d("span"),l=y("-")},l(t){e=$(t,"SPAN",{});var n=b(e);l=P(n,"-"),n.forEach(u)},m(t,n){N(t,e,n),o(e,l)},p:Ie,d(t){t&&u(e)}}}function Lt(a){let e,l=100*a[5][a[18]]/a[5].total+"",t,n;return{c(){e=d("span"),t=y(l),n=y(" %")},l(r){e=$(r,"SPAN",{});var f=b(e);t=P(f,l),n=P(f," %"),f.forEach(u)},m(r,f){N(r,e,f),o(e,t),o(e,n)},p(r,f){f&32&&l!==(l=100*r[5][r[18]]/r[5].total+"")&&Se(t,l)},d(r){r&&u(e)}}}function ut(a){let e,l=a[18]+"",t,n,r,f=a[5][a[18]]+"",i,_,s;function g(p,h){return p[18]!=="total"?Lt:Gt}let E=g(a),I=E(a);return{c(){e=d("span"),t=y(l),n=v(),r=d("span"),i=y(f),_=v(),I.c(),s=De()},l(p){e=$(p,"SPAN",{});var h=b(e);t=P(h,l),h.forEach(u),n=k(p),r=$(p,"SPAN",{});var C=b(r);i=P(C,f),C.forEach(u),_=k(p),I.l(p),s=De()},m(p,h){N(p,e,h),o(e,t),N(p,n,h),N(p,r,h),o(r,i),N(p,_,h),I.m(p,h),N(p,s,h)},p(p,h){h&32&&l!==(l=p[18]+"")&&Se(t,l),h&32&&f!==(f=p[5][p[18]]+"")&&Se(i,f),E===(E=g(p))&&I?I.p(p,h):(I.d(1),I=E(p),I&&(I.c(),I.m(s.parentNode,s)))},d(p){p&&u(e),p&&u(n),p&&u(r),p&&u(_),I.d(p),p&&u(s)}}}function St(a){let e,l,t;return{c(){e=d("option"),l=y(a[15]),t=v(),this.h()},l(n){e=$(n,"OPTION",{});var r=b(e);l=P(r,a[15]),t=k(r),r.forEach(u),this.h()},h(){e.__value=a[15],e.value=e.__value},m(n,r){N(n,e,r),o(e,l),o(e,t)},p:Ie,d(n){n&&u(e)}}}function _t(a){let e,l;return e=new $t({props:{game:a[12]}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.game=t[12]),e.$set(r)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function mt(a){let e,l,t=(a[3]==="all"||a[3]===a[12].state)&&_t(a);return{c(){t&&t.c(),e=De()},l(n){t&&t.l(n),e=De()},m(n,r){t&&t.m(n,r),N(n,e,r),l=!0},p(n,r){n[3]==="all"||n[3]===n[12].state?t?(t.p(n,r),r&9&&B(t,1)):(t=_t(n),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(Ue(),j(t,1,1,()=>{t=null}),je())},i(n){l||(B(t),l=!0)},o(n){j(t),l=!1},d(n){t&&t.d(n),n&&u(e)}}}function Dt(a){let e,l,t,n,r,f,i,_,s,g,E,I,p,h,C,z,V,ae,U,he,te,ce,ue,oe,le,F,se,fe,K,T,M,re,ne,G,me,H,w,A,X,D,pe,$e=Object.keys(Pe),R=[];for(let m=0;m<$e.length;m+=1)R[m]=it(ft(a,$e,m));let ge=Object.keys(Pe),q=[];for(let m=0;m<ge.length;m+=1)q[m]=ct(st(a,ge,m));let be=Object.keys(a[5]).sort(),Y=[];for(let m=0;m<be.length;m+=1)Y[m]=ut(ot(a,be,m));let Ne=["none","all","player_win","computer_win","draw","over"],ve=[];for(let m=0;m<6;m+=1)ve[m]=St(Bt(a,Ne,m));let de=a[0],L=[];for(let m=0;m<de.length;m+=1)L[m]=mt(at(a,de,m));const Te=m=>j(L[m],1,1,()=>{L[m]=null});return{c(){e=d("div"),l=d("h2"),t=y("Generator"),n=v(),r=d("div"),f=d("label"),i=y("Games to generate"),_=v(),s=d("input"),g=v(),E=d("label"),I=y("Player AI type"),p=v(),h=d("select");for(let m=0;m<R.length;m+=1)R[m].c();C=v(),z=d("label"),V=y("Computer AI type"),ae=v(),U=d("select");for(let m=0;m<q.length;m+=1)q[m].c();he=v(),te=d("button"),ce=y("Create games"),ue=v(),oe=d("div"),le=d("h3"),F=y("Stats"),se=v(),fe=d("div");for(let m=0;m<Y.length;m+=1)Y[m].c();K=v(),T=d("div"),M=d("h3"),re=y("Games"),ne=v(),G=d("label"),me=y("Filter state"),H=v(),w=d("select");for(let m=0;m<6;m+=1)ve[m].c();A=v();for(let m=0;m<L.length;m+=1)L[m].c();this.h()},l(m){e=$(m,"DIV",{});var O=b(e);l=$(O,"H2",{});var c=b(l);t=P(c,"Generator"),c.forEach(u),n=k(O),r=$(O,"DIV",{class:!0});var S=b(r);f=$(S,"LABEL",{for:!0});var Me=b(f);i=P(Me,"Games to generate"),Me.forEach(u),_=k(S),s=$(S,"INPUT",{id:!0,type:!0}),g=k(S),E=$(S,"LABEL",{for:!0});var ze=b(E);I=P(ze,"Player AI type"),ze.forEach(u),p=k(S),h=$(S,"SELECT",{id:!0});var Xe=b(h);for(let J=0;J<R.length;J+=1)R[J].l(Xe);Xe.forEach(u),C=k(S),z=$(S,"LABEL",{for:!0});var Fe=b(z);V=P(Fe,"Computer AI type"),Fe.forEach(u),ae=k(S),U=$(S,"SELECT",{id:!0});var qe=b(U);for(let J=0;J<q.length;J+=1)q[J].l(qe);qe.forEach(u),he=k(S),te=$(S,"BUTTON",{});var Ye=b(te);ce=P(Ye,"Create games"),Ye.forEach(u),S.forEach(u),ue=k(O),oe=$(O,"DIV",{});var Be=b(oe);le=$(Be,"H3",{});var Je=b(le);F=P(Je,"Stats"),Je.forEach(u),se=k(Be),fe=$(Be,"DIV",{class:!0});var Qe=b(fe);for(let J=0;J<Y.length;J+=1)Y[J].l(Qe);Qe.forEach(u),Be.forEach(u),K=k(O),T=$(O,"DIV",{});var ke=b(T);M=$(ke,"H3",{});var Ke=b(M);re=P(Ke,"Games"),Ke.forEach(u),ne=k(ke),G=$(ke,"LABEL",{for:!0});var We=b(G);me=P(We,"Filter state"),We.forEach(u),H=k(ke),w=$(ke,"SELECT",{id:!0});var Ze=b(w);for(let J=0;J<6;J+=1)ve[J].l(Ze);Ze.forEach(u),A=k(ke);for(let J=0;J<L.length;J+=1)L[J].l(ke);ke.forEach(u),O.forEach(u),this.h()},h(){ie(f,"for","nbGames"),ie(s,"id","nbGames"),ie(s,"type","number"),ie(E,"for","playerAiType"),ie(h,"id","playerAiType"),a[1]===void 0&&Ge(()=>a[8].call(h)),ie(z,"for","computerAiType"),ie(U,"id","computerAiType"),a[2]===void 0&&Ge(()=>a[9].call(U)),ie(r,"class","grid2cols svelte-1g8tfkd"),ie(fe,"class","grid3cols svelte-1g8tfkd"),ie(G,"for","stateFilter"),ie(w,"id","stateFilter"),a[3]===void 0&&Ge(()=>a[10].call(w))},m(m,O){N(m,e,O),o(e,l),o(l,t),o(e,n),o(e,r),o(r,f),o(f,i),o(r,_),o(r,s),xe(s,a[4]),o(r,g),o(r,E),o(E,I),o(r,p),o(r,h);for(let c=0;c<R.length;c+=1)R[c].m(h,null);Ee(h,a[1]),o(r,C),o(r,z),o(z,V),o(r,ae),o(r,U);for(let c=0;c<q.length;c+=1)q[c].m(U,null);Ee(U,a[2]),o(r,he),o(r,te),o(te,ce),o(e,ue),o(e,oe),o(oe,le),o(le,F),o(oe,se),o(oe,fe);for(let c=0;c<Y.length;c+=1)Y[c].m(fe,null);o(e,K),o(e,T),o(T,M),o(M,re),o(T,ne),o(T,G),o(G,me),o(T,H),o(T,w);for(let c=0;c<6;c+=1)ve[c].m(w,null);Ee(w,a[3]),o(T,A);for(let c=0;c<L.length;c+=1)L[c].m(T,null);X=!0,D||(pe=[_e(s,"input",a[7]),_e(h,"change",a[8]),_e(U,"change",a[9]),_e(te,"click",a[6]),_e(w,"change",a[10])],D=!0)},p(m,[O]){if(O&16&&ht(s.value)!==m[4]&&xe(s,m[4]),O&0){$e=Object.keys(Pe);let c;for(c=0;c<$e.length;c+=1){const S=ft(m,$e,c);R[c]?R[c].p(S,O):(R[c]=it(S),R[c].c(),R[c].m(h,null))}for(;c<R.length;c+=1)R[c].d(1);R.length=$e.length}if(O&2&&Ee(h,m[1]),O&0){ge=Object.keys(Pe);let c;for(c=0;c<ge.length;c+=1){const S=st(m,ge,c);q[c]?q[c].p(S,O):(q[c]=ct(S),q[c].c(),q[c].m(U,null))}for(;c<q.length;c+=1)q[c].d(1);q.length=ge.length}if(O&4&&Ee(U,m[2]),O&32){be=Object.keys(m[5]).sort();let c;for(c=0;c<be.length;c+=1){const S=ot(m,be,c);Y[c]?Y[c].p(S,O):(Y[c]=ut(S),Y[c].c(),Y[c].m(fe,null))}for(;c<Y.length;c+=1)Y[c].d(1);Y.length=be.length}if(O&8&&Ee(w,m[3]),O&9){de=m[0];let c;for(c=0;c<de.length;c+=1){const S=at(m,de,c);L[c]?(L[c].p(S,O),B(L[c],1)):(L[c]=mt(S),L[c].c(),B(L[c],1),L[c].m(T,null))}for(Ue(),c=de.length;c<L.length;c+=1)Te(c);je()}},i(m){if(!X){for(let O=0;O<de.length;O+=1)B(L[O]);X=!0}},o(m){L=L.filter(Boolean);for(let O=0;O<L.length;O+=1)j(L[O]);X=!1},d(m){m&&u(e),ye(R,m),ye(q,m),ye(Y,m),ye(ve,m),ye(L,m),D=!1,He(pe)}}}function Rt(a,e,l){let t=[],n="random",r="hardcodedRulesComplete",f="none",i=10;const _=()=>{const C=pt();for(;C.state==="not_over";)we(C,Q.player,n),we(C,Q.computer,r);return C};let s={total:0};const g=()=>{l(0,t=[]),l(5,s={total:0}),wt(i,(C,z)=>{setTimeout(()=>{const V=_();return l(0,t=[V,...t]),s[V.state]||l(5,s[V.state]=0,s),l(5,s[V.state]+=1,s),l(5,s.total+=1,s),z()},0)})};function E(){i=ht(this.value),l(4,i)}function I(){n=Le(this),l(1,n)}function p(){r=Le(this),l(2,r)}function h(){f=Le(this),l(3,f)}return[t,n,r,f,i,s,g,E,I,p,h]}class Vt extends Oe{constructor(e){super(),Ae(this,e,Rt,Dt,Ce,{})}}function Ut(a){let e,l,t,n,r,f,i,_,s,g,E,I,p,h,C,z,V,ae,U,he,te,ce,ue,oe,le,F,se,fe,K;return r=new Ot({props:{sketch:a[5]}}),F=new dt({props:{board:a[1]}}),{c(){e=d("h2"),l=y("Analyzer"),t=v(),n=d("div"),W(r.$$.fragment),f=v(),i=d("div"),_=d("h4"),s=y("Controls"),g=v(),E=d("button"),I=y("Play O"),h=v(),C=d("button"),z=y("Play X"),ae=v(),U=d("button"),he=y("Previous"),ce=v(),ue=d("button"),oe=y("Reset"),le=v(),W(F.$$.fragment),this.h()},l(T){e=$(T,"H2",{});var M=b(e);l=P(M,"Analyzer"),M.forEach(u),t=k(T),n=$(T,"DIV",{});var re=b(n);Z(r.$$.fragment,re),f=k(re),i=$(re,"DIV",{});var ne=b(i);_=$(ne,"H4",{});var G=b(_);s=P(G,"Controls"),G.forEach(u),g=k(ne),E=$(ne,"BUTTON",{});var me=b(E);I=P(me,"Play O"),me.forEach(u),h=k(ne),C=$(ne,"BUTTON",{});var H=b(C);z=P(H,"Play X"),H.forEach(u),ae=k(ne),U=$(ne,"BUTTON",{});var w=b(U);he=P(w,"Previous"),w.forEach(u),ce=k(ne),ue=$(ne,"BUTTON",{});var A=b(ue);oe=P(A,"Reset"),A.forEach(u),ne.forEach(u),le=k(re),Z(F.$$.fragment,re),re.forEach(u),this.h()},h(){E.disabled=p=a[2]===Q.player,C.disabled=V=a[2]===Q.computer,U.disabled=te=(a[0]||[]).length<2},m(T,M){N(T,e,M),o(e,l),N(T,t,M),N(T,n,M),x(r,n,null),o(n,f),o(n,i),o(i,_),o(_,s),o(i,g),o(i,E),o(E,I),o(i,h),o(i,C),o(C,z),o(i,ae),o(i,U),o(U,he),o(i,ce),o(i,ue),o(ue,oe),o(n,le),x(F,n,null),se=!0,fe||(K=[_e(E,"click",a[6]),_e(C,"click",a[7]),_e(U,"click",a[4]),_e(ue,"click",a[3])],fe=!0)},p(T,[M]){(!se||M&4&&p!==(p=T[2]===Q.player))&&(E.disabled=p),(!se||M&4&&V!==(V=T[2]===Q.computer))&&(C.disabled=V),(!se||M&1&&te!==(te=(T[0]||[]).length<2))&&(U.disabled=te);const re={};M&2&&(re.board=T[1]),F.$set(re)},i(T){se||(B(r.$$.fragment,T),B(F.$$.fragment,T),se=!0)},o(T){j(r.$$.fragment,T),j(F.$$.fragment,T),se=!1},d(T){T&&u(e),T&&u(t),T&&u(n),ee(r),ee(F),fe=!1,He(K)}}}function jt(a,e,l){let t,n,r,f=Q.player;function i(h,C){It(r,h,gt(C)),l(1,r),n.push({...r}),l(0,n),_()}function _(){l(2,f=f===Q.player?Q.computer:Q.player)}function s(){l(1,r=yt()),l(0,n=[{...r}])}function g(){n.length<=1||(n.pop(),l(0,n),l(1,r={...n[n.length-1]}))}const E=h=>{h.setup=()=>{t=h,h.createCanvas(400,400),s()},h.draw=()=>{h.background(0),Pt(h,r,{drawSelection:!0,selection:et(h),currentPlayer:f})},h.mousePressed=()=>{if(h.mouseX<0||h.mouseX>h.width||h.mouseY<0||h.mouseY>h.height)return;const C=et(h);i(f,C)}};return bt(()=>{t==null||t.remove()}),[n,r,f,s,g,E,()=>l(2,f=Q.player),()=>l(2,f=Q.computer)]}class Ht extends Oe{constructor(e){super(),Ae(this,e,jt,Ut,Ce,{})}}function Mt(a){let e;return{c(){e=y("Tic Tac Toe")},l(l){e=P(l,"Tic Tac Toe")},m(l,t){N(l,e,t)},d(l){l&&u(e)}}}function zt(a){let e;return{c(){e=y("Generator")},l(l){e=P(l,"Generator")},m(l,t){N(l,e,t)},d(l){l&&u(e)}}}function Xt(a){let e;return{c(){e=y("Analyzer")},l(l){e=P(l,"Analyzer")},m(l,t){N(l,e,t)},d(l){l&&u(e)}}}function Ft(a){let e,l,t,n,r,f;return e=new Ve({props:{$$slots:{default:[Mt]},$$scope:{ctx:a}}}),t=new Ve({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),r=new Ve({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),l=v(),W(t.$$.fragment),n=v(),W(r.$$.fragment)},l(i){Z(e.$$.fragment,i),l=k(i),Z(t.$$.fragment,i),n=k(i),Z(r.$$.fragment,i)},m(i,_){x(e,i,_),N(i,l,_),x(t,i,_),N(i,n,_),x(r,i,_),f=!0},p(i,_){const s={};_&1&&(s.$$scope={dirty:_,ctx:i}),e.$set(s);const g={};_&1&&(g.$$scope={dirty:_,ctx:i}),t.$set(g);const E={};_&1&&(E.$$scope={dirty:_,ctx:i}),r.$set(E)},i(i){f||(B(e.$$.fragment,i),B(t.$$.fragment,i),B(r.$$.fragment,i),f=!0)},o(i){j(e.$$.fragment,i),j(t.$$.fragment,i),j(r.$$.fragment,i),f=!1},d(i){ee(e,i),i&&u(l),ee(t,i),i&&u(n),ee(r,i)}}}function qt(a){let e,l;return e=new Nt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Yt(a){let e,l;return e=new Vt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Jt(a){let e,l;return e=new Ht({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Qt(a){let e,l,t,n,r,f,i,_;return e=new kt({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),t=new Re({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),r=new Re({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),i=new Re({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),l=v(),W(t.$$.fragment),n=v(),W(r.$$.fragment),f=v(),W(i.$$.fragment)},l(s){Z(e.$$.fragment,s),l=k(s),Z(t.$$.fragment,s),n=k(s),Z(r.$$.fragment,s),f=k(s),Z(i.$$.fragment,s)},m(s,g){x(e,s,g),N(s,l,g),x(t,s,g),N(s,n,g),x(r,s,g),N(s,f,g),x(i,s,g),_=!0},p(s,g){const E={};g&1&&(E.$$scope={dirty:g,ctx:s}),e.$set(E);const I={};g&1&&(I.$$scope={dirty:g,ctx:s}),t.$set(I);const p={};g&1&&(p.$$scope={dirty:g,ctx:s}),r.$set(p);const h={};g&1&&(h.$$scope={dirty:g,ctx:s}),i.$set(h)},i(s){_||(B(e.$$.fragment,s),B(t.$$.fragment,s),B(r.$$.fragment,s),B(i.$$.fragment,s),_=!0)},o(s){j(e.$$.fragment,s),j(t.$$.fragment,s),j(r.$$.fragment,s),j(i.$$.fragment,s),_=!1},d(s){ee(e,s),s&&u(l),ee(t,s),s&&u(n),ee(r,s),s&&u(f),ee(i,s)}}}function Kt(a){let e,l;return e=new vt({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p(t,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}class Wt extends Oe{constructor(e){super(),Ae(this,e,null,Kt,Ce,{})}}function Zt(a){let e,l;return e=new Wt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p:Ie,i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}class nl extends Oe{constructor(e){super(),Ae(this,e,null,Zt,Ce,{})}}export{nl as default};
