import{S as nt,i as at,s as rt,a as ot,e as C,c as it,b as z,g as de,t as F,d as pe,f as B,h as M,j as st,o as Oe,k as lt,l as ct,m as ft,n as ve,p as V,q as ut,r as dt,u as pt,v as W,w as Y,x as je,y as X,z as Z,A as ce}from"./chunks/index-1d785069.js";import{S as et,I as q,g as ze,f as He,a as Ee,b as fe,s as J,i as We,c as ue,P as Ye,d as ht,e as mt,h as _t}from"./chunks/singletons-da70a5cb.js";import{_ as K}from"./chunks/preload-helper-41c905a7.js";function gt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function wt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(a,e){const n=new URL(a);for(const s of bt){let i=n[s];Object.defineProperty(n,s,{get(){return e(),i},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(a){return a.replace(/\/$/,"")+kt}function Rt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ne(a)),he(a,e));const te=new Map;function Lt(a,e){const n=Ne(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:i,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&te.set(n,{body:i,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(i,m))}return he(a,e)}function Ot(a,e,n){if(te.size>0){const s=Ne(a,n),i=te.get(s);if(i){if(performance.now()<i.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(i.body,i.init);te.delete(s)}}return he(e,n)}function Ne(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Rt(e.body)}"]`),s}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${jt(a).map(s=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(i)return e.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const y=It.exec(h);if(!y)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,S,$,T]=y;return e.push({name:$,matcher:T,optional:!!v,rest:!!S,chained:S?_===1&&t[0]==="":!1}),S?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function jt(a){return a.slice(1).split("/").filter(Pt)}function Nt(a,e,n){const s={},i=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=i[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=i.indexOf(void 0,t);if(_===-1){const y=e[t+1];if(y!=null&&y.rest&&y.chained)m=h;else return}for(;_>=t;)i[_]=i[_-1],_-=1;continue}return}s[f.name]=h}}if(!m)return s}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(a,e,n,s){const i=new Set(e);return Object.entries(n).map(([f,[h,_,y]])=>{const{pattern:v,params:S}=At(f),$={id:f,exec:T=>{const P=v.exec(T);if(P)return Nt(P,S,s)},errors:[1,...y||[]].map(T=>a[T]),layouts:[0,..._||[]].map(t),leaf:m(h)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function m(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[i.has(f),a[f]]}}function $t(a){let e,n,s;var i=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return i&&(e=W(i,m(a))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),i!==(i=t[0][0])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}i?(e=W(i,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&M(n),e&&Z(e,t)}}}function Tt(a){let e,n,s;var i=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return i&&(e=W(i,m(a))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),i!==(i=t[0][0])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}i?(e=W(i,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&M(n),e&&Z(e,t)}}}function Dt(a){let e,n,s;var i=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return i&&(e=W(i,m(a))),{c(){e&&Y(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&X(e,t,f),z(t,n,f),s=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),i!==(i=t[0][1])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{Z(_,1)}),pe()}i?(e=W(i,m(t)),Y(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else i&&e.$set(h)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&M(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=ft(e);n&&n.l(i),i.forEach(M),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,i){z(s,e,i),n&&n.m(e,null)},p(s,i){s[5]?n?n.p(s,i):(n=Ze(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&M(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=ut(a[6])},l(n){e=dt(n,a[6])},m(n,s){z(n,e,s)},p(n,s){s&64&&pt(e,n[6])},d(n){n&&M(e)}}}function Vt(a){let e,n,s,i,m;const t=[Tt,$t],f=[];function h(y,v){return y[0][1]?0:1}e=h(a),n=f[e]=t[e](a);let _=a[4]&&Xe(a);return{c(){n.c(),s=ot(),_&&_.c(),i=C()},l(y){n.l(y),s=it(y),_&&_.l(y),i=C()},m(y,v){f[e].m(y,v),z(y,s,v),_&&_.m(y,v),z(y,i,v),m=!0},p(y,[v]){let S=e;e=h(y),e===S?f[e].p(y,v):(de(),F(f[S],1,1,()=>{f[S]=null}),pe(),n=f[e],n?n.p(y,v):(n=f[e]=t[e](y),n.c()),B(n,1),n.m(s.parentNode,s)),y[4]?_?_.p(y,v):(_=Xe(y),_.c(),_.m(i.parentNode,i)):_&&(_.d(1),_=null)},i(y){m||(B(n),m=!0)},o(y){F(n),m=!1},d(y){f[e].d(y),y&&M(s),_&&_.d(y),y&&M(i)}}}function qt(a,e,n){let{stores:s}=e,{page:i}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;st(s.page.notify);let _=!1,y=!1,v=null;return Oe(()=>{const S=s.page.subscribe(()=>{_&&(n(5,y=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),S}),a.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,i=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,h=S.data_1)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(i)},[m,t,f,h,_,y,v,s,i]}class Ct extends nt{constructor(e){super(),at(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>K(()=>import("./chunks/0-083bb9c8.js"),["./chunks/0-083bb9c8.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-9a0568c9.js","./chunks/index-1d785069.js","./assets/_layout-463a3aa1.css"],import.meta.url),()=>K(()=>import("./chunks/1-65ff36df.js"),["./chunks/1-65ff36df.js","./components/error.svelte-7ac63489.js","./chunks/index-1d785069.js","./chunks/singletons-da70a5cb.js","./chunks/index-c5a64178.js"],import.meta.url),()=>K(()=>import("./chunks/2-5df1fcd7.js"),["./chunks/2-5df1fcd7.js","./components/pages/_page.svelte-5e914887.js","./chunks/index-1d785069.js"],import.meta.url),()=>K(()=>import("./chunks/3-264d5929.js"),["./chunks/3-264d5929.js","./components/pages/runner/_page.svelte-e7e29751.js","./chunks/index-1d785069.js","./chunks/service-a0b0a97b.js","./assets/_page-a61f49d4.css"],import.meta.url),()=>K(()=>import("./chunks/4-4b0f5c29.js"),["./chunks/4-4b0f5c29.js","./components/pages/tictaccup/_page.svelte-8b4228c3.js","./chunks/index-1d785069.js","./chunks/service-a0b0a97b.js","./chunks/index-c5a64178.js","./assets/_page-6eb394b3.css"],import.meta.url),()=>K(()=>import("./chunks/5-a513bcc5.js"),["./chunks/5-a513bcc5.js","./components/pages/tictactoe/_page.svelte-b63e98a1.js","./chunks/index-1d785069.js","./chunks/P5-76a6b36f.js","./chunks/preload-helper-41c905a7.js"],import.meta.url),()=>K(()=>import("./chunks/6-42aaf0bd.js"),["./chunks/6-42aaf0bd.js","./components/pages/tictactoe2/_page.svelte-aec9fb1a.js","./chunks/index-1d785069.js","./chunks/index-c5a64178.js","./chunks/P5-76a6b36f.js","./chunks/preload-helper-41c905a7.js","./assets/_page-6417fb07.css"],import.meta.url)],Bt=[],Mt={"/":[2],"/runner":[3],"/tictaccup":[4],"/tictactoe2":[6],"/tictactoe":[5]},Gt={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(e,n){this.status=e,this.location=n}}async function Jt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,i])=>[s,await i])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Ht=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(a){if(typeof a=="number")return s(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function s(i,m=!1){if(i===Kt)return;if(i===Ht)return NaN;if(i===Wt)return 1/0;if(i===Yt)return-1/0;if(i===Xt)return-0;if(m)throw new Error("Invalid input");if(i in n)return n[i];const t=e[i];if(!t||typeof t!="object")n[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[i]=new Date(t[1]);break;case"Set":const h=new Set;n[i]=h;for(let v=1;v<t.length;v+=1)h.add(s(t[v]));break;case"Map":const _=new Map;n[i]=_;for(let v=1;v<t.length;v+=2)_.set(s(t[v]),s(t[v+1]));break;case"RegExp":n[i]=new RegExp(t[1],t[2]);break;case"Object":n[i]=Object(t[1]);break;case"BigInt":n[i]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[i]=y;for(let v=1;v<t.length;v+=2)y[t[v]]=s(t[v+1]);break}else{const f=new Array(t.length);n[i]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==zt&&(f[h]=s(_))}}else{const f={};n[i]=f;for(const h in t){const _=t[h];f[h]=s(_)}}return n[i]}return s(0)}const Se=Ut(me,Bt,Mt,Ft),Ae=me[0],Pe=me[1];Ae();Pe();let ne={};try{ne=JSON.parse(sessionStorage[et])}catch{}function Re(a){ne[a]=ue()}function Qt({target:a,base:e}){var Ge;const n=document.documentElement,s=[];let i=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,y=!1,v=!1,S=!1,$=!1,T,P=(Ge=history.state)==null?void 0:Ge[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const _e=ne[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,Ue,ae;async function $e(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),o=ie(r,!0);i=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:u={},invalidateAll:d=!1},p,b){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:l,redirect_chain:p,details:{state:u,replaceState:c},nav_token:b,accepted:()=>{d&&($=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=ie(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return i={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(i=null),c))},i.promise}async function re(...r){const c=Se.filter(l=>r.some(u=>l.exec(u))).map(l=>Promise.all([...l.layouts,l.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(c)}async function De(r,o,c,l,u={},d){var b,w;Ue=u;let p=r&&await Ce(r);if(p||(p=await Me(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ue!==u)return!1;if(p.type==="redirect")if(c.length>10||c.includes(o.pathname))p=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(p.location,o).href,{},[...c,o.pathname],u),!1;else((w=(b=p.props)==null?void 0:b.page)==null?void 0:w.status)>=400&&await J.updated.check()&&await le(o);if(s.length=0,$=!1,y=!0,l&&l.details){const{details:g}=l,R=g.replaceState?0:1;g.state[q]=P+=R,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(i=null,h?(t=p.state,p.props.page&&(p.props.page.url=o),T.$set(p.props)):Ve(p),l){const{scroll:g,keepfocus:R}=l;if(R||Le(),await ce(),_){const L=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();_=!0,p.props.page&&(G=p.props.page),d&&d(),y=!1}function Ve(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=r.props.page,T=new Ct({target:a,props:{...r.props,stores:J},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(u=>u(c)),h=!0}async function Q({url:r,params:o,branch:c,status:l,error:u,route:d,form:p}){const b=c.filter(Boolean);let w="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(w=O.slash);r.pathname=gt(r.pathname,w),r.search=r.search;const g={type:"loaded",state:{url:r,params:o,branch:c,error:u,route:d},props:{components:b.map(O=>O.node.component)}};p!==void 0&&(g.props.form=p);let R={},L=!G;for(let O=0;O<b.length;O+=1){const E=b[O];R={...R,...E.data},(L||!t.branch.some(N=>N===E))&&(g.props[`data_${O}`]=R,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(G.data).length!==Object.keys(R).length),(!t.url||r.href!==t.url.href||t.error!==u||p!==void 0||L)&&(g.props.page={error:u,params:o,route:d,status:l,url:new URL(r),form:p??null,data:L?R:G.data}),g}async function ye({loader:r,parent:o,url:c,params:l,route:u,server_data_node:d}){var g,R,L;let p=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},w=await r();if((g=w.universal)!=null&&g.load){let D=function(...E){for(const N of E){const{href:U}=new URL(N,c);b.dependencies.add(U)}};const O={route:{get id(){return b.route=!0,u.id}},params:new Proxy(l,{get:(E,N)=>(b.params.add(N),E[N])}),data:(d==null?void 0:d.data)??null,url:vt(c,()=>{b.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const k=new URL(U,c).href;return D(k),h?Ot(U,k,N):Lt(U,N)},setHeaders:()=>{},depends:D,parent(){return b.parent=!0,o()}};p=await w.universal.load.call(null,O)??null,p=p?await Jt(p):null}return{node:w,loader:r,server:d,universal:(R=w.universal)!=null&&R.load?{type:"data",data:p,uses:b}:null,data:p??(d==null?void 0:d.data)??null,slash:((L=w.universal)==null?void 0:L.trailingSlash)??(d==null?void 0:d.slash)}}function qe(r,o,c,l,u){if($)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const d of l.params)if(u[d]!==t.params[d])return!0;for(const d of l.dependencies)if(s.some(p=>p(new URL(d))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:l,route:u}){if((i==null?void 0:i.id)===r)return i.promise;const{errors:d,layouts:p,leaf:b}=u,w=[...p,b];d.forEach(k=>k==null?void 0:k().catch(()=>{})),w.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let g=null;const R=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,D=w.reduce((k,A,j)=>{var x;const I=t.branch[j],H=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(k.some(Boolean),L,R,(x=I.server)==null?void 0:x.uses,l));return k.push(H),k},[]);if(D.some(Boolean)){try{g=await xe(c,D)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:u.id}}),url:c,route:u})}if(g.type==="redirect")return g}const O=g==null?void 0:g.nodes;let E=!1;const N=w.map(async(k,A)=>{var x;if(!k)return;const j=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!qe(E,L,R,(x=j.universal)==null?void 0:x.uses,l))return j;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:k[1],url:c,params:l,route:u,parent:async()=>{var Ke;const Je={};for(let be=0;be<A;be+=1)Object.assign(Je,(Ke=await N[be])==null?void 0:Ke.data);return Je},server_data_node:we(I===void 0&&k[0]?{type:"skip"}:I??null,j==null?void 0:j.server)})});for(const k of N)k.catch(()=>{});const U=[];for(let k=0;k<w.length;k+=1)if(w[k])try{U.push(await N[k])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let j=500,I;O!=null&&O.includes(A)?(j=A.status??j,I=A.error):A instanceof Ie?(j=A.status,I=A.body):I=await ee(A,{params:l,url:c,route:{id:u.id}});const H=await Fe(k,U,d);return H?await Q({url:c,params:l,branch:U.slice(0,H.idx).concat(H.node),status:j,error:I,route:u}):await Me(c,{id:u.id},I,j)}else U.push(void 0);return await Q({url:c,params:l,branch:U,status:200,error:null,route:u,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:o,url:c,route:l}){const u={},d=await Ae();let p=null;if(d.server)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;p=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const b=await ye({loader:Ae,url:c,params:u,route:l,parent:()=>Promise.resolve({}),server_data_node:we(p)}),w={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:u,branch:[b,w],status:r,error:o,route:null})}function ie(r,o){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Se){const u=l.exec(c);if(u)return{id:r.pathname+r.search,invalidating:o,route:l,params:wt(u),url:r}}}function Be({url:r,type:o,intent:c,delta:l}){var b,w;let u=!1;const d={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((w=c==null?void 0:c.route)==null?void 0:w.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(d.delta=l);const p={...d,cancel:()=>{u=!0}};return v||m.before_navigate.forEach(g=>g(p)),u?null:d}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:u,type:d,delta:p,nav_token:b,accepted:w,blocked:g}){const R=ie(r,!1),L=Be({url:r,type:d,delta:p,intent:R});if(!L){g();return}Re(P),w(),v=!0,h&&J.navigating.set(L),await De(R,r,l,{scroll:o,keepfocus:c,details:u},b,()=>{v=!1,m.after_navigate.forEach(D=>D(L)),J.navigating.set(null)})}async function Me(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:c,url:r,route:o}):await le(r)}function le(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",d=>{const p=d.target;clearTimeout(r),r=setTimeout(()=>{l(p,2)},20)});function o(d){l(d.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(d=>{for(const p of d)p.isIntersecting&&(re(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function l(d,p){const b=He(d,n);if(!b)return;const{url:w,external:g}=Ee(b,e);if(g)return;const R=fe(b);R.reload||(p<=R.preload_data?Te(w):p<=R.preload_code&&re(w.pathname))}function u(){c.disconnect();for(const d of n.querySelectorAll("a")){const{url:p,external:b}=Ee(d,e);if(b)continue;const w=fe(d);w.reload||(w.preload_code===Ye.viewport&&c.observe(d),w.preload_code===Ye.eager&&re(p.pathname))}}m.after_navigate.push(u),u()}return{after_navigate:r=>{Oe(()=>(m.after_navigate.push(r),()=>{const o=m.after_navigate.indexOf(r);m.after_navigate.splice(o,1)}))},before_navigate:r=>{Oe(()=>(m.before_navigate.push(r),()=>{const o=m.before_navigate.indexOf(r);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(y||!h)&&(_=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")s.push(r);else{const{href:o}=new URL(r,location.href);s.push(c=>c.href===o)}return $e()},invalidateAll:()=>($=!0,$e()),preload_data:async r=>{const o=new URL(r,ze(document));await Te(o)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const u=await Fe(t.branch.length,c,l.errors);if(u){const d=await Q({url:o,params:t.params,branch:c.slice(0,u.idx).concat(u.node),status:r.status??500,error:r.error,route:l});t=d.state,T.$set(d.props),ce().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...G,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&ce().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!v){const u={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(d=>d(u))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(P);try{sessionStorage[et]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:l,external:u,has:d}=Ee(c,e),p=fe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||d.download)return;if(u||p.reload){Be({url:l,type:"link"})||o.preventDefault(),v=!0;return}const[w,g]=l.href.split("#");if(g!==void 0&&w===location.href.split("#")[0]){S=!0,Re(P),t.url=l,J.page.set({...G,url:l}),J.page.notify();return}se({url:l,scroll:p.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var w;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const d=new URL(((w=o.submitter)==null?void 0:w.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(d,e))return;const{noscroll:p,reload:b}=fe(o.target);b||(o.preventDefault(),o.stopPropagation(),d.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:d,scroll:p?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const l=o.state[q]-P;se({url:new URL(location.href),scroll:ne[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&J.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:u,data:d,form:p})=>{f=!0;const b=new URL(location.href);({params:l={},route:u={id:null}}=ie(b,!1)||{});let w;try{const g=c.map(async(R,L)=>{const D=d[L];return ye({loader:me[R],url:b,params:l,route:u,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await g[E]).data);return O},server_data_node:we(D)})});w=await Q({url:b,params:l,branch:await Promise.all(g),status:r,error:o,form:p,route:Se.find(({id:R})=>R===u.id)??null})}catch(g){if(g instanceof Qe){await le(new URL(g.location,location.href));return}w=await oe({status:g instanceof Ie?g.status:500,error:await ee(g,{url:b,params:l,route:u}),url:b,route:u})}Ve(w)}}}async function xe(a,e){var m;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await he(n.href),i=await s.json();if(!s.ok)throw new Error(i);return(m=i.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),i}function ee(a,e){return a instanceof Ie?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:a,hydrate:e,paths:n,target:s,version:i}){ht(n),_t(i);const m=Qt({target:s,base:n.base});mt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{nn as start};
