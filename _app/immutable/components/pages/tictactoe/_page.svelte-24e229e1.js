import{S as Oe,i as Ae,s as Ne,k as d,a as v,q as y,l as $,m as b,c as k,r as P,h as u,n as ce,L as Ge,b as C,D as o,M as Ee,K as _e,f as B,g as Ue,t as M,d as Me,J as ye,N as je,u as Se,B as Ie,w as W,x as Z,y as x,z as ee,O as Le,P as xe,Q as ht,e as De,I as bt}from"../../../chunks/index-0ce3b86f.js";import{T as vt,a as kt,b as Re,c as Ve}from"../../../chunks/TabPanel-6a393c50.js";import{c as K,P as Et,b as Tt,q as yt}from"../../../chunks/P5-522f2e95.js";import{c as Pe,g as pt,B as Pt,a as dt,G as $t,m as we,b as It,x as gt,d as wt,s as et}from"../../../chunks/GameInfo-3fab3453.js";import{t as Ot}from"../../../chunks/async-8fd893d5.js";function tt(a,e,l){const t=a.slice();return t[13]=e[l],t}function lt(a){let e,l,t,n;return{c(){e=d("p"),l=y("Restarting in "),t=y(a[1]),n=y(" seconds")},l(r){e=$(r,"P",{});var f=b(e);l=P(f,"Restarting in "),t=P(f,a[1]),n=P(f," seconds"),f.forEach(u)},m(r,f){C(r,e,f),o(e,l),o(e,t),o(e,n)},p(r,f){f&2&&Se(t,r[1])},d(r){r&&u(e)}}}function rt(a){let e,l=a[13]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[13],e.value=e.__value},m(r,f){C(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function nt(a){let e,l,t,n,r,f,c;return l=new Pt({props:{board:a[0].board,dimensionPx:{width:400,height:400},onClick:a[3],highlightMouse:!0}}),n=new dt({props:{board:a[0].board}}),f=new $t({props:{game:a[0]}}),{c(){e=d("div"),W(l.$$.fragment),t=v(),W(n.$$.fragment),r=v(),W(f.$$.fragment),this.h()},l(_){e=$(_,"DIV",{class:!0});var s=b(e);Z(l.$$.fragment,s),t=k(s),Z(n.$$.fragment,s),s.forEach(u),r=k(_),Z(f.$$.fragment,_),this.h()},h(){ce(e,"class","grid2colsResponsive svelte-1epiyf5")},m(_,s){C(_,e,s),x(l,e,null),o(e,t),x(n,e,null),C(_,r,s),x(f,_,s),c=!0},p(_,s){const g={};s&1&&(g.board=_[0].board),l.$set(g);const E={};s&1&&(E.board=_[0].board),n.$set(E);const I={};s&1&&(I.game=_[0]),f.$set(I)},i(_){c||(B(l.$$.fragment,_),B(n.$$.fragment,_),B(f.$$.fragment,_),c=!0)},o(_){M(l.$$.fragment,_),M(n.$$.fragment,_),M(f.$$.fragment,_),c=!1},d(_){_&&u(e),ee(l),ee(n),_&&u(r),ee(f,_)}}}function At(a){let e,l,t,n,r,f,c,_,s,g,E,I,p,h,N,z,V,ae,U,he,te,ie,ue,oe,le,X,se,fe,Q,T,H,re,ne,G=a[1]>0&&lt(a),me=Object.keys(Pe),j=[];for(let A=0;A<me.length;A+=1)j[A]=rt(tt(a,me,A));let w=a[0].board&&nt(a);return{c(){e=d("div"),G&&G.c(),l=v(),t=d("div"),n=d("div"),r=d("span"),f=y("Player automatic move"),c=v(),_=d("ul"),s=d("li"),g=d("button"),E=y("Random move"),I=v(),p=d("li"),h=d("button"),N=y("Hardcoded rules"),z=v(),V=d("li"),ae=d("button"),U=y("Complete hardcoded rules"),he=v(),te=d("li"),ie=d("button"),ue=y("minmax"),oe=v(),le=d("div"),X=d("label"),se=y("AI type"),fe=v(),Q=d("select");for(let A=0;A<j.length;A+=1)j[A].c();T=v(),w&&w.c(),this.h()},l(A){e=$(A,"DIV",{});var F=b(e);G&&G.l(F),l=k(F),t=$(F,"DIV",{class:!0});var D=b(t);n=$(D,"DIV",{});var pe=b(n);r=$(pe,"SPAN",{});var $e=b(r);f=P($e,"Player automatic move"),$e.forEach(u),c=k(pe),_=$(pe,"UL",{});var R=b(_);s=$(R,"LI",{});var ge=b(s);g=$(ge,"BUTTON",{});var q=b(g);E=P(q,"Random move"),q.forEach(u),ge.forEach(u),I=k(R),p=$(R,"LI",{});var be=b(p);h=$(be,"BUTTON",{});var Y=b(h);N=P(Y,"Hardcoded rules"),Y.forEach(u),be.forEach(u),z=k(R),V=$(R,"LI",{});var Ce=b(V);ae=$(Ce,"BUTTON",{});var ve=b(ae);U=P(ve,"Complete hardcoded rules"),ve.forEach(u),Ce.forEach(u),he=k(R),te=$(R,"LI",{});var de=b(te);ie=$(de,"BUTTON",{});var L=b(ie);ue=P(L,"minmax"),L.forEach(u),de.forEach(u),R.forEach(u),pe.forEach(u),oe=k(D),le=$(D,"DIV",{});var Te=b(le);X=$(Te,"LABEL",{for:!0});var m=b(X);se=P(m,"AI type"),m.forEach(u),fe=k(Te),Q=$(Te,"SELECT",{id:!0});var O=b(Q);for(let i=0;i<j.length;i+=1)j[i].l(O);O.forEach(u),Te.forEach(u),D.forEach(u),T=k(F),w&&w.l(F),F.forEach(u),this.h()},h(){ce(X,"for","aiType"),ce(Q,"id","aiType"),a[2]===void 0&&Ge(()=>a[8].call(Q)),ce(t,"class","grid2colsResponsive svelte-1epiyf5")},m(A,F){C(A,e,F),G&&G.m(e,null),o(e,l),o(e,t),o(t,n),o(n,r),o(r,f),o(n,c),o(n,_),o(_,s),o(s,g),o(g,E),o(_,I),o(_,p),o(p,h),o(h,N),o(_,z),o(_,V),o(V,ae),o(ae,U),o(_,he),o(_,te),o(te,ie),o(ie,ue),o(t,oe),o(t,le),o(le,X),o(X,se),o(le,fe),o(le,Q);for(let D=0;D<j.length;D+=1)j[D].m(Q,null);Ee(Q,a[2]),o(e,T),w&&w.m(e,null),H=!0,re||(ne=[_e(g,"click",a[4]),_e(h,"click",a[5]),_e(ae,"click",a[6]),_e(ie,"click",a[7]),_e(Q,"change",a[8])],re=!0)},p(A,[F]){if(A[1]>0?G?G.p(A,F):(G=lt(A),G.c(),G.m(e,l)):G&&(G.d(1),G=null),F&0){me=Object.keys(Pe);let D;for(D=0;D<me.length;D+=1){const pe=tt(A,me,D);j[D]?j[D].p(pe,F):(j[D]=rt(pe),j[D].c(),j[D].m(Q,null))}for(;D<j.length;D+=1)j[D].d(1);j.length=me.length}F&4&&Ee(Q,A[2]),A[0].board?w?(w.p(A,F),F&1&&B(w,1)):(w=nt(A),w.c(),B(w,1),w.m(e,null)):w&&(Ue(),M(w,1,1,()=>{w=null}),Me())},i(A){H||(B(w),H=!0)},o(A){M(w),H=!1},d(A){A&&u(e),G&&G.d(),ye(j,A),w&&w.d(),re=!1,je(ne)}}}function Nt(a,e,l){let t,n,r,f="minmax",c=!1;_();function _(){l(0,t=pt(c?K.computer:K.player)),c&&we(t,K.computer,f),n=t.currentPlayer,c=!c}const s=(z,V)=>{if(n===K.player){if(z==="manual"){if(!V)return;It(t,K.player,gt(V))}else we(t,K.player,z);l(0,t),n=t.currentPlayer,setTimeout(()=>{if(we(t,K.computer,f),l(0,t),n=t.currentPlayer,t.state!=="not_over"){l(1,r=4);const ae=setInterval(()=>{l(1,r--,r),r===0&&(_(),clearInterval(ae))},1e3)}},500)}},g=(z,V)=>{s(z,V)},E=()=>g("random"),I=()=>g("hardcodedRules"),p=()=>g("hardcodedRulesComplete"),h=()=>g("minmax");function N(){f=Le(this),l(2,f)}return[t,r,f,g,E,I,p,h,N]}class Ct extends Oe{constructor(e){super(),Ae(this,e,Nt,At,Ne,{})}}function at(a,e,l){const t=a.slice();return t[12]=e[l],t}function Bt(a,e,l){const t=a.slice();return t[15]=e[l],t}function ot(a,e,l){const t=a.slice();return t[18]=e[l],t}function st(a,e,l){const t=a.slice();return t[21]=e[l],t}function ft(a,e,l){const t=a.slice();return t[21]=e[l],t}function ct(a){let e,l=a[21]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[21],e.value=e.__value},m(r,f){C(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function it(a){let e,l=a[21]+"",t,n;return{c(){e=d("option"),t=y(l),n=v(),this.h()},l(r){e=$(r,"OPTION",{});var f=b(e);t=P(f,l),n=k(f),f.forEach(u),this.h()},h(){e.__value=a[21],e.value=e.__value},m(r,f){C(r,e,f),o(e,t),o(e,n)},p:Ie,d(r){r&&u(e)}}}function Gt(a){let e,l;return{c(){e=d("span"),l=y("-")},l(t){e=$(t,"SPAN",{});var n=b(e);l=P(n,"-"),n.forEach(u)},m(t,n){C(t,e,n),o(e,l)},p:Ie,d(t){t&&u(e)}}}function Lt(a){let e,l=100*a[5][a[18]]/a[5].total+"",t,n;return{c(){e=d("span"),t=y(l),n=y(" %")},l(r){e=$(r,"SPAN",{});var f=b(e);t=P(f,l),n=P(f," %"),f.forEach(u)},m(r,f){C(r,e,f),o(e,t),o(e,n)},p(r,f){f&32&&l!==(l=100*r[5][r[18]]/r[5].total+"")&&Se(t,l)},d(r){r&&u(e)}}}function ut(a){let e,l=a[18]+"",t,n,r,f=a[5][a[18]]+"",c,_,s;function g(p,h){return p[18]!=="total"?Lt:Gt}let E=g(a),I=E(a);return{c(){e=d("span"),t=y(l),n=v(),r=d("span"),c=y(f),_=v(),I.c(),s=De()},l(p){e=$(p,"SPAN",{});var h=b(e);t=P(h,l),h.forEach(u),n=k(p),r=$(p,"SPAN",{});var N=b(r);c=P(N,f),N.forEach(u),_=k(p),I.l(p),s=De()},m(p,h){C(p,e,h),o(e,t),C(p,n,h),C(p,r,h),o(r,c),C(p,_,h),I.m(p,h),C(p,s,h)},p(p,h){h&32&&l!==(l=p[18]+"")&&Se(t,l),h&32&&f!==(f=p[5][p[18]]+"")&&Se(c,f),E===(E=g(p))&&I?I.p(p,h):(I.d(1),I=E(p),I&&(I.c(),I.m(s.parentNode,s)))},d(p){p&&u(e),p&&u(n),p&&u(r),p&&u(_),I.d(p),p&&u(s)}}}function St(a){let e,l,t;return{c(){e=d("option"),l=y(a[15]),t=v(),this.h()},l(n){e=$(n,"OPTION",{});var r=b(e);l=P(r,a[15]),t=k(r),r.forEach(u),this.h()},h(){e.__value=a[15],e.value=e.__value},m(n,r){C(n,e,r),o(e,l),o(e,t)},p:Ie,d(n){n&&u(e)}}}function _t(a){let e,l;return e=new $t({props:{game:a[12]}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.game=t[12]),e.$set(r)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function mt(a){let e,l,t=(a[3]==="all"||a[3]===a[12].state)&&_t(a);return{c(){t&&t.c(),e=De()},l(n){t&&t.l(n),e=De()},m(n,r){t&&t.m(n,r),C(n,e,r),l=!0},p(n,r){n[3]==="all"||n[3]===n[12].state?t?(t.p(n,r),r&9&&B(t,1)):(t=_t(n),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(Ue(),M(t,1,1,()=>{t=null}),Me())},i(n){l||(B(t),l=!0)},o(n){M(t),l=!1},d(n){t&&t.d(n),n&&u(e)}}}function Dt(a){let e,l,t,n,r,f,c,_,s,g,E,I,p,h,N,z,V,ae,U,he,te,ie,ue,oe,le,X,se,fe,Q,T,H,re,ne,G,me,j,w,A,F,D,pe,$e=Object.keys(Pe),R=[];for(let m=0;m<$e.length;m+=1)R[m]=ct(ft(a,$e,m));let ge=Object.keys(Pe),q=[];for(let m=0;m<ge.length;m+=1)q[m]=it(st(a,ge,m));let be=Object.keys(a[5]).sort(),Y=[];for(let m=0;m<be.length;m+=1)Y[m]=ut(ot(a,be,m));let Ce=["none","all","player_win","computer_win","draw","over"],ve=[];for(let m=0;m<6;m+=1)ve[m]=St(Bt(a,Ce,m));let de=a[0],L=[];for(let m=0;m<de.length;m+=1)L[m]=mt(at(a,de,m));const Te=m=>M(L[m],1,1,()=>{L[m]=null});return{c(){e=d("div"),l=d("h2"),t=y("Generator"),n=v(),r=d("div"),f=d("label"),c=y("Games to generate"),_=v(),s=d("input"),g=v(),E=d("label"),I=y("Player AI type"),p=v(),h=d("select");for(let m=0;m<R.length;m+=1)R[m].c();N=v(),z=d("label"),V=y("Computer AI type"),ae=v(),U=d("select");for(let m=0;m<q.length;m+=1)q[m].c();he=v(),te=d("button"),ie=y("Create games"),ue=v(),oe=d("div"),le=d("h3"),X=y("Stats"),se=v(),fe=d("div");for(let m=0;m<Y.length;m+=1)Y[m].c();Q=v(),T=d("div"),H=d("h3"),re=y("Games"),ne=v(),G=d("label"),me=y("Filter state"),j=v(),w=d("select");for(let m=0;m<6;m+=1)ve[m].c();A=v();for(let m=0;m<L.length;m+=1)L[m].c();this.h()},l(m){e=$(m,"DIV",{});var O=b(e);l=$(O,"H2",{});var i=b(l);t=P(i,"Generator"),i.forEach(u),n=k(O),r=$(O,"DIV",{class:!0});var S=b(r);f=$(S,"LABEL",{for:!0});var He=b(f);c=P(He,"Games to generate"),He.forEach(u),_=k(S),s=$(S,"INPUT",{id:!0,type:!0}),g=k(S),E=$(S,"LABEL",{for:!0});var ze=b(E);I=P(ze,"Player AI type"),ze.forEach(u),p=k(S),h=$(S,"SELECT",{id:!0});var Fe=b(h);for(let J=0;J<R.length;J+=1)R[J].l(Fe);Fe.forEach(u),N=k(S),z=$(S,"LABEL",{for:!0});var Xe=b(z);V=P(Xe,"Computer AI type"),Xe.forEach(u),ae=k(S),U=$(S,"SELECT",{id:!0});var qe=b(U);for(let J=0;J<q.length;J+=1)q[J].l(qe);qe.forEach(u),he=k(S),te=$(S,"BUTTON",{});var Ye=b(te);ie=P(Ye,"Create games"),Ye.forEach(u),S.forEach(u),ue=k(O),oe=$(O,"DIV",{});var Be=b(oe);le=$(Be,"H3",{});var Je=b(le);X=P(Je,"Stats"),Je.forEach(u),se=k(Be),fe=$(Be,"DIV",{class:!0});var Ke=b(fe);for(let J=0;J<Y.length;J+=1)Y[J].l(Ke);Ke.forEach(u),Be.forEach(u),Q=k(O),T=$(O,"DIV",{});var ke=b(T);H=$(ke,"H3",{});var Qe=b(H);re=P(Qe,"Games"),Qe.forEach(u),ne=k(ke),G=$(ke,"LABEL",{for:!0});var We=b(G);me=P(We,"Filter state"),We.forEach(u),j=k(ke),w=$(ke,"SELECT",{id:!0});var Ze=b(w);for(let J=0;J<6;J+=1)ve[J].l(Ze);Ze.forEach(u),A=k(ke);for(let J=0;J<L.length;J+=1)L[J].l(ke);ke.forEach(u),O.forEach(u),this.h()},h(){ce(f,"for","nbGames"),ce(s,"id","nbGames"),ce(s,"type","number"),ce(E,"for","playerAiType"),ce(h,"id","playerAiType"),a[1]===void 0&&Ge(()=>a[8].call(h)),ce(z,"for","computerAiType"),ce(U,"id","computerAiType"),a[2]===void 0&&Ge(()=>a[9].call(U)),ce(r,"class","grid2cols svelte-1g8tfkd"),ce(fe,"class","grid3cols svelte-1g8tfkd"),ce(G,"for","stateFilter"),ce(w,"id","stateFilter"),a[3]===void 0&&Ge(()=>a[10].call(w))},m(m,O){C(m,e,O),o(e,l),o(l,t),o(e,n),o(e,r),o(r,f),o(f,c),o(r,_),o(r,s),xe(s,a[4]),o(r,g),o(r,E),o(E,I),o(r,p),o(r,h);for(let i=0;i<R.length;i+=1)R[i].m(h,null);Ee(h,a[1]),o(r,N),o(r,z),o(z,V),o(r,ae),o(r,U);for(let i=0;i<q.length;i+=1)q[i].m(U,null);Ee(U,a[2]),o(r,he),o(r,te),o(te,ie),o(e,ue),o(e,oe),o(oe,le),o(le,X),o(oe,se),o(oe,fe);for(let i=0;i<Y.length;i+=1)Y[i].m(fe,null);o(e,Q),o(e,T),o(T,H),o(H,re),o(T,ne),o(T,G),o(G,me),o(T,j),o(T,w);for(let i=0;i<6;i+=1)ve[i].m(w,null);Ee(w,a[3]),o(T,A);for(let i=0;i<L.length;i+=1)L[i].m(T,null);F=!0,D||(pe=[_e(s,"input",a[7]),_e(h,"change",a[8]),_e(U,"change",a[9]),_e(te,"click",a[6]),_e(w,"change",a[10])],D=!0)},p(m,[O]){if(O&16&&ht(s.value)!==m[4]&&xe(s,m[4]),O&0){$e=Object.keys(Pe);let i;for(i=0;i<$e.length;i+=1){const S=ft(m,$e,i);R[i]?R[i].p(S,O):(R[i]=ct(S),R[i].c(),R[i].m(h,null))}for(;i<R.length;i+=1)R[i].d(1);R.length=$e.length}if(O&2&&Ee(h,m[1]),O&0){ge=Object.keys(Pe);let i;for(i=0;i<ge.length;i+=1){const S=st(m,ge,i);q[i]?q[i].p(S,O):(q[i]=it(S),q[i].c(),q[i].m(U,null))}for(;i<q.length;i+=1)q[i].d(1);q.length=ge.length}if(O&4&&Ee(U,m[2]),O&32){be=Object.keys(m[5]).sort();let i;for(i=0;i<be.length;i+=1){const S=ot(m,be,i);Y[i]?Y[i].p(S,O):(Y[i]=ut(S),Y[i].c(),Y[i].m(fe,null))}for(;i<Y.length;i+=1)Y[i].d(1);Y.length=be.length}if(O&8&&Ee(w,m[3]),O&9){de=m[0];let i;for(i=0;i<de.length;i+=1){const S=at(m,de,i);L[i]?(L[i].p(S,O),B(L[i],1)):(L[i]=mt(S),L[i].c(),B(L[i],1),L[i].m(T,null))}for(Ue(),i=de.length;i<L.length;i+=1)Te(i);Me()}},i(m){if(!F){for(let O=0;O<de.length;O+=1)B(L[O]);F=!0}},o(m){L=L.filter(Boolean);for(let O=0;O<L.length;O+=1)M(L[O]);F=!1},d(m){m&&u(e),ye(R,m),ye(q,m),ye(Y,m),ye(ve,m),ye(L,m),D=!1,je(pe)}}}function Rt(a,e,l){let t=[],n="random",r="hardcodedRulesComplete",f="none",c=10;const _=()=>{const N=pt();for(;N.state==="not_over";)we(N,K.player,n),we(N,K.computer,r);return N};let s={total:0};const g=()=>{l(0,t=[]),l(5,s={total:0}),Ot(c,(N,z)=>{setTimeout(()=>{const V=_();return l(0,t=[V,...t]),s[V.state]||l(5,s[V.state]=0,s),l(5,s[V.state]+=1,s),l(5,s.total+=1,s),z()},0)})};function E(){c=ht(this.value),l(4,c)}function I(){n=Le(this),l(1,n)}function p(){r=Le(this),l(2,r)}function h(){f=Le(this),l(3,f)}return[t,n,r,f,c,s,g,E,I,p,h]}class Vt extends Oe{constructor(e){super(),Ae(this,e,Rt,Dt,Ne,{})}}function Ut(a){let e,l,t,n,r,f,c,_,s,g,E,I,p,h,N,z,V,ae,U,he,te,ie,ue,oe,le,X,se,fe,Q;return r=new Et({props:{sketch:a[5]}}),X=new dt({props:{board:a[1]}}),{c(){e=d("h2"),l=y("Analyzer"),t=v(),n=d("div"),W(r.$$.fragment),f=v(),c=d("div"),_=d("h4"),s=y("Controls"),g=v(),E=d("button"),I=y("Play O"),h=v(),N=d("button"),z=y("Play X"),ae=v(),U=d("button"),he=y("Previous"),ie=v(),ue=d("button"),oe=y("Reset"),le=v(),W(X.$$.fragment),this.h()},l(T){e=$(T,"H2",{});var H=b(e);l=P(H,"Analyzer"),H.forEach(u),t=k(T),n=$(T,"DIV",{});var re=b(n);Z(r.$$.fragment,re),f=k(re),c=$(re,"DIV",{});var ne=b(c);_=$(ne,"H4",{});var G=b(_);s=P(G,"Controls"),G.forEach(u),g=k(ne),E=$(ne,"BUTTON",{});var me=b(E);I=P(me,"Play O"),me.forEach(u),h=k(ne),N=$(ne,"BUTTON",{});var j=b(N);z=P(j,"Play X"),j.forEach(u),ae=k(ne),U=$(ne,"BUTTON",{});var w=b(U);he=P(w,"Previous"),w.forEach(u),ie=k(ne),ue=$(ne,"BUTTON",{});var A=b(ue);oe=P(A,"Reset"),A.forEach(u),ne.forEach(u),le=k(re),Z(X.$$.fragment,re),re.forEach(u),this.h()},h(){E.disabled=p=a[2]===K.player,N.disabled=V=a[2]===K.computer,U.disabled=te=(a[0]||[]).length<2},m(T,H){C(T,e,H),o(e,l),C(T,t,H),C(T,n,H),x(r,n,null),o(n,f),o(n,c),o(c,_),o(_,s),o(c,g),o(c,E),o(E,I),o(c,h),o(c,N),o(N,z),o(c,ae),o(c,U),o(U,he),o(c,ie),o(c,ue),o(ue,oe),o(n,le),x(X,n,null),se=!0,fe||(Q=[_e(E,"click",a[6]),_e(N,"click",a[7]),_e(U,"click",a[4]),_e(ue,"click",a[3])],fe=!0)},p(T,[H]){(!se||H&4&&p!==(p=T[2]===K.player))&&(E.disabled=p),(!se||H&4&&V!==(V=T[2]===K.computer))&&(N.disabled=V),(!se||H&1&&te!==(te=(T[0]||[]).length<2))&&(U.disabled=te);const re={};H&2&&(re.board=T[1]),X.$set(re)},i(T){se||(B(r.$$.fragment,T),B(X.$$.fragment,T),se=!0)},o(T){M(r.$$.fragment,T),M(X.$$.fragment,T),se=!1},d(T){T&&u(e),T&&u(t),T&&u(n),ee(r),ee(X),fe=!1,je(Q)}}}function Mt(a,e,l){let t,n,r,f=K.player;function c(h,N){yt(r,h,gt(N)),l(1,r),n.push({...r}),l(0,n),_()}function _(){l(2,f=f===K.player?K.computer:K.player)}function s(){l(1,r=Tt()),l(0,n=[{...r}])}function g(){n.length<=1||(n.pop(),l(0,n),l(1,r={...n[n.length-1]}))}const E=h=>{h.setup=()=>{t=h,h.createCanvas(400,400),s()},h.draw=()=>{h.background(0),wt(h,r,{drawSelection:!0,selection:et(h),currentPlayer:f})},h.mousePressed=()=>{if(h.mouseX<0||h.mouseX>h.width||h.mouseY<0||h.mouseY>h.height)return;const N=et(h);c(f,N)}};return bt(()=>{t==null||t.remove()}),[n,r,f,s,g,E,()=>l(2,f=K.player),()=>l(2,f=K.computer)]}class jt extends Oe{constructor(e){super(),Ae(this,e,Mt,Ut,Ne,{})}}function Ht(a){let e;return{c(){e=y("Tic Tac Toe")},l(l){e=P(l,"Tic Tac Toe")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function zt(a){let e;return{c(){e=y("Generator")},l(l){e=P(l,"Generator")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function Ft(a){let e;return{c(){e=y("Analyzer")},l(l){e=P(l,"Analyzer")},m(l,t){C(l,e,t)},d(l){l&&u(e)}}}function Xt(a){let e,l,t,n,r,f;return e=new Ve({props:{$$slots:{default:[Ht]},$$scope:{ctx:a}}}),t=new Ve({props:{$$slots:{default:[zt]},$$scope:{ctx:a}}}),r=new Ve({props:{$$slots:{default:[Ft]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),l=v(),W(t.$$.fragment),n=v(),W(r.$$.fragment)},l(c){Z(e.$$.fragment,c),l=k(c),Z(t.$$.fragment,c),n=k(c),Z(r.$$.fragment,c)},m(c,_){x(e,c,_),C(c,l,_),x(t,c,_),C(c,n,_),x(r,c,_),f=!0},p(c,_){const s={};_&1&&(s.$$scope={dirty:_,ctx:c}),e.$set(s);const g={};_&1&&(g.$$scope={dirty:_,ctx:c}),t.$set(g);const E={};_&1&&(E.$$scope={dirty:_,ctx:c}),r.$set(E)},i(c){f||(B(e.$$.fragment,c),B(t.$$.fragment,c),B(r.$$.fragment,c),f=!0)},o(c){M(e.$$.fragment,c),M(t.$$.fragment,c),M(r.$$.fragment,c),f=!1},d(c){ee(e,c),c&&u(l),ee(t,c),c&&u(n),ee(r,c)}}}function qt(a){let e,l;return e=new Ct({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Yt(a){let e,l;return e=new Vt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Jt(a){let e,l;return e=new jt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Kt(a){let e,l,t,n,r,f,c,_;return e=new kt({props:{$$slots:{default:[Xt]},$$scope:{ctx:a}}}),t=new Re({props:{$$slots:{default:[qt]},$$scope:{ctx:a}}}),r=new Re({props:{$$slots:{default:[Yt]},$$scope:{ctx:a}}}),c=new Re({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment),l=v(),W(t.$$.fragment),n=v(),W(r.$$.fragment),f=v(),W(c.$$.fragment)},l(s){Z(e.$$.fragment,s),l=k(s),Z(t.$$.fragment,s),n=k(s),Z(r.$$.fragment,s),f=k(s),Z(c.$$.fragment,s)},m(s,g){x(e,s,g),C(s,l,g),x(t,s,g),C(s,n,g),x(r,s,g),C(s,f,g),x(c,s,g),_=!0},p(s,g){const E={};g&1&&(E.$$scope={dirty:g,ctx:s}),e.$set(E);const I={};g&1&&(I.$$scope={dirty:g,ctx:s}),t.$set(I);const p={};g&1&&(p.$$scope={dirty:g,ctx:s}),r.$set(p);const h={};g&1&&(h.$$scope={dirty:g,ctx:s}),c.$set(h)},i(s){_||(B(e.$$.fragment,s),B(t.$$.fragment,s),B(r.$$.fragment,s),B(c.$$.fragment,s),_=!0)},o(s){M(e.$$.fragment,s),M(t.$$.fragment,s),M(r.$$.fragment,s),M(c.$$.fragment,s),_=!1},d(s){ee(e,s),s&&u(l),ee(t,s),s&&u(n),ee(r,s),s&&u(f),ee(c,s)}}}function Qt(a){let e,l;return e=new vt({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p(t,[n]){const r={};n&1&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}class Wt extends Oe{constructor(e){super(),Ae(this,e,null,Qt,Ne,{})}}function Zt(a){let e,l;return e=new Wt({}),{c(){W(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p:Ie,i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}class nl extends Oe{constructor(e){super(),Ae(this,e,null,Zt,Ne,{})}}export{nl as default};
