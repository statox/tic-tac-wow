import{S as ie,i as fe,s as ue,C as je,k as b,l as k,m as y,h as f,n as Y,b as P,N as ge,E as Je,F as qe,G as Ke,f as L,t as X,H as He,a0 as Jt,o as Gt,j as qt,W as ot,I as bt,a1 as Lt,A as Kt,$ as Qt,g as lt,d as st,q as E,a as C,r as g,c as M,D as u,B as ke,u as F,w as x,x as ee,y as te,z as ne,e as Ge,J as Wt,K as Zt,M as kt,Q as xt,P as en}from"../../../chunks/index-1d785069.js";import{w as Re}from"../../../chunks/index-c5a64178.js";import{P as Xt}from"../../../chunks/P5-76a6b36f.js";let tn=1;function zt(){return`svelte-tabs-${tn++}`}function nn(t){let e,r,n,o;const l=t[4].default,a=je(l,t,t[3],null);return{c(){e=b("div"),a&&a.c(),this.h()},l(s){e=k(s,"DIV",{class:!0});var i=y(e);a&&a.l(i),i.forEach(f),this.h()},h(){Y(e,"class","svelte-tabs")},m(s,i){P(s,e,i),a&&a.m(e,null),r=!0,n||(o=ge(e,"keydown",t[1]),n=!0)},p(s,[i]){a&&a.p&&(!r||i&8)&&Je(a,l,s,s[3],r?Ke(l,s[3],i,null):qe(s[3]),null)},i(s){r||(L(a,s),r=!0)},o(s){X(a,s),r=!1},d(s){s&&f(e),a&&a.d(s),n=!1,o()}}}const at={};function rn(t,e,r){const n=t.indexOf(e);t.splice(n,1),r.update(o=>o===e?t[n]||t[t.length-1]:o)}function on(t,e,r){let n,{$$slots:o={},$$scope:l}=e,{initialSelectedIndex:a=0}=e;const s=[],i=[],c=[],m=Re({}),_=Re({}),S=Re(null);He(t,S,d=>r(5,n=d));const w=Re(null);function h(d,I,H){d.push(I),H.update(W=>W||I),ot(()=>rn(d,I,H))}function p(d){const I=i.indexOf(d);S.set(d),w.set(c[I])}Jt(at,{registerTab(d){h(i,d,S)},registerTabElement(d){s.push(d)},registerPanel(d){h(c,d,w)},selectTab:p,selectedTab:S,selectedPanel:w,controls:m,labeledBy:_}),Gt(()=>{p(i[a])}),qt(()=>{for(let d=0;d<i.length;d++)m.update(I=>({...I,[i[d].id]:c[d].id})),_.update(I=>({...I,[c[d].id]:i[d].id}))});async function N(d){if(d.target.classList.contains("svelte-tabs__tab")){let I=i.indexOf(n);switch(d.key){case"ArrowRight":I+=1,I>i.length-1&&(I=0),p(i[I]),s[I].focus();break;case"ArrowLeft":I-=1,I<0&&(I=i.length-1),p(i[I]),s[I].focus()}}}return t.$$set=d=>{"initialSelectedIndex"in d&&r(2,a=d.initialSelectedIndex),"$$scope"in d&&r(3,l=d.$$scope)},[S,N,a,l,o]}class ln extends ie{constructor(e){super(),fe(this,e,on,nn,ue,{initialSelectedIndex:2})}}function sn(t){let e,r,n,o,l,a;const s=t[9].default,i=je(s,t,t[8],null);return{c(){e=b("li"),i&&i.c(),this.h()},l(c){e=k(c,"LI",{role:!0,id:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0,class:!0});var m=y(e);i&&i.l(m),m.forEach(f),this.h()},h(){Y(e,"role","tab"),Y(e,"id",t[3].id),Y(e,"aria-controls",r=t[2][t[3].id]),Y(e,"aria-selected",t[1]),Y(e,"tabindex",n=t[1]?0:-1),Y(e,"class","svelte-tabs__tab svelte-1fbofsd"),bt(e,"svelte-tabs__selected",t[1])},m(c,m){P(c,e,m),i&&i.m(e,null),t[10](e),o=!0,l||(a=ge(e,"click",t[11]),l=!0)},p(c,[m]){i&&i.p&&(!o||m&256)&&Je(i,s,c,c[8],o?Ke(s,c[8],m,null):qe(c[8]),null),(!o||m&4&&r!==(r=c[2][c[3].id]))&&Y(e,"aria-controls",r),(!o||m&2)&&Y(e,"aria-selected",c[1]),(!o||m&2&&n!==(n=c[1]?0:-1))&&Y(e,"tabindex",n),(!o||m&2)&&bt(e,"svelte-tabs__selected",c[1])},i(c){o||(L(i,c),o=!0)},o(c){X(i,c),o=!1},d(c){c&&f(e),i&&i.d(c),t[10](null),l=!1,a()}}}function an(t,e,r){let n,o,{$$slots:l={},$$scope:a}=e,s;const i={id:zt()},{registerTab:c,registerTabElement:m,selectTab:_,selectedTab:S,controls:w}=Lt(at);He(t,S,d=>r(7,n=d)),He(t,w,d=>r(2,o=d));let h;c(i),Gt(async()=>{await Kt(),m(s)});function p(d){Qt[d?"unshift":"push"](()=>{s=d,r(0,s)})}const N=()=>_(i);return t.$$set=d=>{"$$scope"in d&&r(8,a=d.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&r(1,h=n===i)},[s,h,o,i,_,S,w,n,a,l,p,N]}class yt extends ie{constructor(e){super(),fe(this,e,an,sn,ue,{})}}function fn(t){let e,r;const n=t[1].default,o=je(n,t,t[0],null);return{c(){e=b("ul"),o&&o.c(),this.h()},l(l){e=k(l,"UL",{role:!0,class:!0});var a=y(e);o&&o.l(a),a.forEach(f),this.h()},h(){Y(e,"role","tablist"),Y(e,"class","svelte-tabs__tab-list svelte-12yby2a")},m(l,a){P(l,e,a),o&&o.m(e,null),r=!0},p(l,[a]){o&&o.p&&(!r||a&1)&&Je(o,n,l,l[0],r?Ke(n,l[0],a,null):qe(l[0]),null)},i(l){r||(L(o,l),r=!0)},o(l){X(o,l),r=!1},d(l){l&&f(e),o&&o.d(l)}}}function un(t,e,r){let{$$slots:n={},$$scope:o}=e;return t.$$set=l=>{"$$scope"in l&&r(0,o=l.$$scope)},[o,n]}class cn extends ie{constructor(e){super(),fe(this,e,un,fn,ue,{})}}function Pt(t){let e;const r=t[6].default,n=je(r,t,t[5],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,l){n&&n.m(o,l),e=!0},p(o,l){n&&n.p&&(!e||l&32)&&Je(n,r,o,o[5],e?Ke(r,o[5],l,null):qe(o[5]),null)},i(o){e||(L(n,o),e=!0)},o(o){X(n,o),e=!1},d(o){n&&n.d(o)}}}function pn(t){let e,r,n,o=t[1]===t[2]&&Pt(t);return{c(){e=b("div"),o&&o.c(),this.h()},l(l){e=k(l,"DIV",{id:!0,"aria-labelledby":!0,class:!0,role:!0});var a=y(e);o&&o.l(a),a.forEach(f),this.h()},h(){Y(e,"id",t[2].id),Y(e,"aria-labelledby",r=t[0][t[2].id]),Y(e,"class","svelte-tabs__tab-panel svelte-epfyet"),Y(e,"role","tabpanel")},m(l,a){P(l,e,a),o&&o.m(e,null),n=!0},p(l,[a]){l[1]===l[2]?o?(o.p(l,a),a&2&&L(o,1)):(o=Pt(l),o.c(),L(o,1),o.m(e,null)):o&&(lt(),X(o,1,1,()=>{o=null}),st()),(!n||a&1&&r!==(r=l[0][l[2].id]))&&Y(e,"aria-labelledby",r)},i(l){n||(L(o),n=!0)},o(l){X(o),n=!1},d(l){l&&f(e),o&&o.d()}}}function _n(t,e,r){let n,o,{$$slots:l={},$$scope:a}=e;const s={id:zt()},{registerPanel:i,selectedPanel:c,labeledBy:m}=Lt(at);return He(t,c,_=>r(1,o=_)),He(t,m,_=>r(0,n=_)),i(s),t.$$set=_=>{"$$scope"in _&&r(5,a=_.$$scope)},[n,o,s,c,m,a,l]}class Et extends ie{constructor(e){super(),fe(this,e,_n,pn,ue,{})}}function Pe(t){const{x:e,y:r}=t;if(e<0||e>2||r<0||r>2)throw new Error(`Invalid coords (${e},${r})`);return 8-(3*r+e)}function it(t){if(t<0||t>8)throw new Error("Invalid index ${i}");return{x:2-t%3,y:2-Math.floor(t/3)}}const dn=[448,56,7,292,146,73,273,84],mn=[{p:16,o:40},{p:16,o:130},{p:16,o:257},{p:16,o:68}],vn=[{p:1,o:6},{p:1,o:72},{p:1,o:272}],hn=[{p:2,o:5},{p:2,o:144}],Se=(t,e)=>(t&e)===e;function gt(t){let e=t,r=0;for(;e;)r+=e&1,e>>=1;return r}function wt(t,e){const r=Pe(e);return D(t,r)}function D(t,e){return!(t&1<<e)}function et(t,e){return t+2**e}const tt=t=>{for(const e of dn)if(Se(t,e))return!0;return!1};var R=(t=>(t[t.player=1]="player",t[t.computer=2]="computer",t))(R||{});function Ft(){return{player:0,computer:0,toString:function(){return`player ${this.player.toString(2).padStart(9,"0")} computer ${this.computer.toString(2).padStart(9,"0")}`}}}function Ie(t,e){return e===R.player?t.player:t.computer}function Ne(t,e){return e===R.player?t.computer:t.player}function Le(t,e){if(!e&&!$n(t))return"invalid_board";const r=tt(t.player),n=tt(t.computer);return r&&n?"draw":r?"player_win":n?"computer_win":kn(t)?"not_over":"over"}function De(t,e,r){if(!bn(t,r))throw new Error(`Impossible move. player: ${t==null?void 0:t.player}, computer: ${t==null?void 0:t.computer}, index ${r} `);e===R.player?t.player=et(t.player,r):t.computer=et(t.computer,r)}function $n(t){if(t.player&t.computer)return!1;const e=gt(t.player),r=gt(t.computer);return!(Math.abs(e-r)>1)}function bn(t,e){return D(t.player,e)&&D(t.computer,e)}function kn(t){return(t.player|t.computer)!==511}function ft(t){let e=t.player|t.computer;if(e===0)return[0,1,2,3,4,5,6,7,8];if(e===511)return[];const r=[];let n=0;for(;n<9;)e&1||r.push(n),n++,e>>=1;return r}const yn=[2,5,8,1,4,7,0,3,6];function St(t){let e=0;return yn.forEach((r,n)=>{D(t,n)||(e=et(e,r))}),e}function We(t,e){if(e<0)throw new Error("Cant rotate a negative amount of times");if(e===0)return{...t};e=e%4;const r={...t};for(let n=0;n<e;n++)r.player=St(r.player),r.computer=St(r.computer);return r}function Ce(t,e){const r=Ie(t,e);return tt(r)}function Xe(t){return(t==null?void 0:t.y)===1&&(t==null?void 0:t.x)===1}function Pn(t,e,r){const n=Pe(r),o=Ie(t,e),l=Ne(t,e);if(n===4){const a=D(l,5)&&!D(o,3)||!D(o,5)&&D(l,3)?1:0,s=D(l,7)&&!D(o,1)||!D(o,7)&&D(l,1)?1:0,i=D(l,8)&&!D(o,0)||!D(o,8)&&D(l,0)?1:0,c=D(l,6)&&!D(o,2)||!D(o,6)&&D(l,2)?1:0;return a+s+i+c>=2}if(Qe.has(n)){const a={0:0,2:3,6:1,8:2}[n]||0,s=We(t,a),i=Ie(s,e),c=Ne(s,e),m=D(c,2)&&!D(i,1)||!D(i,2)&&D(c,1),_=D(c,6)&&!D(i,3)||!D(i,6)&&D(c,3);return m&&_}if(ut.has(n)){const a={1:0,3:1,5:3,7:2}[n]||0,s=We(t,a),i=Ie(s,e),c=Ne(s,e),m=D(c,2)&&!D(i,0)||!D(i,2)&&D(c,0),_=D(c,7)&&!D(i,4)||!D(i,7)&&D(c,4);return m&&_}return!1}function ze(t,e,r){const n=Pe(r),o=Ie(t,e),l=Ne(t,e);for(const{o:a,p:s}of mn)if(Se(o,s)&&Se(l,a))return!0;if(Qe.has(n)){const a={0:0,2:3,6:1,8:2}[n]||0,s=We(t,a),i=Ie(s,e),c=Ne(s,e);for(const{o:m,p:_}of vn)if(Se(i,_)&&Se(c,m))return!0}if(ut.has(n)){const a={1:0,3:1,5:3,7:2}[n]||0,s=We(t,a),i=Ie(s,e),c=Ne(s,e);for(const{o:m,p:_}of hn)if(Se(i,_)&&Se(c,m))return!0}return!1}const Qe=new Set([0,2,6,8]),ut=new Set([1,3,5,7]);function Fe(t,e,r){const n=Pe(r);if(!Qe.has(n))return!1;const o=8-n,l=Ne(t,e);return!D(l,o)}function Ue(t){const e=Pe(t);return Qe.has(e)}function Ye(t){const e=Pe(t);return ut.has(e)}function En(t,e){const r=ft(t);if(r.length===0)throw new Error("No available moves");let n;for(const o of r){const l={...t},a=it(o);De(l,e,o);const s=gn(l,e,a);s.score>((n==null?void 0:n.score)??-1)&&(n=s)}if(!n)throw new Error("Error in getMoveHardcoded");return n}function gn(t,e,r){return Ce(t,e)?{score:8,reason:"win",move:r}:ze(t,e,r)?{score:7,reason:"block_opponent",move:r}:Pn(t,e,r)?{score:6,reason:"create_fork",move:r}:Xe(r)?{score:4,reason:"take_center",move:r}:Fe(t,e,r)?{score:3,reason:"take_opposite_corner",move:r}:Ue(r)?{score:2,reason:"take_corner",move:r}:Ye(r)?{score:1,reason:"take_edge",move:r}:{score:0,reason:"default_choice",move:r}}function wn(t,e){const r=ft(t);if(r.length===0)throw new Error("No available moves");let n;for(const o of r){const l={...t},a=it(o);De(l,e,o);const s=Sn(l,e,a);s.score>((n==null?void 0:n.score)??-1)&&(n=s)}if(!n)throw new Error("Error in getMoveHardcoded");return n}function Sn(t,e,r){return Ce(t,R.player)?{score:8,reason:"win",move:r}:ze(t,e,r)?{score:7,reason:"block_opponent",move:r}:Xe(r)?{score:4,reason:"take_center",move:r}:Fe(t,e,r)?{score:3,reason:"take_opposite_corner",move:r}:Ue(r)?{score:2,reason:"take_corner",move:r}:Ye(r)?{score:1,reason:"take_edge",move:r}:{score:0,reason:"default_choice",move:r}}function In(t){const e=ft(t);if(e.length===0)throw new Error("No available moves");const r=Math.floor(Math.random()*e.length),n=e[r];return{score:0,reason:"random",move:it(n)}}const nt={random:In,hardcodedRules:wn,hardcodedRulesComplete:En},Nn=t=>({board:Ft(),currentPlayer:t??R.player,state:"not_over",moveHistory:[]});function Ut(t){t.currentPlayer=t.currentPlayer===R.player?R.computer:R.player}const An=(t,e,r)=>{t.state==="not_over"&&(De(t.board,e,Pe(r)),t.state=Le(t.board),t.moveHistory.push({board:{...t.board},moveCoord:r,player:e,method:"manual"}),Ut(t))},It=(t,e,r)=>{if(t.state!=="not_over")return;const n=nt[r],o=n(t.board,e);De(t.board,e,Pe(o.move)),t.state=Le(t.board),t.moveHistory.push({board:{...t.board},moveCoord:o.move,player:e,method:r,aiChoice:o}),Ut(t)},Ve=(t,e)=>{if(t.moveHistory.length>0){const r=t.moveHistory[t.moveHistory.length-1];if(r.player===e)return r}if(t.moveHistory.length>1){const r=t.moveHistory[t.moveHistory.length-2];if(r.player===e)return r}return null};function Yt(t,e,r){const n=t.width/3,o=t.height/3,{height:l,width:a}=t,{drawSelection:s,selection:i,currentPlayer:c}=r||{};t.noFill(),t.stroke(255),t.line(n,0,n,l),t.line(n*2,0,n*2,l),t.line(0,o,a,o),t.line(0,o*2,a,o*2);for(let m=0;m<3;m++)for(let _=0;_<3;_++)(!wt(e.player,{x:_,y:m})||s&&c===R.player&&(i==null?void 0:i.x)===_&&(i==null?void 0:i.y)===m)&&(t.stroke("blue"),t.circle(_*n+n/2,m*o+o/2,o/2)),(!wt(e.computer,{x:_,y:m})||s&&c===R.computer&&(i==null?void 0:i.x)===_&&(i==null?void 0:i.y)===m)&&(t.stroke("red"),t.line(_*n+n*.3,m*o+o*.3,_*n+n*.7,m*o+o*.7),t.line(_*n+n*.7,m*o+o*.3,_*n+n*.3,m*o+o*.7))}function rt(t){const{mouseX:e,mouseY:r,width:n,height:o}=t,l=Math.floor(t.map(e,0,n,0,3)),a=Math.floor(t.map(r,0,o,0,3));return{x:l,y:a}}function Nt(t){let e,r,n,o,l,a=Le(t[0])+"",s,i,c,m,_,S,w,h,p,N,d=t[0].player.toString(2).padStart(9,"0")+"",I,H,W,J=t[0].player+"",V,A,$,T,G,z=Ce(t[0],R.player)?"✅":"❌",Z,le,B,U,q,j,ce,pe,re,me,se=t[0].computer.toString(2).padStart(9,"0")+"",_e,ye,ve,he=t[0].computer+"",de,Q,v,O,$e,Ee=Ce(t[0],R.computer)?"✅":"❌",we;return{c(){e=b("div"),r=b("span"),n=E("State:"),o=C(),l=b("span"),s=E(a),i=C(),c=b("div"),m=b("span"),_=E("Player 1"),S=b("span"),w=E("Player, O"),h=C(),p=b("span"),N=E("0b"),I=E(d),H=C(),W=b("span"),V=E(J),A=C(),$=b("span"),T=E("Wins"),G=b("span"),Z=E(z),le=C(),B=b("div"),U=b("span"),q=E("Player 2"),j=b("span"),ce=E("Computer, X"),pe=C(),re=b("span"),me=E("0b"),_e=E(se),ye=C(),ve=b("span"),de=E(he),Q=C(),v=b("span"),O=E("Wins"),$e=b("span"),we=E(Ee),this.h()},l(oe){e=k(oe,"DIV",{class:!0});var K=y(e);r=k(K,"SPAN",{});var Me=y(r);n=g(Me,"State:"),Me.forEach(f),o=M(K),l=k(K,"SPAN",{});var Te=y(l);s=g(Te,a),Te.forEach(f),i=M(K),c=k(K,"DIV",{class:!0});var ae=y(c);m=k(ae,"SPAN",{});var Be=y(m);_=g(Be,"Player 1"),Be.forEach(f),S=k(ae,"SPAN",{});var Oe=y(S);w=g(Oe,"Player, O"),Oe.forEach(f),h=M(ae),p=k(ae,"SPAN",{});var Ae=y(p);N=g(Ae,"0b"),I=g(Ae,d),Ae.forEach(f),H=M(ae),W=k(ae,"SPAN",{});var ct=y(W);V=g(ct,J),ct.forEach(f),A=M(ae),$=k(ae,"SPAN",{});var pt=y($);T=g(pt,"Wins"),pt.forEach(f),G=k(ae,"SPAN",{});var _t=y(G);Z=g(_t,z),_t.forEach(f),ae.forEach(f),le=M(K),B=k(K,"DIV",{class:!0});var be=y(B);U=k(be,"SPAN",{});var dt=y(U);q=g(dt,"Player 2"),dt.forEach(f),j=k(be,"SPAN",{});var mt=y(j);ce=g(mt,"Computer, X"),mt.forEach(f),pe=M(be),re=k(be,"SPAN",{});var Ze=y(re);me=g(Ze,"0b"),_e=g(Ze,se),Ze.forEach(f),ye=M(be),ve=k(be,"SPAN",{});var vt=y(ve);de=g(vt,he),vt.forEach(f),Q=M(be),v=k(be,"SPAN",{});var ht=y(v);O=g(ht,"Wins"),ht.forEach(f),$e=k(be,"SPAN",{});var $t=y($e);we=g($t,Ee),$t.forEach(f),be.forEach(f),K.forEach(f),this.h()},h(){Y(c,"class","grid2cols svelte-1lw5ne4"),Y(B,"class","grid2cols svelte-1lw5ne4"),Y(e,"class","grid2cols svelte-1lw5ne4")},m(oe,K){P(oe,e,K),u(e,r),u(r,n),u(e,o),u(e,l),u(l,s),u(e,i),u(e,c),u(c,m),u(m,_),u(c,S),u(S,w),u(c,h),u(c,p),u(p,N),u(p,I),u(c,H),u(c,W),u(W,V),u(c,A),u(c,$),u($,T),u(c,G),u(G,Z),u(e,le),u(e,B),u(B,U),u(U,q),u(B,j),u(j,ce),u(B,pe),u(B,re),u(re,me),u(re,_e),u(B,ye),u(B,ve),u(ve,de),u(B,Q),u(B,v),u(v,O),u(B,$e),u($e,we)},p(oe,K){K&1&&a!==(a=Le(oe[0])+"")&&F(s,a),K&1&&d!==(d=oe[0].player.toString(2).padStart(9,"0")+"")&&F(I,d),K&1&&J!==(J=oe[0].player+"")&&F(V,J),K&1&&z!==(z=Ce(oe[0],R.player)?"✅":"❌")&&F(Z,z),K&1&&se!==(se=oe[0].computer.toString(2).padStart(9,"0")+"")&&F(_e,se),K&1&&he!==(he=oe[0].computer+"")&&F(de,he),K&1&&Ee!==(Ee=Ce(oe[0],R.computer)?"✅":"❌")&&F(we,Ee)},d(oe){oe&&f(e)}}}function Cn(t){let e,r,n,o,l=t[0]&&Nt(t);return{c(){e=b("div"),r=b("h4"),n=E("Board info"),o=C(),l&&l.c()},l(a){e=k(a,"DIV",{});var s=y(e);r=k(s,"H4",{});var i=y(r);n=g(i,"Board info"),i.forEach(f),o=M(s),l&&l.l(s),s.forEach(f)},m(a,s){P(a,e,s),u(e,r),u(r,n),u(e,o),l&&l.m(e,null)},p(a,[s]){a[0]?l?l.p(a,s):(l=Nt(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:ke,o:ke,d(a){a&&f(e),l&&l.d()}}}function Mn(t,e,r){let{board:n}=e;return t.$$set=o=>{"board"in o&&r(0,n=o.board)},[n]}class jt extends ie{constructor(e){super(),fe(this,e,Mn,Cn,ue,{board:0})}}function Tn(t){let e,r,n=JSON.stringify(t[0])+"",o;return{c(){e=b("p"),r=E("Board is undefined "),o=E(n)},l(l){e=k(l,"P",{});var a=y(e);r=g(a,"Board is undefined "),o=g(a,n),a.forEach(f)},m(l,a){P(l,e,a),u(e,r),u(e,o)},p(l,a){a&1&&n!==(n=JSON.stringify(l[0])+"")&&F(o,n)},i:ke,o:ke,d(l){l&&f(e)}}}function Bn(t){let e,r;return e=new Xt({props:{sketch:t[1]}}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),r=!0},p:ke,i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){ne(e,n)}}}function On(t){let e,r,n,o;const l=[Bn,Tn],a=[];function s(i,c){return i[0]?0:1}return r=s(t),n=a[r]=l[r](t),{c(){e=b("div"),n.c()},l(i){e=k(i,"DIV",{});var c=y(e);n.l(c),c.forEach(f)},m(i,c){P(i,e,c),a[r].m(e,null),o=!0},p(i,[c]){let m=r;r=s(i),r===m?a[r].p(i,c):(lt(),X(a[m],1,1,()=>{a[m]=null}),st(),n=a[r],n?n.p(i,c):(n=a[r]=l[r](i),n.c()),L(n,1),n.m(e,null))},i(i){o||(L(n),o=!0)},o(i){X(n),o=!1},d(i){i&&f(e),a[r].d()}}}function Hn(t,e,r){let{board:n}=e,{onClick:o}=e,l;const a=s=>{s.setup=()=>{l=s,s.createCanvas(400,400)},s.draw=()=>{s.background(0),Yt(s,n)},s.mousePressed=()=>{s.mouseX<0||s.mouseX>s.width||s.mouseY<0||s.mouseY>s.height||o(rt(s))}};return ot(()=>{l==null||l.remove()}),t.$$set=s=>{"board"in s&&r(0,n=s.board),"onClick"in s&&r(2,o=s.onClick)},[n,a,o]}class Dn extends ie{constructor(e){super(),fe(this,e,Hn,On,ue,{board:0,onClick:2})}}function xe(t){const e=t.slice(),r=e[0];return e[1]=r.moveCoord,e[2]=r.player,e[3]=r.board,e[4]=r.aiChoice,e}function At(t){let e,r,n,o,l=t[1].x+"",a,s,i=t[1].y+"",c,m,_,S,w,h=Xe(t[1])?"✅":"❌",p,N,d,I,H,W=Ue(t[1])?"✅":"❌",J,V,A,$,T,G=Ye(t[1])?"✅":"❌",z,Z,le,B,U,q,j=Fe(t[3],t[2],t[1])?"✅":"❌",ce,pe,re,me,se,_e,ye=ze(t[3],t[2],t[1])?"✅":"❌",ve,he,de,Q=t[4]&&Ct(t);return{c(){e=b("span"),r=E("Last move:"),n=C(),o=b("span"),a=E(l),s=E(", "),c=E(i),m=C(),_=b("span"),S=E("center"),w=b("span"),p=E(h),N=C(),d=b("span"),I=E("corner"),H=b("span"),J=E(W),V=C(),A=b("span"),$=E("side"),T=b("span"),z=E(G),Z=C(),le=b("span"),B=E("Took opposite corner"),U=C(),q=b("span"),ce=E(j),pe=C(),re=b("span"),me=E("Last move blocks opponent"),se=C(),_e=b("span"),ve=E(ye),he=C(),Q&&Q.c(),de=Ge()},l(v){e=k(v,"SPAN",{});var O=y(e);r=g(O,"Last move:"),O.forEach(f),n=M(v),o=k(v,"SPAN",{});var $e=y(o);a=g($e,l),s=g($e,", "),c=g($e,i),$e.forEach(f),m=M(v),_=k(v,"SPAN",{});var Ee=y(_);S=g(Ee,"center"),Ee.forEach(f),w=k(v,"SPAN",{});var we=y(w);p=g(we,h),we.forEach(f),N=M(v),d=k(v,"SPAN",{});var oe=y(d);I=g(oe,"corner"),oe.forEach(f),H=k(v,"SPAN",{});var K=y(H);J=g(K,W),K.forEach(f),V=M(v),A=k(v,"SPAN",{});var Me=y(A);$=g(Me,"side"),Me.forEach(f),T=k(v,"SPAN",{});var Te=y(T);z=g(Te,G),Te.forEach(f),Z=M(v),le=k(v,"SPAN",{});var ae=y(le);B=g(ae,"Took opposite corner"),ae.forEach(f),U=M(v),q=k(v,"SPAN",{});var Be=y(q);ce=g(Be,j),Be.forEach(f),pe=M(v),re=k(v,"SPAN",{});var Oe=y(re);me=g(Oe,"Last move blocks opponent"),Oe.forEach(f),se=M(v),_e=k(v,"SPAN",{});var Ae=y(_e);ve=g(Ae,ye),Ae.forEach(f),he=M(v),Q&&Q.l(v),de=Ge()},m(v,O){P(v,e,O),u(e,r),P(v,n,O),P(v,o,O),u(o,a),u(o,s),u(o,c),P(v,m,O),P(v,_,O),u(_,S),P(v,w,O),u(w,p),P(v,N,O),P(v,d,O),u(d,I),P(v,H,O),u(H,J),P(v,V,O),P(v,A,O),u(A,$),P(v,T,O),u(T,z),P(v,Z,O),P(v,le,O),u(le,B),P(v,U,O),P(v,q,O),u(q,ce),P(v,pe,O),P(v,re,O),u(re,me),P(v,se,O),P(v,_e,O),u(_e,ve),P(v,he,O),Q&&Q.m(v,O),P(v,de,O)},p(v,O){O&1&&l!==(l=v[1].x+"")&&F(a,l),O&1&&i!==(i=v[1].y+"")&&F(c,i),O&1&&h!==(h=Xe(v[1])?"✅":"❌")&&F(p,h),O&1&&W!==(W=Ue(v[1])?"✅":"❌")&&F(J,W),O&1&&G!==(G=Ye(v[1])?"✅":"❌")&&F(z,G),O&1&&j!==(j=Fe(v[3],v[2],v[1])?"✅":"❌")&&F(ce,j),O&1&&ye!==(ye=ze(v[3],v[2],v[1])?"✅":"❌")&&F(ve,ye),v[4]?Q?Q.p(v,O):(Q=Ct(v),Q.c(),Q.m(de.parentNode,de)):Q&&(Q.d(1),Q=null)},d(v){v&&f(e),v&&f(n),v&&f(o),v&&f(m),v&&f(_),v&&f(w),v&&f(N),v&&f(d),v&&f(H),v&&f(V),v&&f(A),v&&f(T),v&&f(Z),v&&f(le),v&&f(U),v&&f(q),v&&f(pe),v&&f(re),v&&f(se),v&&f(_e),v&&f(he),Q&&Q.d(v),v&&f(de)}}}function Ct(t){let e,r,n,o,l=t[4].score+"",a,s,i,c,m,_,S=t[4].reason+"",w;return{c(){e=b("span"),r=E("Score"),n=C(),o=b("span"),a=E(l),s=C(),i=b("span"),c=E("Reason"),m=C(),_=b("span"),w=E(S)},l(h){e=k(h,"SPAN",{});var p=y(e);r=g(p,"Score"),p.forEach(f),n=M(h),o=k(h,"SPAN",{});var N=y(o);a=g(N,l),N.forEach(f),s=M(h),i=k(h,"SPAN",{});var d=y(i);c=g(d,"Reason"),d.forEach(f),m=M(h),_=k(h,"SPAN",{});var I=y(_);w=g(I,S),I.forEach(f)},m(h,p){P(h,e,p),u(e,r),P(h,n,p),P(h,o,p),u(o,a),P(h,s,p),P(h,i,p),u(i,c),P(h,m,p),P(h,_,p),u(_,w)},p(h,p){p&1&&l!==(l=h[4].score+"")&&F(a,l),p&1&&S!==(S=h[4].reason+"")&&F(w,S)},d(h){h&&f(e),h&&f(n),h&&f(o),h&&f(s),h&&f(i),h&&f(m),h&&f(_)}}}function Rn(t){let e,r=t[0]&&At(xe(t));return{c(){e=b("div"),r&&r.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var o=y(e);r&&r.l(o),o.forEach(f),this.h()},h(){Y(e,"class","grid2cols svelte-1lw5ne4")},m(n,o){P(n,e,o),r&&r.m(e,null)},p(n,[o]){n[0]?r?r.p(xe(n),o):(r=At(xe(n)),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:ke,o:ke,d(n){n&&f(e),r&&r.d()}}}function Vn(t,e,r){let{historyItem:n}=e;return t.$$set=o=>{"historyItem"in o&&r(0,n=o.historyItem)},[n]}class Mt extends ie{constructor(e){super(),fe(this,e,Vn,Rn,ue,{historyItem:0})}}function Tt(t,e,r){const n=t.slice();return n[4]=e[r],n}function Bt(t){let e,r=[...t[0].moveHistory].reverse(),n=[];for(let o=0;o<r.length;o+=1)n[o]=Ot(Tt(t,r,o));return{c(){e=b("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var l=y(e);for(let a=0;a<n.length;a+=1)n[a].l(l);l.forEach(f),this.h()},h(){Y(e,"class","grid4cols svelte-1jc7frz")},m(o,l){P(o,e,l);for(let a=0;a<n.length;a+=1)n[a].m(e,null)},p(o,l){if(l&1){r=[...o[0].moveHistory].reverse();let a;for(a=0;a<r.length;a+=1){const s=Tt(o,r,a);n[a]?n[a].p(s,l):(n[a]=Ot(s),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},d(o){o&&f(e),Wt(n,o)}}}function Gn(t){let e,r;return{c(){e=b("span"),r=E("-")},l(n){e=k(n,"SPAN",{});var o=y(e);r=g(o,"-"),o.forEach(f)},m(n,o){P(n,e,o),u(e,r)},p:ke,d(n){n&&f(e)}}}function Ln(t){let e,r=JSON.stringify(t[4].aiChoice)+"",n;return{c(){e=b("span"),n=E(r)},l(o){e=k(o,"SPAN",{});var l=y(e);n=g(l,r),l.forEach(f)},m(o,l){P(o,e,l),u(e,n)},p(o,l){l&1&&r!==(r=JSON.stringify(o[4].aiChoice)+"")&&F(n,r)},d(o){o&&f(e)}}}function Ot(t){let e,r=t[4].moveCoord.x+"",n,o,l=t[4].moveCoord.y+"",a,s,i,c,m=t[4].player+"",_,S,w=t[4].method+"",h,p,N,d=t[4].board.toString()+"",I,H,W;function J($,T){return $[4].aiChoice?Ln:Gn}let V=J(t),A=V(t);return{c(){e=b("span"),n=E(r),o=E(", "),a=E(l),s=C(),i=b("span"),c=E("Player "),_=E(m),S=E(" - Method "),h=E(w),p=C(),N=b("span"),I=E(d),H=C(),A.c(),W=Ge()},l($){e=k($,"SPAN",{});var T=y(e);n=g(T,r),o=g(T,", "),a=g(T,l),T.forEach(f),s=M($),i=k($,"SPAN",{});var G=y(i);c=g(G,"Player "),_=g(G,m),S=g(G," - Method "),h=g(G,w),G.forEach(f),p=M($),N=k($,"SPAN",{});var z=y(N);I=g(z,d),z.forEach(f),H=M($),A.l($),W=Ge()},m($,T){P($,e,T),u(e,n),u(e,o),u(e,a),P($,s,T),P($,i,T),u(i,c),u(i,_),u(i,S),u(i,h),P($,p,T),P($,N,T),u(N,I),P($,H,T),A.m($,T),P($,W,T)},p($,T){T&1&&r!==(r=$[4].moveCoord.x+"")&&F(n,r),T&1&&l!==(l=$[4].moveCoord.y+"")&&F(a,l),T&1&&m!==(m=$[4].player+"")&&F(_,m),T&1&&w!==(w=$[4].method+"")&&F(h,w),T&1&&d!==(d=$[4].board.toString()+"")&&F(I,d),V===(V=J($))&&A?A.p($,T):(A.d(1),A=V($),A&&(A.c(),A.m(W.parentNode,W)))},d($){$&&f(e),$&&f(s),$&&f(i),$&&f(p),$&&f(N),$&&f(H),A.d($),$&&f(W)}}}function Wn(t){let e,r,n,o,l,a=t[2](t[0])+"",s,i,c,m,_,S,w,h,p=t[1]?"Hide":"Show",N,d,I,H,W,J;m=new Mt({props:{historyItem:Ve(t[0],R.player)}}),S=new Mt({props:{historyItem:Ve(t[0],R.computer)}});let V=t[1]&&Bt(t);return{c(){e=b("div"),r=b("h4"),n=E("Game info"),o=C(),l=b("span"),s=E(a),i=C(),c=b("div"),x(m.$$.fragment),_=C(),x(S.$$.fragment),w=C(),h=b("button"),N=E(p),d=E(" move history"),I=C(),V&&V.c(),this.h()},l(A){e=k(A,"DIV",{});var $=y(e);r=k($,"H4",{});var T=y(r);n=g(T,"Game info"),T.forEach(f),o=M($),l=k($,"SPAN",{});var G=y(l);s=g(G,a),G.forEach(f),i=M($),c=k($,"DIV",{class:!0});var z=y(c);ee(m.$$.fragment,z),_=M(z),ee(S.$$.fragment,z),z.forEach(f),w=M($),h=k($,"BUTTON",{});var Z=y(h);N=g(Z,p),d=g(Z," move history"),Z.forEach(f),I=M($),V&&V.l($),$.forEach(f),this.h()},h(){Y(c,"class","grid2cols svelte-1jc7frz")},m(A,$){P(A,e,$),u(e,r),u(r,n),u(e,o),u(e,l),u(l,s),u(e,i),u(e,c),te(m,c,null),u(c,_),te(S,c,null),u(e,w),u(e,h),u(h,N),u(h,d),u(e,I),V&&V.m(e,null),H=!0,W||(J=ge(h,"click",t[3]),W=!0)},p(A,[$]){(!H||$&1)&&a!==(a=A[2](A[0])+"")&&F(s,a);const T={};$&1&&(T.historyItem=Ve(A[0],R.player)),m.$set(T);const G={};$&1&&(G.historyItem=Ve(A[0],R.computer)),S.$set(G),(!H||$&2)&&p!==(p=A[1]?"Hide":"Show")&&F(N,p),A[1]?V?V.p(A,$):(V=Bt(A),V.c(),V.m(e,null)):V&&(V.d(1),V=null)},i(A){H||(L(m.$$.fragment,A),L(S.$$.fragment,A),H=!0)},o(A){X(m.$$.fragment,A),X(S.$$.fragment,A),H=!1},d(A){A&&f(e),ne(m),ne(S),V&&V.d(),W=!1,J()}}}function Xn(t,e,r){let{game:n}=e,o=!1;const l=s=>!s||!s.state?"N/A":s.state==="not_over"?"Turn: "+(s.currentPlayer===R.player?"Player":"Computer"):s.state==="player_win"?"Player Win":s.state==="computer_win"?"Computer Win":s.state==="draw"?"Draw":s.state==="over"?"Game Over":"Invalid Game",a=()=>r(1,o=!o);return t.$$set=s=>{"game"in s&&r(0,n=s.game)},[n,o,l,a]}class zn extends ie{constructor(e){super(),fe(this,e,Xn,Wn,ue,{game:0})}}function Ht(t,e,r){const n=t.slice();return n[8]=e[r],n}function Dt(t){let e,r,n,o;return{c(){e=b("p"),r=E("Restarting in "),n=E(t[1]),o=E(" seconds")},l(l){e=k(l,"P",{});var a=y(e);r=g(a,"Restarting in "),n=g(a,t[1]),o=g(a," seconds"),a.forEach(f)},m(l,a){P(l,e,a),u(e,r),u(e,n),u(e,o)},p(l,a){a&2&&F(n,l[1])},d(l){l&&f(e)}}}function Rt(t){let e,r=t[8]+"",n,o;return{c(){e=b("option"),n=E(r),o=C(),this.h()},l(l){e=k(l,"OPTION",{});var a=y(e);n=g(a,r),o=M(a),a.forEach(f),this.h()},h(){e.__value=t[8],e.value=e.__value},m(l,a){P(l,e,a),u(e,n),u(e,o)},p:ke,d(l){l&&f(e)}}}function Vt(t){let e,r,n,o,l,a;return e=new Dn({props:{board:t[0].board,onClick:t[3]}}),n=new zn({props:{game:t[0]}}),l=new jt({props:{board:t[0].board}}),{c(){x(e.$$.fragment),r=C(),x(n.$$.fragment),o=C(),x(l.$$.fragment)},l(s){ee(e.$$.fragment,s),r=M(s),ee(n.$$.fragment,s),o=M(s),ee(l.$$.fragment,s)},m(s,i){te(e,s,i),P(s,r,i),te(n,s,i),P(s,o,i),te(l,s,i),a=!0},p(s,i){const c={};i&1&&(c.board=s[0].board),e.$set(c);const m={};i&1&&(m.game=s[0]),n.$set(m);const _={};i&1&&(_.board=s[0].board),l.$set(_)},i(s){a||(L(e.$$.fragment,s),L(n.$$.fragment,s),L(l.$$.fragment,s),a=!0)},o(s){X(e.$$.fragment,s),X(n.$$.fragment,s),X(l.$$.fragment,s),a=!1},d(s){ne(e,s),s&&f(r),ne(n,s),s&&f(o),ne(l,s)}}}function Fn(t){let e,r,n,o,l,a,s,i,c,m,_=t[1]>0&&Dt(t),S=Object.keys(nt),w=[];for(let p=0;p<S.length;p+=1)w[p]=Rt(Ht(t,S,p));let h=t[0].board&&Vt(t);return{c(){e=b("h2"),r=E("Game"),n=C(),o=b("div"),_&&_.c(),l=C(),a=b("select");for(let p=0;p<w.length;p+=1)w[p].c();s=C(),h&&h.c(),this.h()},l(p){e=k(p,"H2",{});var N=y(e);r=g(N,"Game"),N.forEach(f),n=M(p),o=k(p,"DIV",{});var d=y(o);_&&_.l(d),l=M(d),a=k(d,"SELECT",{});var I=y(a);for(let H=0;H<w.length;H+=1)w[H].l(I);I.forEach(f),s=M(d),h&&h.l(d),d.forEach(f),this.h()},h(){t[2]===void 0&&Zt(()=>t[4].call(a))},m(p,N){P(p,e,N),u(e,r),P(p,n,N),P(p,o,N),_&&_.m(o,null),u(o,l),u(o,a);for(let d=0;d<w.length;d+=1)w[d].m(a,null);kt(a,t[2]),u(o,s),h&&h.m(o,null),i=!0,c||(m=ge(a,"change",t[4]),c=!0)},p(p,[N]){if(p[1]>0?_?_.p(p,N):(_=Dt(p),_.c(),_.m(o,l)):_&&(_.d(1),_=null),N&0){S=Object.keys(nt);let d;for(d=0;d<S.length;d+=1){const I=Ht(p,S,d);w[d]?w[d].p(I,N):(w[d]=Rt(I),w[d].c(),w[d].m(a,null))}for(;d<w.length;d+=1)w[d].d(1);w.length=S.length}N&4&&kt(a,p[2]),p[0].board?h?(h.p(p,N),N&1&&L(h,1)):(h=Vt(p),h.c(),L(h,1),h.m(o,null)):h&&(lt(),X(h,1,1,()=>{h=null}),st())},i(p){i||(L(h),i=!0)},o(p){X(h),i=!1},d(p){p&&f(e),p&&f(n),p&&f(o),_&&_.d(),Wt(w,p),h&&h.d(),c=!1,m()}}}function Un(t,e,r){let n,o,l,a="hardcodedRulesComplete",s=!1;i();function i(){r(0,n=Nn(s?R.computer:R.player)),s&&It(n,R.computer,a),o=n.currentPlayer,s=!s}const c=_=>{o===R.player&&(An(n,R.player,_),r(0,n),setTimeout(()=>{if(It(n,R.computer,a),r(0,n),o=n.currentPlayer,n.state!=="not_over"){r(1,l=4);const S=setInterval(()=>{r(1,l--,l),l===0&&(i(),clearInterval(S))},1e3)}},500))};function m(){a=xt(this),r(2,a)}return[n,l,a,c,m]}class Yn extends ie{constructor(e){super(),fe(this,e,Un,Fn,ue,{})}}function jn(t){let e,r,n,o,l,a,s,i,c,m,_,S,w,h,p,N,d,I,H,W,J,V,A,$,T,G,z,Z,le;return l=new Xt({props:{sketch:t[6]}}),G=new jt({props:{board:t[1],lastMove:t[3]}}),{c(){e=b("h2"),r=E("Analyzer"),n=C(),o=b("div"),x(l.$$.fragment),a=C(),s=b("div"),i=b("h4"),c=E("Controls"),m=C(),_=b("button"),S=E("Play O"),h=C(),p=b("button"),N=E("Play X"),I=C(),H=b("button"),W=E("Previous"),V=C(),A=b("button"),$=E("Reset"),T=C(),x(G.$$.fragment),this.h()},l(B){e=k(B,"H2",{});var U=y(e);r=g(U,"Analyzer"),U.forEach(f),n=M(B),o=k(B,"DIV",{});var q=y(o);ee(l.$$.fragment,q),a=M(q),s=k(q,"DIV",{});var j=y(s);i=k(j,"H4",{});var ce=y(i);c=g(ce,"Controls"),ce.forEach(f),m=M(j),_=k(j,"BUTTON",{});var pe=y(_);S=g(pe,"Play O"),pe.forEach(f),h=M(j),p=k(j,"BUTTON",{});var re=y(p);N=g(re,"Play X"),re.forEach(f),I=M(j),H=k(j,"BUTTON",{});var me=y(H);W=g(me,"Previous"),me.forEach(f),V=M(j),A=k(j,"BUTTON",{});var se=y(A);$=g(se,"Reset"),se.forEach(f),j.forEach(f),T=M(q),ee(G.$$.fragment,q),q.forEach(f),this.h()},h(){_.disabled=w=t[2]===R.player,p.disabled=d=t[2]===R.computer,H.disabled=J=(t[0]||[]).length<2},m(B,U){P(B,e,U),u(e,r),P(B,n,U),P(B,o,U),te(l,o,null),u(o,a),u(o,s),u(s,i),u(i,c),u(s,m),u(s,_),u(_,S),u(s,h),u(s,p),u(p,N),u(s,I),u(s,H),u(H,W),u(s,V),u(s,A),u(A,$),u(o,T),te(G,o,null),z=!0,Z||(le=[ge(_,"click",t[7]),ge(p,"click",t[8]),ge(H,"click",t[5]),ge(A,"click",t[4])],Z=!0)},p(B,[U]){(!z||U&4&&w!==(w=B[2]===R.player))&&(_.disabled=w),(!z||U&4&&d!==(d=B[2]===R.computer))&&(p.disabled=d),(!z||U&1&&J!==(J=(B[0]||[]).length<2))&&(H.disabled=J);const q={};U&2&&(q.board=B[1]),U&8&&(q.lastMove=B[3]),G.$set(q)},i(B){z||(L(l.$$.fragment,B),L(G.$$.fragment,B),z=!0)},o(B){X(l.$$.fragment,B),X(G.$$.fragment,B),z=!1},d(B){B&&f(e),B&&f(n),B&&f(o),ne(l),ne(G),Z=!1,en(le)}}}function Jn(t,e,r){let n,o,l,a=R.player,s;function i(p,N){De(l,p,Pe(N)),r(3,s=N),r(1,l),o.push({...l}),r(0,o),c()}function c(){r(2,a=a===R.player?R.computer:R.player)}function m(){r(1,l=Ft()),r(0,o=[{...l}]),r(3,s={x:-1,y:-1})}function _(){o.length<=1||(o.pop(),r(0,o),r(1,l={...o[o.length-1]}))}const S=p=>{p.setup=()=>{n=p,p.createCanvas(400,400),m()},p.draw=()=>{p.background(0),Yt(p,l,{drawSelection:!0,selection:rt(p),currentPlayer:a})},p.mousePressed=()=>{if(p.mouseX<0||p.mouseX>p.width||p.mouseY<0||p.mouseY>p.height)return;const N=rt(p);i(a,N)}};return ot(()=>{n==null||n.remove()}),[o,l,a,s,m,_,S,()=>r(2,a=R.player),()=>r(2,a=R.computer)]}class qn extends ie{constructor(e){super(),fe(this,e,Jn,jn,ue,{})}}function Kn(t){let e;return{c(){e=E("Game")},l(r){e=g(r,"Game")},m(r,n){P(r,e,n)},d(r){r&&f(e)}}}function Qn(t){let e;return{c(){e=E("Analyzer")},l(r){e=g(r,"Analyzer")},m(r,n){P(r,e,n)},d(r){r&&f(e)}}}function Zn(t){let e,r,n,o;return e=new yt({props:{$$slots:{default:[Kn]},$$scope:{ctx:t}}}),n=new yt({props:{$$slots:{default:[Qn]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),r=C(),x(n.$$.fragment)},l(l){ee(e.$$.fragment,l),r=M(l),ee(n.$$.fragment,l)},m(l,a){te(e,l,a),P(l,r,a),te(n,l,a),o=!0},p(l,a){const s={};a&1&&(s.$$scope={dirty:a,ctx:l}),e.$set(s);const i={};a&1&&(i.$$scope={dirty:a,ctx:l}),n.$set(i)},i(l){o||(L(e.$$.fragment,l),L(n.$$.fragment,l),o=!0)},o(l){X(e.$$.fragment,l),X(n.$$.fragment,l),o=!1},d(l){ne(e,l),l&&f(r),ne(n,l)}}}function xn(t){let e,r;return e=new Yn({}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),r=!0},i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){ne(e,n)}}}function er(t){let e,r;return e=new qn({}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),r=!0},i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){ne(e,n)}}}function tr(t){let e,r,n,o,l,a;return e=new cn({props:{$$slots:{default:[Zn]},$$scope:{ctx:t}}}),n=new Et({props:{$$slots:{default:[xn]},$$scope:{ctx:t}}}),l=new Et({props:{$$slots:{default:[er]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),r=C(),x(n.$$.fragment),o=C(),x(l.$$.fragment)},l(s){ee(e.$$.fragment,s),r=M(s),ee(n.$$.fragment,s),o=M(s),ee(l.$$.fragment,s)},m(s,i){te(e,s,i),P(s,r,i),te(n,s,i),P(s,o,i),te(l,s,i),a=!0},p(s,i){const c={};i&1&&(c.$$scope={dirty:i,ctx:s}),e.$set(c);const m={};i&1&&(m.$$scope={dirty:i,ctx:s}),n.$set(m);const _={};i&1&&(_.$$scope={dirty:i,ctx:s}),l.$set(_)},i(s){a||(L(e.$$.fragment,s),L(n.$$.fragment,s),L(l.$$.fragment,s),a=!0)},o(s){X(e.$$.fragment,s),X(n.$$.fragment,s),X(l.$$.fragment,s),a=!1},d(s){ne(e,s),s&&f(r),ne(n,s),s&&f(o),ne(l,s)}}}function nr(t){let e,r;return e=new ln({props:{$$slots:{default:[tr]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),r=!0},p(n,[o]){const l={};o&1&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){ne(e,n)}}}class rr extends ie{constructor(e){super(),fe(this,e,null,nr,ue,{})}}function or(t){let e,r;return e=new rr({}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,o){te(e,n,o),r=!0},p:ke,i(n){r||(L(e.$$.fragment,n),r=!0)},o(n){X(e.$$.fragment,n),r=!1},d(n){ne(e,n)}}}class ir extends ie{constructor(e){super(),fe(this,e,null,or,ue,{})}}export{ir as default};
