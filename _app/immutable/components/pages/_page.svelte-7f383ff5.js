import{S as Q,i as Y,s as U,k as P,l as E,m as S,h as m,n as j,I as $,b as w,J as L,B as D,K as ee,q as G,a as I,r as B,c as N,G as y,u as Z,L as $e,f as b,g as F,d as W,t as k,e as z,w as O,x as V,y as H,z as R,M as Me}from"../../chunks/index-3160ce5b.js";const ne=l=>{const e=l===1?1:-1,n=[1,1,2,2,3,3].map(t=>t*e);return{player:l,pieces:n,unselectableIndexes:new Set,selectedPiece:null}},re=()=>{const l=[];for(let n=0;n<3;n++){l.push([]);for(let t=0;t<3;t++)l[l.length-1].push([])}return{state:{player:1,action:"select1"},grid:l,player1:ne(1),player2:ne(2)}},te=(l,e,n)=>{const t=l[n][e];return t.length?t[t.length-1]:null},M=(l,e,n)=>{if(e<0||n<0||e>2||n>2)throw new Error(`Invalid coordinates ${e},${n}`);const t=te(l,e,n);return t===null?null:t>0?1:2},ve=(l,e,n)=>{if(e<0||n<0||e>2||n>2)throw new Error(`Invalid coordinates ${e},${n}`);const t=te(l,e,n);return t===null?0:Math.abs(t)},T=(l,e,n)=>{const t=M(l,e.x,e.y),r=M(l,n.x,n.y);return t!==null&&t===r},le=l=>{const{grid:e}=l,n=new Set;for(let t=0;t<3;t++)if(T(e,{x:0,y:t},{x:1,y:t})&&T(e,{x:0,y:t},{x:2,y:t})){const r=M(e,0,t);n.add(r)}for(let t=0;t<3;t++)if(T(e,{x:t,y:0},{x:t,y:1})&&T(e,{x:t,y:0},{x:t,y:2})){const r=M(e,t,0);n.add(r)}if(T(e,{x:0,y:0},{x:1,y:1})&&T(e,{x:0,y:0},{x:2,y:2})){const t=M(e,0,0);n.add(t)}if(T(e,{x:0,y:2},{x:1,y:1})&&T(e,{x:0,y:2},{x:2,y:0})){const t=M(e,0,2);n.add(t)}if(n.delete(null),n.size===1){l.state.player=[...n.values()][0],l.state.action="winner";return}if(n.size===2){l.state.player=1,l.state.action="draw";return}},ke=(l,e,n)=>{if(l.state.player!==e.player||l.state.action!=="select1")throw new Error("invalid_step");if(n>=e.pieces.length||n<0)throw new Error("oob_selection_index");if(e.selectedPiece!==null)throw new Error("previous_selection_in_hand");if(e.unselectableIndexes.has(n))throw new Error("piece_already_used");e.selectedPiece={from:"hand",index:n},l.state.action="select2"},we=(l,e,n)=>{if(l.state.player!==e.player||l.state.action!=="select1")throw new Error("invalid_step");const{x:t,y:r}=n;if(t<0||r<0||t>2||r>2)throw new Error(`Invalid coordinates ${t},${r}`);if(e.selectedPiece!==null)throw new Error("previous_selection_in_hand");if(l.grid[r][t].length===0)throw new Error("empty_stack_selection");if(M(l.grid,t,r)!==e.player)throw new Error("opponent_owned_selection");e.selectedPiece={from:"board",position:{x:t,y:r}},l.state.action="select2"},ge=(l,e)=>{if(l.state.action!=="select2")throw new Error("invalid_step");const n=l.state.player===1?l.player1:l.player2;if(n.selectedPiece===null)throw new Error("no_selection_in_hand");const{x:t,y:r}=e,o=n.selectedPiece.from==="hand"?n.pieces[n.selectedPiece.index]:te(l.grid,n.selectedPiece.position.x,n.selectedPiece.position.y);if(o===null)throw new Error("selected_piece_is_null");if(ve(l.grid,t,r)>=Math.abs(o))throw new Error("destination_bigger_than_piece");return l.grid[e.y][e.x].push(o),n.selectedPiece.from==="hand"&&n.unselectableIndexes.add(n.selectedPiece.index),n.selectedPiece.from==="board"&&l.grid[n.selectedPiece.position.y][n.selectedPiece.position.x].pop(),n.selectedPiece=null,l.state.action="select1",l.state.player=l.state.player===1?2:1,le(l),0},q=(l,e,n)=>{n.from.from==="hand"?ke(l,e,n.from.index):we(l,e,n.from.position),ge(l,n.to)},Ie=(l,e)=>{const n=[];for(let t=0;t<3;t++)for(let r=0;r<3;r++){const o=ve(l.grid,r,t);(!o||o<Math.abs(e))&&n.push({x:r,y:t})}return n},K=(l,e)=>Ne(l,e).reduce((t,r)=>{const o=Ce(l,e,r),s=Ie(l,o);for(const c of s)t.push({from:r,to:c});return t},[]),Ne=(l,e)=>{const n=e.pieces.map((t,r)=>r).filter(t=>!e.unselectableIndexes.has(t)).map(t=>({index:t,from:"hand"}));for(let t=0;t<3;t++)for(let r=0;r<3;r++)M(l.grid,r,t)===e.player&&n.push({from:"board",position:{x:r,y:t}});return n},Ce=(l,e,n)=>{if(n.from==="board"){const t=l.grid[n.position.y][n.position.x];return t[t.length-1]}return e.pieces[n.index]},Pe=(l,e)=>{const n=K(l,e);if(n.length===0)throw new Error("no_move_possible");const t=Math.floor(Math.random()*n.length),r=n[t];q(l,e,r)},Ee=l=>{const e=l.player1.unselectableIndexes,n=l.player2.unselectableIndexes,t=JSON.parse(JSON.stringify(l));return t.player1.unselectableIndexes=new Set([...e.values()]),t.player2.unselectableIndexes=new Set([...n.values()]),t},Ae=(l,e)=>{const n=K(l,e);if(!n.length)throw new Error("no_move_possible");for(const t of n){const r=Ee(l),o=e.player===1?r.player1:r.player2;if(q(r,o,t),le(r),r.state.action==="winner"&&r.state.player===e.player){q(l,e,t);return}}Pe(l,e)},Ge=l=>{if(le(l),l.state.action==="winner")return l.state.player===1?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER;if(l.state.action==="draw")return Number.MAX_SAFE_INTEGER/2;const e=K(l,l.player1),n=K(l,l.player2);if(e.length===0&&n.length===0)return Number.MAX_SAFE_INTEGER/2;let t=0;const r=M(l.grid,1,1);return r===l.player1.player?t+=2:r===l.player2.player&&(t-=2),[M(l.grid,0,0),M(l.grid,2,0),M(l.grid,0,2),M(l.grid,2,2)].forEach(s=>{s!==null&&(t+=s!==null&&s===1?1:-1)}),t},oe=(l,e)=>{const n=K(l,e);if(!n.length)throw new Error("no_move_possible");const o=[...n.reduce((s,c)=>{const a=Ee(l),f=e.player===1?a.player1:a.player2;q(a,f,c);const h=Ge(a);return s.push({move:c,score:h}),s},[])].sort((s,c)=>e.player===1?c.score-s.score:s.score-c.score)[0].move;q(l,e,o)};function se(l,e,n){const t=l.slice();return t[4]=e[n],t}function ce(l){let e,n=l[4]+"",t,r;return{c(){e=P("div"),t=G(n),r=I(),this.h()},l(o){e=E(o,"DIV",{class:!0});var s=S(e);t=B(s,n),r=N(s),s.forEach(m),this.h()},h(){j(e,"class","piece svelte-1bwmfvs"),$(e,"player1",l[4]>0),$(e,"player2",l[4]<0),$(e,"small-circle",Math.abs(l[4])===1),$(e,"medium-circle",Math.abs(l[4])===2),$(e,"large-circle",Math.abs(l[4])===3)},m(o,s){w(o,e,s),y(e,t),y(e,r)},p(o,s){s&1&&n!==(n=o[4]+"")&&Z(t,n),s&1&&$(e,"player1",o[4]>0),s&1&&$(e,"player2",o[4]<0),s&1&&$(e,"small-circle",Math.abs(o[4])===1),s&1&&$(e,"medium-circle",Math.abs(o[4])===2),s&1&&$(e,"large-circle",Math.abs(o[4])===3)},d(o){o&&m(e)}}}function Be(l){let e,n,t,r=[...l[0]].reverse(),o=[];for(let s=0;s<r.length;s+=1)o[s]=ce(se(l,r,s));return{c(){e=P("button");for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){e=E(s,"BUTTON",{class:!0});var c=S(e);for(let a=0;a<o.length;a+=1)o[a].l(c);c.forEach(m),this.h()},h(){j(e,"class","cell svelte-1bwmfvs"),$(e,"selected",l[1]),$(e,"disabled",l[2])},m(s,c){w(s,e,c);for(let a=0;a<o.length;a+=1)o[a].m(e,null);n||(t=L(e,"click",l[3]),n=!0)},p(s,[c]){if(c&1){r=[...s[0]].reverse();let a;for(a=0;a<r.length;a+=1){const f=se(s,r,a);o[a]?o[a].p(f,c):(o[a]=ce(f),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}c&2&&$(e,"selected",s[1]),c&4&&$(e,"disabled",s[2])},i:D,o:D,d(s){s&&m(e),ee(o,s),n=!1,t()}}}function Te(l,e,n){let{pieces:t}=e,{selected:r=!1}=e,{disabled:o}=e;function s(c){$e.call(this,l,c)}return l.$$set=c=>{"pieces"in c&&n(0,t=c.pieces),"selected"in c&&n(1,r=c.selected),"disabled"in c&&n(2,o=c.disabled)},[t,r,o,s]}class Se extends Q{constructor(e){super(),Y(this,e,Te,Be,U,{pieces:0,selected:1,disabled:2})}}function ie(l,e,n){const t=l.slice();return t[4]=e[n],t[6]=n,t}function ae(l,e,n){const t=l.slice();return t[7]=e[n],t[9]=n,t}function fe(l){let e,n;function t(){return l[3](l[9],l[6])}return e=new Se({props:{pieces:l[7],disabled:!1,selected:l[2]({x:l[9],y:l[6]})}}),e.$on("click",t),{c(){O(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,o){H(e,r,o),n=!0},p(r,o){l=r;const s={};o&1&&(s.pieces=l[7]),e.$set(s)},i(r){n||(b(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){R(e,r)}}}function ue(l){let e,n,t=l[4],r=[];for(let s=0;s<t.length;s+=1)r[s]=fe(ae(l,t,s));const o=s=>k(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=z()},l(s){for(let c=0;c<r.length;c+=1)r[c].l(s);e=z()},m(s,c){for(let a=0;a<r.length;a+=1)r[a].m(s,c);w(s,e,c),n=!0},p(s,c){if(c&7){t=s[4];let a;for(a=0;a<t.length;a+=1){const f=ae(s,t,a);r[a]?(r[a].p(f,c),b(r[a],1)):(r[a]=fe(f),r[a].c(),b(r[a],1),r[a].m(e.parentNode,e))}for(F(),a=t.length;a<r.length;a+=1)o(a);W()}},i(s){if(!n){for(let c=0;c<t.length;c+=1)b(r[c]);n=!0}},o(s){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)k(r[c]);n=!1},d(s){ee(r,s),s&&m(e)}}}function Oe(l){let e,n,t=JSON.stringify(l[0].state)+"",r,o,s,c,a=l[0].grid,f=[];for(let i=0;i<a.length;i+=1)f[i]=ue(ie(l,a,i));const h=i=>k(f[i],1,1,()=>{f[i]=null});return{c(){e=P("div"),n=P("div"),r=G(t),o=I(),s=P("div");for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=E(i,"DIV",{class:!0});var p=S(e);n=E(p,"DIV",{});var u=S(n);r=B(u,t),u.forEach(m),o=N(p),s=E(p,"DIV",{class:!0});var _=S(s);for(let d=0;d<f.length;d+=1)f[d].l(_);_.forEach(m),p.forEach(m),this.h()},h(){j(s,"class","overlay svelte-1n6jeyv"),j(e,"class","board svelte-1n6jeyv")},m(i,p){w(i,e,p),y(e,n),y(n,r),y(e,o),y(e,s);for(let u=0;u<f.length;u+=1)f[u].m(s,null);c=!0},p(i,[p]){if((!c||p&1)&&t!==(t=JSON.stringify(i[0].state)+"")&&Z(r,t),p&7){a=i[0].grid;let u;for(u=0;u<a.length;u+=1){const _=ie(i,a,u);f[u]?(f[u].p(_,p),b(f[u],1)):(f[u]=ue(_),f[u].c(),b(f[u],1),f[u].m(s,null))}for(F(),u=a.length;u<f.length;u+=1)h(u);W()}},i(i){if(!c){for(let p=0;p<a.length;p+=1)b(f[p]);c=!0}},o(i){f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)k(f[p]);c=!1},d(i){i&&m(e),ee(f,i)}}}function Ve(l,e,n){let{game:t}=e,{onSelectCell:r}=e;const o=c=>{for(const a of[t.player1,t.player2]){const{selectedPiece:f}=a;if((f==null?void 0:f.from)==="board"&&f.position.x===c.x&&f.position.y===c.y)return!0}return!1},s=(c,a)=>r({x:c,y:a});return l.$$set=c=>{"game"in c&&n(0,t=c.game),"onSelectCell"in c&&n(1,r=c.onSelectCell)},[t,r,o,s]}class He extends Q{constructor(e){super(),Y(this,e,Ve,Oe,U,{game:0,onSelectCell:1})}}function de(l,e,n){const t=l.slice();return t[8]=e[n],t[10]=n,t}function _e(l){let e,n,t,r,o,s,c,a,f,h;return{c(){e=P("button"),n=G("Random"),t=I(),r=P("button"),o=G("Win or random"),s=I(),c=P("button"),a=G("Euristic")},l(i){e=E(i,"BUTTON",{});var p=S(e);n=B(p,"Random"),p.forEach(m),t=N(i),r=E(i,"BUTTON",{});var u=S(r);o=B(u,"Win or random"),u.forEach(m),s=N(i),c=E(i,"BUTTON",{});var _=S(c);a=B(_,"Euristic"),_.forEach(m)},m(i,p){w(i,e,p),y(e,n),w(i,t,p),w(i,r,p),y(r,o),w(i,s,p),w(i,c,p),y(c,a),f||(h=[L(e,"click",l[4]),L(r,"click",l[5]),L(c,"click",l[6])],f=!0)},p:D,d(i){i&&m(e),i&&m(t),i&&m(r),i&&m(s),i&&m(c),f=!1,Me(h)}}}function pe(l){var r;let e,n;function t(){return l[7](l[10])}return e=new Se({props:{disabled:l[1]||l[0].unselectableIndexes.has(l[10]),pieces:[l[8]],selected:((r=l[0].selectedPiece)==null?void 0:r.from)==="hand"&&l[0].selectedPiece.index===l[10]}}),e.$on("click",t),{c(){O(e.$$.fragment)},l(o){V(e.$$.fragment,o)},m(o,s){H(e,o,s),n=!0},p(o,s){var a;l=o;const c={};s&3&&(c.disabled=l[1]||l[0].unselectableIndexes.has(l[10])),s&1&&(c.pieces=[l[8]]),s&1&&(c.selected=((a=l[0].selectedPiece)==null?void 0:a.from)==="hand"&&l[0].selectedPiece.index===l[10]),e.$set(c)},i(o){n||(b(e.$$.fragment,o),n=!0)},o(o){k(e.$$.fragment,o),n=!1},d(o){R(e,o)}}}function Re(l){let e,n,t=l[0].player+"",r,o,s,c,a,f=!l[1]&&_e(l),h=l[0].pieces,i=[];for(let u=0;u<h.length;u+=1)i[u]=pe(de(l,h,u));const p=u=>k(i[u],1,1,()=>{i[u]=null});return{c(){e=P("span"),n=G("Player "),r=G(t),o=I(),f&&f.c(),s=I(),c=P("div");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=E(u,"SPAN",{});var _=S(e);n=B(_,"Player "),r=B(_,t),_.forEach(m),o=N(u),f&&f.l(u),s=N(u),c=E(u,"DIV",{class:!0});var d=S(c);for(let C=0;C<i.length;C+=1)i[C].l(d);d.forEach(m),this.h()},h(){j(c,"class","overlay svelte-rwgxl1")},m(u,_){w(u,e,_),y(e,n),y(e,r),w(u,o,_),f&&f.m(u,_),w(u,s,_),w(u,c,_);for(let d=0;d<i.length;d+=1)i[d].m(c,null);a=!0},p(u,[_]){if((!a||_&1)&&t!==(t=u[0].player+"")&&Z(r,t),u[1]?f&&(f.d(1),f=null):f?f.p(u,_):(f=_e(u),f.c(),f.m(s.parentNode,s)),_&7){h=u[0].pieces;let d;for(d=0;d<h.length;d+=1){const C=de(u,h,d);i[d]?(i[d].p(C,_),b(i[d],1)):(i[d]=pe(C),i[d].c(),b(i[d],1),i[d].m(c,null))}for(F(),d=h.length;d<i.length;d+=1)p(d);W()}},i(u){if(!a){for(let _=0;_<h.length;_+=1)b(i[_]);a=!0}},o(u){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)k(i[_]);a=!1},d(u){u&&m(e),u&&m(o),f&&f.d(u),u&&m(s),u&&m(c),ee(i,u)}}}function Ue(l,e,n){let{hand:t}=e,{disabled:r}=e,{onSelectPiece:o}=e,{onSelectAuto:s}=e;const c=()=>s(t,"random"),a=()=>s(t,"win_or_random"),f=()=>s(t,"euristic"),h=i=>o(t,i);return l.$$set=i=>{"hand"in i&&n(0,t=i.hand),"disabled"in i&&n(1,r=i.disabled),"onSelectPiece"in i&&n(2,o=i.onSelectPiece),"onSelectAuto"in i&&n(3,s=i.onSelectAuto)},[t,r,o,s,c,a,f,h]}class x extends Q{constructor(e){super(),Y(this,e,Ue,Re,U,{hand:0,disabled:1,onSelectPiece:2,onSelectAuto:3})}}function he(l){let e,n;return e=new He({props:{onSelectCell:l[2],game:l[0]}}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){H(e,t,r),n=!0},p(t,r){const o={};r&1&&(o.game=t[0]),e.$set(o)},i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function me(l){let e,n,t,r,o,s,c=l[0].state.player+"",a,f,h,i,p,u;return{c(){e=P("div"),n=P("span"),t=G("Game over!"),r=I(),o=P("span"),s=G("Winner: Player "),a=G(c),f=I(),h=P("button"),i=G("Play again")},l(_){e=E(_,"DIV",{});var d=S(e);n=E(d,"SPAN",{});var C=S(n);t=B(C,"Game over!"),C.forEach(m),r=N(d),o=E(d,"SPAN",{});var A=S(o);s=B(A,"Winner: Player "),a=B(A,c),A.forEach(m),f=N(d),h=E(d,"BUTTON",{});var X=S(h);i=B(X,"Play again"),X.forEach(m),d.forEach(m)},m(_,d){w(_,e,d),y(e,n),y(n,t),y(e,r),y(e,o),y(o,s),y(o,a),y(e,f),y(e,h),y(h,i),p||(u=L(h,"click",l[6]),p=!0)},p(_,d){d&1&&c!==(c=_[0].state.player+"")&&Z(a,c)},d(_){_&&m(e),p=!1,u()}}}function De(l){let e=l[0],n,t,r=ye(l);return{c(){r.c(),n=z()},l(o){r.l(o),n=z()},m(o,s){r.m(o,s),w(o,n,s),t=!0},p(o,s){s&1&&U(e,e=o[0])?(F(),k(r,1,1,D),W(),r=ye(o),r.c(),b(r,1),r.m(n.parentNode,n)):r.p(o,s)},i(o){t||(b(r),t=!0)},o(o){k(r),t=!1},d(o){o&&m(n),r.d(o)}}}function Fe(l){let e=l[0],n,t,r=be(l);return{c(){r.c(),n=z()},l(o){r.l(o),n=z()},m(o,s){r.m(o,s),w(o,n,s),t=!0},p(o,s){s&1&&U(e,e=o[0])?(F(),k(r,1,1,D),W(),r=be(o),r.c(),b(r,1),r.m(n.parentNode,n)):r.p(o,s)},i(o){t||(b(r),t=!0)},o(o){k(r),t=!1},d(o){o&&m(n),r.d(o)}}}function ye(l){let e,n,t,r;return e=new x({props:{onSelectAuto:l[4],onSelectPiece:l[3],hand:l[0].player2,disabled:!1}}),t=new x({props:{onSelectAuto:l[4],onSelectPiece:l[3],hand:l[0].player1,disabled:!0}}),{c(){O(e.$$.fragment),n=I(),O(t.$$.fragment)},l(o){V(e.$$.fragment,o),n=N(o),V(t.$$.fragment,o)},m(o,s){H(e,o,s),w(o,n,s),H(t,o,s),r=!0},p(o,s){const c={};s&1&&(c.hand=o[0].player2),e.$set(c);const a={};s&1&&(a.hand=o[0].player1),t.$set(a)},i(o){r||(b(e.$$.fragment,o),b(t.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),k(t.$$.fragment,o),r=!1},d(o){R(e,o),o&&m(n),R(t,o)}}}function be(l){let e,n,t,r;return e=new x({props:{onSelectAuto:l[4],onSelectPiece:l[3],hand:l[0].player1,disabled:!1}}),t=new x({props:{onSelectAuto:l[4],onSelectPiece:l[3],hand:l[0].player2,disabled:!0}}),{c(){O(e.$$.fragment),n=I(),O(t.$$.fragment)},l(o){V(e.$$.fragment,o),n=N(o),V(t.$$.fragment,o)},m(o,s){H(e,o,s),w(o,n,s),H(t,o,s),r=!0},p(o,s){const c={};s&1&&(c.hand=o[0].player1),e.$set(c);const a={};s&1&&(a.hand=o[0].player2),t.$set(a)},i(o){r||(b(e.$$.fragment,o),b(t.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),k(t.$$.fragment,o),r=!1},d(o){R(e,o),o&&m(n),R(t,o)}}}function We(l){let e,n,t=l[1]?"Human player 2":"Computer player 2",r,o,s=l[0],c,a,f,h,i,p,u,_=he(l),d=l[0].state.action==="winner"&&me(l);const C=[Fe,De],A=[];function X(v,g){return v[0].state.player===1?0:1}return f=X(l),h=A[f]=C[f](l),{c(){e=P("div"),n=P("button"),r=G(t),o=I(),_.c(),c=I(),d&&d.c(),a=I(),h.c(),this.h()},l(v){e=E(v,"DIV",{class:!0});var g=S(e);n=E(g,"BUTTON",{});var J=S(n);r=B(J,t),J.forEach(m),o=N(g),_.l(g),c=N(g),d&&d.l(g),a=N(g),h.l(g),g.forEach(m),this.h()},h(){j(e,"class","d-flex justify-content-center")},m(v,g){w(v,e,g),y(e,n),y(n,r),y(e,o),_.m(e,null),y(e,c),d&&d.m(e,null),y(e,a),A[f].m(e,null),i=!0,p||(u=L(n,"click",l[5]),p=!0)},p(v,[g]){(!i||g&2)&&t!==(t=v[1]?"Human player 2":"Computer player 2")&&Z(r,t),g&1&&U(s,s=v[0])?(F(),k(_,1,1,D),W(),_=he(v),_.c(),b(_,1),_.m(e,c)):_.p(v,g),v[0].state.action==="winner"?d?d.p(v,g):(d=me(v),d.c(),d.m(e,a)):d&&(d.d(1),d=null);let J=f;f=X(v),f===J?A[f].p(v,g):(F(),k(A[J],1,1,()=>{A[J]=null}),W(),h=A[f],h?h.p(v,g):(h=A[f]=C[f](v),h.c()),b(h,1),h.m(e,null))},i(v){i||(b(_),b(h),i=!0)},o(v){k(_),k(h),i=!1},d(v){v&&m(e),_.d(v),d&&d.d(),A[f].d(),p=!1,u()}}}function Je(l,e,n){let t=re(),r=!1;const o=()=>{["winner","select2"].includes(t.state.action)||t.state.player!==t.player2.player||!r||oe(t,t.player2)};return[t,r,({x:i,y:p})=>{try{if(t.state.action==="select2"){ge(t,{x:i,y:p})===0&&o(),n(0,t);return}const u=t.state.player===1?t.player1:t.player2;we(t,u,{x:i,y:p}),n(0,t),n(0,t)}catch(u){console.error("Could not select cell"),console.error(u),console.error("Game should be able to keep working")}},(i,p)=>{try{ke(t,i,p)}catch(u){console.error("Could not select piece"),console.error(u),console.error("Game should be able to keep working")}n(0,t)},(i,p)=>{p==="random"&&Pe(t,i),p==="win_or_random"&&Ae(t,i),p==="euristic"&&oe(t,i),o(),n(0,t)},()=>n(1,r=!r),()=>n(0,t=re())]}class Le extends Q{constructor(e){super(),Y(this,e,Je,We,U,{})}}function je(l){let e,n;return e=new Le({}),{c(){O(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,r){H(e,t,r),n=!0},p:D,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}class Xe extends Q{constructor(e){super(),Y(this,e,null,je,U,{})}}export{Xe as default};
