import{S as J,i as L,s as B,k as w,l as g,m as E,h as m,n as j,I as M,b as v,J as O,B as G,K as Y,q as N,a as k,r as C,c as P,G as y,u as Z,L as Te,f as b,g as z,d as q,t as S,e as oe,w as R,x as H,y as F,z as V,M as Oe,N as se,O as ke,H as Pe,P as Be,Q as Re}from"../../chunks/index-780d2971.js";import{w as He}from"../../chunks/index-341ca319.js";const ce=t=>{const e=t===1?1:-1,n=[1,1,2,2,3,3].map(l=>l*e);return{player:t,pieces:n,unselectableIndexes:new Set,selectedPiece:null}},ie=t=>{const e=[];for(let l=0;l<3;l++){e.push([]);for(let r=0;r<3;r++)e[e.length-1].push([])}const n={state:{player:1,action:"select1"},grid:e,player1:ce(1),player2:ce(2)};return t!=null&&t.player2Start&&(n.state.player=2),n},K=t=>{const e=t.player1.unselectableIndexes,n=t.player2.unselectableIndexes,l=JSON.parse(JSON.stringify(t));return l.player1.unselectableIndexes=new Set([...e.values()]),l.player2.unselectableIndexes=new Set([...n.values()]),l},U=t=>t.state.player===1?t.player1:t.player2,Q=t=>t.state.player===1?t.player2:t.player1,ne=(t,e,n)=>{const l=t[n][e];return l.length?l[l.length-1]:null},I=(t,e,n)=>{if(e<0||n<0||e>2||n>2)throw new Error(`Invalid coordinates ${e},${n}`);const l=ne(t,e,n);return l===null?null:l>0?1:2},Me=(t,e,n)=>{if(e<0||n<0||e>2||n>2)throw new Error(`Invalid coordinates ${e},${n}`);const l=ne(t,e,n);return l===null?0:Math.abs(l)},T=(t,e,n)=>{const l=I(t,e.x,e.y),r=I(t,n.x,n.y);return l!==null&&l===r},x=t=>{const{grid:e}=t,n=new Set;for(let l=0;l<3;l++)if(T(e,{x:0,y:l},{x:1,y:l})&&T(e,{x:0,y:l},{x:2,y:l})){const r=I(e,0,l);n.add(r)}for(let l=0;l<3;l++)if(T(e,{x:l,y:0},{x:l,y:1})&&T(e,{x:l,y:0},{x:l,y:2})){const r=I(e,l,0);n.add(r)}if(T(e,{x:0,y:0},{x:1,y:1})&&T(e,{x:0,y:0},{x:2,y:2})){const l=I(e,0,0);n.add(l)}if(T(e,{x:0,y:2},{x:1,y:1})&&T(e,{x:0,y:2},{x:2,y:0})){const l=I(e,0,2);n.add(l)}if(n.delete(null),n.size===1){t.state.player=[...n.values()][0],t.state.action="winner";return}if(n.size===2){t.state.player=1,t.state.action="draw";return}},Ne=(t,e,n)=>{if(t.state.player!==e.player||t.state.action!=="select1")throw new Error("invalid_step");if(n>=e.pieces.length||n<0)throw new Error("oob_selection_index");if(e.selectedPiece!==null)throw new Error("previous_selection_in_hand");if(e.unselectableIndexes.has(n))throw new Error("piece_already_used");e.selectedPiece={from:"hand",index:n},t.state.action="select2"},Ce=(t,e,n)=>{if(t.state.player!==e.player||t.state.action!=="select1")throw new Error("invalid_step");const{x:l,y:r}=n;if(l<0||r<0||l>2||r>2)throw new Error(`Invalid coordinates ${l},${r}`);if(e.selectedPiece!==null)throw new Error("previous_selection_in_hand");if(t.grid[r][l].length===0)throw new Error("empty_stack_selection");if(I(t.grid,l,r)!==e.player)throw new Error("opponent_owned_selection");e.selectedPiece={from:"board",position:{x:l,y:r}},t.state.action="select2"},Ie=(t,e)=>{if(t.state.action!=="select2")throw new Error("invalid_step");const n=U(t);if(n.selectedPiece===null)throw new Error("no_selection_in_hand");const{x:l,y:r}=e,s=n.selectedPiece.from==="hand"?n.pieces[n.selectedPiece.index]:ne(t.grid,n.selectedPiece.position.x,n.selectedPiece.position.y);if(s===null)throw new Error("selected_piece_is_null");if(Me(t.grid,l,r)>=Math.abs(s))throw new Error("destination_bigger_than_piece");return t.grid[e.y][e.x].push(s),n.selectedPiece.from==="hand"&&n.unselectableIndexes.add(n.selectedPiece.index),n.selectedPiece.from==="board"&&t.grid[n.selectedPiece.position.y][n.selectedPiece.position.x].pop(),n.selectedPiece=null,t.state.action="select1",t.state.player=t.state.player===1?2:1,x(t),0},$=(t,e,n)=>{n.from.from==="hand"?Ne(t,e,n.from.index):Ce(t,e,n.from.position),Ie(t,n.to)},Fe=(t,e)=>{const n=[];for(let l=0;l<3;l++)for(let r=0;r<3;r++){const s=Me(t.grid,r,l);(!s||s<Math.abs(e))&&n.push({x:r,y:l})}return n},D=(t,e)=>Ve(t,e).reduce((l,r)=>{const s=Ue(t,e,r),o=Fe(t,s);for(const c of o)l.push({from:r,to:c});return l},[]),Ve=(t,e)=>{const n=e.pieces.map((l,r)=>r).filter(l=>!e.unselectableIndexes.has(l)).map(l=>({index:l,from:"hand"}));for(let l=0;l<3;l++)for(let r=0;r<3;r++)I(t.grid,r,l)===e.player&&n.push({from:"board",position:{x:r,y:l}});return n},Ue=(t,e,n)=>{if(n.from==="board"){const l=t.grid[n.position.y][n.position.x];return l[l.length-1]}return e.pieces[n.index]},re=t=>{if(x(t),t.state.action==="winner")return t.state.player===1?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER;if(t.state.action==="draw")return Number.MAX_SAFE_INTEGER/2;const e=D(t,t.player1),n=D(t,t.player2);if(e.length===0&&n.length===0)return Number.MAX_SAFE_INTEGER/2;let l=0;const r=I(t.grid,1,1);return r===t.player1.player?l+=2:r===t.player2.player&&(l-=2),[I(t.grid,0,0),I(t.grid,2,0),I(t.grid,0,2),I(t.grid,2,2)].forEach(o=>{o!==null&&(l+=o!==null&&o===1?1:-1)}),l},De=(t,e)=>{const n=D(t,e);if(!n.length)throw new Error("no_move_possible");const s=[...n.reduce((o,c)=>{const f=K(t),u=e.player===1?f.player1:f.player2;$(f,u,c);const d=re(f);return o.push({move:c,score:d}),o},[])].sort((o,c)=>e.player===1?c.score-o.score:o.score-c.score)[0].move;$(t,e,s)},le=(t,e,n)=>{const l=D(t,e);if(x(t),n===0||!l.length||["draw","winner"].includes(t.state.action))return{score:re(t),move:null};if(e.player===1){let r=Number.MIN_SAFE_INTEGER,s;for(const o of l){const c=K(t),f=U(c),u=Q(c);$(c,f,o);const d=le(c,u,n-1);(r===void 0||d.score>=r)&&(r=d.score,s={score:d.score,move:o})}if(!s)throw new Error("no_minmax_result");return s}else{let r=Number.MAX_SAFE_INTEGER,s;for(const o of l){const c=K(t),f=U(c),u=Q(c);$(c,f,o);const d=le(c,u,n-1);(r===void 0||d.score<=r)&&(r=d.score,s={score:d.score,move:o})}if(!s)throw new Error("no_minmax_result");return s}},We=(t,e)=>{const n=le(t,e,2);if(!n.move)throw new Error("no_move_possible");const l=n.move;$(t,e,l)},Ae=(t,e,n)=>{const l=e.player===1?1:-1,r=D(t,e);if(x(t),n===0||!r.length||["draw","winner"].includes(t.state.action))return{score:re(t)*l,move:null};let s=Number.MIN_SAFE_INTEGER,o;for(const c of r){const f=K(t),u=U(f),d=Q(f);$(f,u,c);const a=Ae(f,d,n-1);a.score=-a.score,(s===void 0||a.score>=s)&&(s=a.score,o={score:a.score,move:c})}if(!o)throw new Error("no_minmax_result");return o},je=(t,e)=>{const n=Ae(t,e,2);if(!n.move)throw new Error("no_move_possible");const l=n.move;$(t,e,l)},$e=(t,e)=>{const n=D(t,e);if(n.length===0)throw new Error("no_move_possible");const l=Math.floor(Math.random()*n.length),r=n[l];$(t,e,r)},Je=(t,e)=>{const n=D(t,e);if(!n.length)throw new Error("no_move_possible");for(const l of n){const r=K(t),s=e.player===1?r.player1:r.player2;if($(r,s,l),x(r),r.state.action==="winner"&&r.state.player===e.player){$(t,e,l);return}}$e(t,e)},te={random:$e,win_or_random:Je,euristic:De,minmax:We,negamax:je},Le={player2Auto:!0,player2Strat:"negamax"},ee=He(Le);function ae(t,e,n){const l=t.slice();return l[4]=e[n],l}function fe(t){let e,n=t[4]+"",l,r;return{c(){e=w("div"),l=N(n),r=k(),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=E(e);l=C(o,n),r=P(o),o.forEach(m),this.h()},h(){j(e,"class","piece svelte-1bwmfvs"),M(e,"player1",t[4]>0),M(e,"player2",t[4]<0),M(e,"small-circle",Math.abs(t[4])===1),M(e,"medium-circle",Math.abs(t[4])===2),M(e,"large-circle",Math.abs(t[4])===3)},m(s,o){v(s,e,o),y(e,l),y(e,r)},p(s,o){o&1&&n!==(n=s[4]+"")&&Z(l,n),o&1&&M(e,"player1",s[4]>0),o&1&&M(e,"player2",s[4]<0),o&1&&M(e,"small-circle",Math.abs(s[4])===1),o&1&&M(e,"medium-circle",Math.abs(s[4])===2),o&1&&M(e,"large-circle",Math.abs(s[4])===3)},d(s){s&&m(e)}}}function Xe(t){let e,n,l,r=[...t[0]].reverse(),s=[];for(let o=0;o<r.length;o+=1)s[o]=fe(ae(t,r,o));return{c(){e=w("button");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=g(o,"BUTTON",{class:!0});var c=E(e);for(let f=0;f<s.length;f+=1)s[f].l(c);c.forEach(m),this.h()},h(){j(e,"class","cell svelte-1bwmfvs"),M(e,"selected",t[1]),M(e,"disabled",t[2])},m(o,c){v(o,e,c);for(let f=0;f<s.length;f+=1)s[f].m(e,null);n||(l=O(e,"click",t[3]),n=!0)},p(o,[c]){if(c&1){r=[...o[0]].reverse();let f;for(f=0;f<r.length;f+=1){const u=ae(o,r,f);s[f]?s[f].p(u,c):(s[f]=fe(u),s[f].c(),s[f].m(e,null))}for(;f<s.length;f+=1)s[f].d(1);s.length=r.length}c&2&&M(e,"selected",o[1]),c&4&&M(e,"disabled",o[2])},i:G,o:G,d(o){o&&m(e),Y(s,o),n=!1,l()}}}function ze(t,e,n){let{pieces:l}=e,{selected:r=!1}=e,{disabled:s}=e;function o(c){Te.call(this,t,c)}return t.$$set=c=>{"pieces"in c&&n(0,l=c.pieces),"selected"in c&&n(1,r=c.selected),"disabled"in c&&n(2,s=c.disabled)},[l,r,s,o]}class Ge extends J{constructor(e){super(),L(this,e,ze,Xe,B,{pieces:0,selected:1,disabled:2})}}function ue(t,e,n){const l=t.slice();return l[4]=e[n],l[6]=n,l}function de(t,e,n){const l=t.slice();return l[7]=e[n],l[9]=n,l}function _e(t){let e,n;function l(){return t[3](t[9],t[6])}return e=new Ge({props:{pieces:t[7],disabled:!1,selected:t[2]({x:t[9],y:t[6]})}}),e.$on("click",l),{c(){R(e.$$.fragment)},l(r){H(e.$$.fragment,r)},m(r,s){F(e,r,s),n=!0},p(r,s){t=r;const o={};s&1&&(o.pieces=t[7]),e.$set(o)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){S(e.$$.fragment,r),n=!1},d(r){V(e,r)}}}function pe(t){let e,n,l=t[4],r=[];for(let o=0;o<l.length;o+=1)r[o]=_e(de(t,l,o));const s=o=>S(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=oe()},l(o){for(let c=0;c<r.length;c+=1)r[c].l(o);e=oe()},m(o,c){for(let f=0;f<r.length;f+=1)r[f].m(o,c);v(o,e,c),n=!0},p(o,c){if(c&7){l=o[4];let f;for(f=0;f<l.length;f+=1){const u=de(o,l,f);r[f]?(r[f].p(u,c),b(r[f],1)):(r[f]=_e(u),r[f].c(),b(r[f],1),r[f].m(e.parentNode,e))}for(z(),f=l.length;f<r.length;f+=1)s(f);q()}},i(o){if(!n){for(let c=0;c<l.length;c+=1)b(r[c]);n=!0}},o(o){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)S(r[c]);n=!1},d(o){Y(r,o),o&&m(e)}}}function qe(t){let e,n,l=JSON.stringify(t[0].state)+"",r,s,o,c,f=t[0].grid,u=[];for(let a=0;a<f.length;a+=1)u[a]=pe(ue(t,f,a));const d=a=>S(u[a],1,1,()=>{u[a]=null});return{c(){e=w("div"),n=w("div"),r=N(l),s=k(),o=w("div");for(let a=0;a<u.length;a+=1)u[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var _=E(e);n=g(_,"DIV",{});var i=E(n);r=C(i,l),i.forEach(m),s=P(_),o=g(_,"DIV",{class:!0});var p=E(o);for(let h=0;h<u.length;h+=1)u[h].l(p);p.forEach(m),_.forEach(m),this.h()},h(){j(o,"class","overlay svelte-1n6jeyv"),j(e,"class","board svelte-1n6jeyv")},m(a,_){v(a,e,_),y(e,n),y(n,r),y(e,s),y(e,o);for(let i=0;i<u.length;i+=1)u[i].m(o,null);c=!0},p(a,[_]){if((!c||_&1)&&l!==(l=JSON.stringify(a[0].state)+"")&&Z(r,l),_&7){f=a[0].grid;let i;for(i=0;i<f.length;i+=1){const p=ue(a,f,i);u[i]?(u[i].p(p,_),b(u[i],1)):(u[i]=pe(p),u[i].c(),b(u[i],1),u[i].m(o,null))}for(z(),i=f.length;i<u.length;i+=1)d(i);q()}},i(a){if(!c){for(let _=0;_<f.length;_+=1)b(u[_]);c=!0}},o(a){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)S(u[_]);c=!1},d(a){a&&m(e),Y(u,a)}}}function Ke(t,e,n){let{game:l}=e,{onSelectCell:r}=e;const s=c=>{for(const f of[l.player1,l.player2]){const{selectedPiece:u}=f;if((u==null?void 0:u.from)==="board"&&u.position.x===c.x&&u.position.y===c.y)return!0}return!1},o=(c,f)=>r({x:c,y:f});return t.$$set=c=>{"game"in c&&n(0,l=c.game),"onSelectCell"in c&&n(1,r=c.onSelectCell)},[l,r,s,o]}class Qe extends J{constructor(e){super(),L(this,e,Ke,qe,B,{game:0,onSelectCell:1})}}function he(t,e,n){const l=t.slice();return l[3]=e[n],l}function me(t){let e,n=t[3]+"",l,r;return{c(){e=w("option"),l=N(n),r=k(),this.h()},l(s){e=g(s,"OPTION",{});var o=E(e);l=C(o,n),r=P(o),o.forEach(m),this.h()},h(){e.__value=t[3],e.value=e.__value},m(s,o){v(s,e,o),y(e,l),y(e,r)},p:G,d(s){s&&m(e)}}}function Ye(t){let e,n,l=t[0].player2Auto?"Human player 2":"Computer player 2",r,s,o,c,f,u=Object.keys(te),d=[];for(let a=0;a<u.length;a+=1)d[a]=me(he(t,u,a));return{c(){e=w("div"),n=w("button"),r=N(l),s=k(),o=w("select");for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l(a){e=g(a,"DIV",{});var _=E(e);n=g(_,"BUTTON",{});var i=E(n);r=C(i,l),i.forEach(m),s=P(_),o=g(_,"SELECT",{});var p=E(o);for(let h=0;h<d.length;h+=1)d[h].l(p);p.forEach(m),_.forEach(m),this.h()},h(){t[0].player2Strat===void 0&&Oe(()=>t[2].call(o))},m(a,_){v(a,e,_),y(e,n),y(n,r),y(e,s),y(e,o);for(let i=0;i<d.length;i+=1)d[i].m(o,null);se(o,t[0].player2Strat),c||(f=[O(n,"click",t[1]),O(o,"change",t[2])],c=!0)},p(a,[_]){if(_&1&&l!==(l=a[0].player2Auto?"Human player 2":"Computer player 2")&&Z(r,l),_&0){u=Object.keys(te);let i;for(i=0;i<u.length;i+=1){const p=he(a,u,i);d[i]?d[i].p(p,_):(d[i]=me(p),d[i].c(),d[i].m(o,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=u.length}_&1&&se(o,a[0].player2Strat)},i:G,o:G,d(a){a&&m(e),Y(d,a),c=!1,ke(f)}}}function Ze(t,e,n){let l;Pe(t,ee,o=>n(0,l=o));const r=()=>Be(ee,l.player2Auto=!l.player2Auto,l);function s(){l.player2Strat=Re(this),ee.set(l)}return[l,r,s]}class xe extends J{constructor(e){super(),L(this,e,Ze,Ye,B,{})}}function ye(t,e,n){const l=t.slice();return l[9]=e[n],l[11]=n,l}function ve(t){let e,n,l,r,s,o,c,f,u,d,a,_,i;return{c(){e=w("button"),n=N("Random"),l=k(),r=w("button"),s=N("Win or random"),o=k(),c=w("button"),f=N("Euristic"),u=k(),d=w("button"),a=N("MinMax")},l(p){e=g(p,"BUTTON",{});var h=E(e);n=C(h,"Random"),h.forEach(m),l=P(p),r=g(p,"BUTTON",{});var A=E(r);s=C(A,"Win or random"),A.forEach(m),o=P(p),c=g(p,"BUTTON",{});var W=E(c);f=C(W,"Euristic"),W.forEach(m),u=P(p),d=g(p,"BUTTON",{});var X=E(d);a=C(X,"MinMax"),X.forEach(m)},m(p,h){v(p,e,h),y(e,n),v(p,l,h),v(p,r,h),y(r,s),v(p,o,h),v(p,c,h),y(c,f),v(p,u,h),v(p,d,h),y(d,a),_||(i=[O(e,"click",t[4]),O(r,"click",t[5]),O(c,"click",t[6]),O(d,"click",t[7])],_=!0)},p:G,d(p){p&&m(e),p&&m(l),p&&m(r),p&&m(o),p&&m(c),p&&m(u),p&&m(d),_=!1,ke(i)}}}function be(t){var r;let e,n;function l(){return t[8](t[11])}return e=new Ge({props:{disabled:t[1]||t[0].unselectableIndexes.has(t[11]),pieces:[t[9]],selected:((r=t[0].selectedPiece)==null?void 0:r.from)==="hand"&&t[0].selectedPiece.index===t[11]}}),e.$on("click",l),{c(){R(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,o){F(e,s,o),n=!0},p(s,o){var f;t=s;const c={};o&3&&(c.disabled=t[1]||t[0].unselectableIndexes.has(t[11])),o&1&&(c.pieces=[t[9]]),o&1&&(c.selected=((f=t[0].selectedPiece)==null?void 0:f.from)==="hand"&&t[0].selectedPiece.index===t[11]),e.$set(c)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){V(e,s)}}}function et(t){let e,n,l=t[0].player+"",r,s,o,c,f,u=!t[1]&&ve(t),d=t[0].pieces,a=[];for(let i=0;i<d.length;i+=1)a[i]=be(ye(t,d,i));const _=i=>S(a[i],1,1,()=>{a[i]=null});return{c(){e=w("span"),n=N("Player "),r=N(l),s=k(),u&&u.c(),o=k(),c=w("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=g(i,"SPAN",{});var p=E(e);n=C(p,"Player "),r=C(p,l),p.forEach(m),s=P(i),u&&u.l(i),o=P(i),c=g(i,"DIV",{class:!0});var h=E(c);for(let A=0;A<a.length;A+=1)a[A].l(h);h.forEach(m),this.h()},h(){j(c,"class","overlay svelte-rwgxl1")},m(i,p){v(i,e,p),y(e,n),y(e,r),v(i,s,p),u&&u.m(i,p),v(i,o,p),v(i,c,p);for(let h=0;h<a.length;h+=1)a[h].m(c,null);f=!0},p(i,[p]){if((!f||p&1)&&l!==(l=i[0].player+"")&&Z(r,l),i[1]?u&&(u.d(1),u=null):u?u.p(i,p):(u=ve(i),u.c(),u.m(o.parentNode,o)),p&7){d=i[0].pieces;let h;for(h=0;h<d.length;h+=1){const A=ye(i,d,h);a[h]?(a[h].p(A,p),b(a[h],1)):(a[h]=be(A),a[h].c(),b(a[h],1),a[h].m(c,null))}for(z(),h=d.length;h<a.length;h+=1)_(h);q()}},i(i){if(!f){for(let p=0;p<d.length;p+=1)b(a[p]);f=!0}},o(i){a=a.filter(Boolean);for(let p=0;p<a.length;p+=1)S(a[p]);f=!1},d(i){i&&m(e),i&&m(s),u&&u.d(i),i&&m(o),i&&m(c),Y(a,i)}}}function tt(t,e,n){let{hand:l}=e,{disabled:r}=e,{onSelectPiece:s}=e,{onSelectAuto:o}=e;const c=()=>o(l,"random"),f=()=>o(l,"win_or_random"),u=()=>o(l,"euristic"),d=()=>o(l,"minmax"),a=_=>s(l,_);return t.$$set=_=>{"hand"in _&&n(0,l=_.hand),"disabled"in _&&n(1,r=_.disabled),"onSelectPiece"in _&&n(2,s=_.onSelectPiece),"onSelectAuto"in _&&n(3,o=_.onSelectAuto)},[l,r,s,o,c,f,u,d,a]}class we extends J{constructor(e){super(),L(this,e,tt,et,B,{hand:0,disabled:1,onSelectPiece:2,onSelectAuto:3})}}function ge(t){let e,n;return e=new Qe({props:{onSelectCell:t[1],game:t[0]}}),{c(){R(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){F(e,l,r),n=!0},p(l,r){const s={};r&1&&(s.game=l[0]),e.$set(s)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}function Ee(t){let e,n,l,r,s,o,c=t[0].state.player+"",f,u,d,a,_,i;return{c(){e=w("div"),n=w("span"),l=N("Game over!"),r=k(),s=w("span"),o=N("Winner: Player "),f=N(c),u=k(),d=w("button"),a=N("Play again")},l(p){e=g(p,"DIV",{});var h=E(e);n=g(h,"SPAN",{});var A=E(n);l=C(A,"Game over!"),A.forEach(m),r=P(h),s=g(h,"SPAN",{});var W=E(s);o=C(W,"Winner: Player "),f=C(W,c),W.forEach(m),u=P(h),d=g(h,"BUTTON",{});var X=E(d);a=C(X,"Play again"),X.forEach(m),h.forEach(m)},m(p,h){v(p,e,h),y(e,n),y(n,l),y(e,r),y(e,s),y(s,o),y(s,f),y(e,u),y(e,d),y(d,a),_||(i=O(d,"click",t[4]),_=!0)},p(p,h){h&1&&c!==(c=p[0].state.player+"")&&Z(f,c)},d(p){p&&m(e),_=!1,i()}}}function Se(t){let e,n,l,r;return e=new we({props:{onSelectAuto:t[3],onSelectPiece:t[2],hand:U(t[0]),disabled:!1}}),l=new we({props:{onSelectAuto:t[3],onSelectPiece:t[2],hand:Q(t[0]),disabled:!0}}),{c(){R(e.$$.fragment),n=k(),R(l.$$.fragment)},l(s){H(e.$$.fragment,s),n=P(s),H(l.$$.fragment,s)},m(s,o){F(e,s,o),v(s,n,o),F(l,s,o),r=!0},p(s,o){const c={};o&1&&(c.hand=U(s[0])),e.$set(c);const f={};o&1&&(f.hand=Q(s[0])),l.$set(f)},i(s){r||(b(e.$$.fragment,s),b(l.$$.fragment,s),r=!0)},o(s){S(e.$$.fragment,s),S(l.$$.fragment,s),r=!1},d(s){V(e,s),s&&m(n),V(l,s)}}}function lt(t){let e,n,l,r=t[0],s,o,c=t[0],f;n=new xe({});let u=ge(t),d=t[0].state.action==="winner"&&Ee(t),a=Se(t);return{c(){e=w("div"),R(n.$$.fragment),l=k(),u.c(),s=k(),d&&d.c(),o=k(),a.c(),this.h()},l(_){e=g(_,"DIV",{class:!0});var i=E(e);H(n.$$.fragment,i),l=P(i),u.l(i),s=P(i),d&&d.l(i),o=P(i),a.l(i),i.forEach(m),this.h()},h(){j(e,"class","d-flex justify-content-center")},m(_,i){v(_,e,i),F(n,e,null),y(e,l),u.m(e,null),y(e,s),d&&d.m(e,null),y(e,o),a.m(e,null),f=!0},p(_,[i]){i&1&&B(r,r=_[0])?(z(),S(u,1,1,G),q(),u=ge(_),u.c(),b(u,1),u.m(e,s)):u.p(_,i),_[0].state.action==="winner"?d?d.p(_,i):(d=Ee(_),d.c(),d.m(e,o)):d&&(d.d(1),d=null),i&1&&B(c,c=_[0])?(z(),S(a,1,1,G),q(),a=Se(_),a.c(),b(a,1),a.m(e,null)):a.p(_,i)},i(_){f||(b(n.$$.fragment,_),b(u),b(a),f=!0)},o(_){S(n.$$.fragment,_),S(u),S(a),f=!1},d(_){_&&m(e),V(n),u.d(_),d&&d.d(),a.d(_)}}}function nt(t,e,n){let l;Pe(t,ee,d=>n(5,l=d));let r=ie();const s=()=>{if(["winner","select2"].includes(r.state.action)||r.state.player!==r.player2.player||!l.player2Auto)return;const d=te[l.player2Strat];d(r,r.player2)};return[r,({x:d,y:a})=>{try{if(r.state.action==="select2"){Ie(r,{x:d,y:a})===0&&s(),n(0,r);return}const _=U(r);Ce(r,_,{x:d,y:a}),n(0,r),n(0,r)}catch(_){console.error("Could not select cell"),console.error(_),console.error("Game should be able to keep working")}},(d,a)=>{try{Ne(r,d,a)}catch(_){console.error("Could not select piece"),console.error(_),console.error("Game should be able to keep working")}n(0,r)},(d,a)=>{const _=te[a];_(r,d),s(),n(0,r)},()=>{n(0,r=ie({player2Start:Math.random()<.5})),r.state.player===2&&l.player2Auto&&s()}]}class rt extends J{constructor(e){super(),L(this,e,nt,lt,B,{})}}function ot(t){let e,n;return e=new rt({}),{c(){R(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){F(e,l,r),n=!0},p:G,i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){S(e.$$.fragment,l),n=!1},d(l){V(e,l)}}}class it extends J{constructor(e){super(),L(this,e,null,ot,B,{})}}export{it as default};
