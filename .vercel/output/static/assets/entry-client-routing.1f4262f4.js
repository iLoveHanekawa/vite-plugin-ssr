import{i as L,_ as E,s as qe,p as V,a as l,b as C,c as Q,g as D,d as j,e as me,f as I,h as u,j as v,k as $,l as F,m as Xe,n as d,o as O,q as p,r as Qe,t as k,u as _e,v as Ze,w as et,x as ye,y as tt,z as M,A as nt,B as rt,C as ot,D as be,E as Se,F as st,G as it,H as at,I as ve,J as lt,K as Z,L as z,M as ut,N as ct}from"./chunks/chunk-dabbe040.js";function R(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function se(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function G(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function Pe(e){return typeof e=="object"&&e!==null&&"then"in e&&L(e.then)}const ft=["Page"],dt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"})),gt=["Page"],pt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"})),ht=["Page"],mt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"})),_t=["Page"],yt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"})),bt=["Page"],St=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"})),vt=["prerender","onBeforeRender"],Pt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"})),Rt=["onBeforeRender","doNotPrerender"],wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"})),Ot=["render","passToClient"],Et=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Ct="/users/@id",xt=Object.freeze(Object.defineProperty({__proto__:null,default:Ct},Symbol.toStringTag,{value:"Module"})),Tt=["render"],Ft=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),ee={},Re={},At={},U={},It=[],kt={},jt=!0,Nt=[],$t={onBeforeRoute:null},Ht=null,Bt=Object.assign({"/pages/about/index.page.tsx":()=>E(()=>import("./pages/about/index.page.4d2073f2.js"),["assets/pages/about/index.page.4d2073f2.js","assets/chunks/chunk-0e184ced.js"]),"/pages/index/index.page.tsx":()=>E(()=>import("./pages/index/index.page.066fbc13.js"),["assets/pages/index/index.page.066fbc13.js","assets/chunks/chunk-0e184ced.js"]),"/pages/user/index.page.tsx":()=>E(()=>import("./pages/user/index.page.ab8f507d.js"),["assets/pages/user/index.page.ab8f507d.js","assets/chunks/chunk-0e184ced.js"]),"/pages/users/index.page.tsx":()=>E(()=>import("./pages/users/index.page.520a4a51.js"),["assets/pages/users/index.page.520a4a51.js","assets/chunks/chunk-0e184ced.js"]),"/renderer/_error.page.tsx":()=>E(()=>import("./renderer/error.page.a77f0542.js"),["assets/renderer/error.page.a77f0542.js","assets/chunks/chunk-0e184ced.js"])}),Wt={...Bt};ee[".page"]=Wt;const Lt=Object.assign({"/pages/about/index.page.tsx":dt,"/pages/index/index.page.tsx":pt,"/pages/user/index.page.tsx":mt,"/pages/users/index.page.tsx":yt,"/renderer/_error.page.tsx":St}),Vt={...Lt};U[".page"]=Vt;const Dt=Object.assign({"/pages/user/index.page.server.ts":Pt,"/pages/users/index.page.server.ts":wt,"/renderer/_default.page.server.tsx":Et}),Ut={...Dt};U[".page.server"]=Ut;const zt=Object.assign({"/pages/user/index.page.route.ts":xt}),Gt={...zt};Re[".page.route"]=Gt;const Kt=Object.assign({"/renderer/_default.page.client.tsx":()=>E(()=>import("./renderer/default.page.client.25e85b1a.js"),["assets/renderer/default.page.client.25e85b1a.js","assets/chunks/chunk-0e184ced.js","assets/static/default.page.client.4a06ee7b.css"])}),Yt={...Kt};ee[".page.client"]=Yt;const Mt=Object.assign({"/renderer/_default.page.client.tsx":Ft}),Jt={...Mt};U[".page.client"]=Jt;const qt=Object.freeze(Object.defineProperty({__proto__:null,invalidator:Ht,isGeneratedFile:jt,neverLoaded:kt,pageConfigGlobal:$t,pageConfigs:Nt,pageFilesEager:Re,pageFilesExportNamesEager:U,pageFilesExportNamesLazy:At,pageFilesLazy:ee,pageFilesList:It},Symbol.toStringTag,{value:"Module"}));qe(qt);function Xt(e){return V(e,"/").pathname}function we(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function Qt(){var e,t,n,s;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),o=!!(!((s=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||s===void 0)&&s.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||o||i}function Zt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function B(e){window.location.href=e}function en(e){return new Promise(t=>setTimeout(t,e))}function tn(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(Q());C();const ie=D("navigationState.ts",{}),nn=j(),Oe={markNavigationChange(){ie.navigationChanged=!0},get noNavigationChangeYet(){return!ie.navigationChanged&&this.isFirstUrl(j())},isFirstUrl(e){return e===nn}};async function rn(e,t){const s=me(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(s.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function te(e,{hook:t,errorMessagePrefix:n,canBePromise:s}){if(!n){l(t);const{hookName:r,hookSrc:o}=t;l(!r.endsWith(")")),n=`The \`pageContext\` provided by the ${r}() hook defined by ${o}`}if(s&&!I(e)){u(L(e)||Pe(e),`${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);return}u(I(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{showStackTrace:!1,onlyOnce:!0})}function on(e,t,n,s,r=!1){l(!t.endsWith(")"));const o=`The ${t}() hook defined by ${s}`;u(e==null||R(e),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(sn(e,n,o),"pageContext"in e&&te(e.pageContext,{hook:{hookName:t,hookSrc:s},canBePromise:r}))}function sn(e,t,n){const s=[],r=Object.keys(e);for(const o of r)t.includes(o)||s.push(o);u(s.length===0,[n,"returned an object with unknown keys",se(s)+".","Only following keys are allowed:",se(t)+"."].join(" "))}function an(e,t){if(!R(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function ln(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}Q()&&C();function un(e,t){const s=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort($(({filesystemRoot:o})=>o.length))[0];let r;if(s){const{filesystemRoot:o,urlRoot:i}=s,a={pageId:e,filesystemRoot:o,urlRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=F(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+F(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=F(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function cn(e,t,n,s){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:o}=dn(e,t,n);return{pageRoutes:fn(o,e,t,s),onBeforeRouteHook:r}}function fn(e,t,n,s){const r=[];let o=[...s];return n.length>0&&n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId;o=hn(o,c);let f=null;{const m=a.configElements.route;if(m){l("configValue"in m);const h=m.configValue,_=m.configDefinedAt;if(l(_),typeof h=="string")f={pageId:c,comesFromV1PageConfig:!0,routeString:h,routeDefinedAt:_,routeType:"STRING"};else{l(L(h));let y=!1;const g=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(g){l(!("codeFilePath"in g));const w=g.configValue;l(typeof w=="boolean"),y=w}f={pageId:c,comesFromV1PageConfig:!0,routeFunction:h,routeDefinedAt:_,routeType:"FUNCTION",allowAsync:y}}}}if(!f){const{routeFilesystem:m,routeFilesystemDefinedBy:h}=a;l(m),l(m.startsWith("/")),l(h),f={pageId:c,routeFilesystemDefinedBy:h,comesFromV1PageConfig:!0,routeString:m,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(f),r.push(f)}),n.length===0&&o.filter(a=>!Xe(a)).forEach(a=>{const c=gn(a,t);if(c){const{filePath:f,fileExports:m}=c;if(l(m),u("default"in m,`${f} should have a default export.`),d(m,"default","string")){const h=m.default;u(h.startsWith("/"),`A Route String should start with a leading \`/\` but \`${f}\` has \`export default '${h}'\`. Make sure to \`export default '/${h}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:h,routeDefinedAt:f,routeType:"STRING"});return}if(d(m,"default","function")){const h=m.default;let _=!1;const y="iKnowThePerformanceRisksOfAsyncRouteFunctions";y in m&&(u(d(m,y,"boolean"),`The export \`${y}\` of ${f} should be a boolean.`),_=m[y]),r.push({pageId:a,comesFromV1PageConfig:!1,routeFunction:h,routeDefinedAt:f,allowAsync:_,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}else{const f=un(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:f,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}}),r}function dn(e,t,n){if(t.length>0){if(n.onBeforeRoute){const o=n.onBeforeRoute.configValue;if(o){const i=n.onBeforeRoute.configValueFilePath;return l(i),u(L(o),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookSrc:i,onBeforeRoute:o},filesystemRoots:[]}}}return{onBeforeRouteHook:null,filesystemRoots:[]}}let s=null;const r=[];return e.filter(o=>o.fileType===".page.route"&&o.isDefaultPageFile).forEach(({filePath:o,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(d(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${o} should be a function.`);const{onBeforeRoute:a}=i;s={hookSrc:`${o} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${o} should be a string.`),u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${o} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:pn(o),urlRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:s,filesystemRoots:r}}function gn(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function pn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=F(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function hn(e,t){const{length:n}=e;return e=e.filter(s=>s!==t),l(e.length===n-1),e}function Ee(e){l(e.urlOriginal),"urlPathname"in e?l(G(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:xe,enumerable:!0,configurable:!0}),"url"in e?l(G(e,"url")):Object.defineProperty(e,"url",{get:mn,enumerable:!1,configurable:!0}),"urlParsed"in e?l(G(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:_n,enumerable:!0,configurable:!0})}function Ce(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),s=e._baseServer;return l(s.startsWith("/")),V(n,s)}function xe(){const{pathname:e}=Ce(this),t=e;return l(t.startsWith("/")),t}function mn(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),xe.call(this)}function _n(){const e=Ce(this),{origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c}=e,f={origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),c},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return ae(f,"hashString"),ae(f,"searchString"),f}function ae(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function yn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(R(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Te="@",J=":";function bn(e,t){t?t=t+" invalid":t="Invalid",u(e==="*"||e.startsWith("/"),`${t} route string '${e}'${e===""?" (empty string)":""}: route strings should start with a leading slash '/' (or be '*')`)}function q(e,t){bn(e),l(t.startsWith("/"));const n=e.split("/"),s=t.split("/"),r={};Sn(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,s.length);o++){const i=n[o],a=s[o];if(i==="*")return r["*"]=s.slice(Math.max(1,o)).join("/"),{routeParams:r};if(i&&H(i)){if(v(!i.startsWith(J),`Outdated route string \`${e}\`, use \`${e.split(J).join(Te)}\` instead.`,{showStackTrace:!1,onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function Sn(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function T(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(H(i))break;n++}const s=t.filter(i=>!H(i)).length,r=t.filter(i=>H(i)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:s,isCatchAll:o}}function H(e){return e.startsWith(Te)||e.startsWith(J)}function le(e){const n=q(e,e);return l(n),Object.keys(n.routeParams).length===0}function vn(e){e.sort(Pn).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&le(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&le(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function Pn(e,t){var n,s;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(s=t.precedence)!==null&&s!==void 0?s:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=$(i=>T(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=$(i=>T(i).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=$(i=>T(i).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(T(t.routeString).isCatchAll)return-1;if(T(e.routeString).isCatchAll)return 1}return 0}async function Rn(e,t,n,s){yn(n);let r=e(n);if(u(!Pe(r)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(R(r),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),Fe(r,`The \`routeParams\` object returned by the Route Function ${s} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(R(i)),Object.keys(r).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function Fe(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(R(e.routeParams),`${t} be a plain JavaScript object.`),u(ln(e.routeParams),`${t} only hold string values.`))}async function wn(e,t){const n=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook defined by ${e.hookSrc}`;if(u(n==null||an(n,["pageContext"])&&d(n,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const o=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(d(n.pageContext,"_pageId","string"),`${o} a string or \`null\``),u(t._allPageIds.includes(n.pageContext._pageId),`${o} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Fe(n.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(v(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{showStackTrace:!1,onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(u(d(n.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),p(r,{_urlPristine:t.urlOriginal})),te(n.pageContext,{hook:{hookSrc:e.hookSrc,hookName:"onBeforeRoute"}}),p(r,n.pageContext),r}var N;function ue(...e){var t,n;N||(N=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),N&&N(...e)}Q()&&C();async function Ae(e){Ee(e);const{pageRoutes:t,onBeforeRouteHook:n}=await cn(e._pageFilesAll,e._pageConfigs,e._pageConfigGlobal,e._allPageIds);ue("Pages routes:",t);const s={};if(n){const c=await wn(n,e);if(c){if(p(s,c),d(s,"_pageId","string")||d(s,"_pageId","null"))return d(s,"routeParams")?l(d(s,"routeParams","object")):p(s,{routeParams:{}}),p(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};p(e,s)}}p(s,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(r.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:o}=e;l(o.startsWith("/"));const i=[];await Promise.all(t.map(async c=>{const{pageId:f,routeType:m}=c;if(c.routeType==="FILESYSTEM"){const{routeString:h}=c,_=q(h,o);if(_){const{routeParams:y}=_;i.push({pageId:f,routeParams:y,routeString:h,routeType:m})}return}if(c.routeType==="STRING"){const{routeString:h}=c,_=q(h,o);if(_){const{routeParams:y}=_;l(m==="STRING"),i.push({pageId:f,routeString:h,routeParams:y,routeType:m})}return}if(c.routeType==="FUNCTION"){const{routeFunction:h,allowAsync:_,routeDefinedAt:y}=c,g=await Rn(h,_,e,y);if(g){const{routeParams:w,precedence:x}=g;i.push({pageId:f,precedence:x,routeParams:w,routeType:m})}return}l(!1)})),vn(i);const a=i[0];if(ue(`Route matches for URL \`${o}\` (in precedence order):`,i),p(s,{_routeMatches:i}),!a)return p(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:c}=a;l(R(c)),p(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const ce=["urlPathname","urlParsed"],On=["Page","pageExports","exports"];function Ie(e){[...On,...ce].forEach(n=>{n in e&&(ce.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0}),delete e[n])})}const En="/";function Cn(e,t,n){const{pathnameOriginal:s,searchOriginal:r,hashOriginal:o}=V(e,En);e.startsWith("/")&&l(e===`${s}${r||""}${o||""}`,{url:e});const i=s.endsWith("/");let a;return n&&s!=="/"?(i?a=F(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${o||""}`}const xn=".pageContext.json",Tn=!1;function Fn(e){return Cn(e,xn,Tn)}async function An(e){return e._isFirstRenderAttempt&&Oe.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),In(e)):(l(d(e,"_isFirstRenderAttempt","false")),jn(e))}async function In(e){const t=Qe();return Ie(t),p(t,{isHydration:!0,_comesDirectlyFromServer:!0}),p(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function kn(e){const t=_e(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return p(n,await k(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function jn(e){let t={};p(t,{isHydration:!1}),p(t,await Hn(e)),p(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId));const n=await Nn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const s=_e(e._pageFilesAll,e._pageConfigs);return l(s),p(t,{isHydration:!1,_pageId:s}),p(t,n),p(t,await k(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return p(t,n),t}async function Nn(e){const t=Ze(e,"onBeforeRender");if(t){const s=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=et({...e,...r},!0),i=await ye(()=>s(o),"onBeforeRender",t.hookSrc);on(i,"onBeforeRender",["pageContext"],t.hookSrc);const a=i==null?void 0:i.pageContext;return p(r,a),r}if(await $n(e)){const s=await Ln(e),r={};return Object.assign(r,s),p(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function $n(e){if(e._pageConfigs.length>0){const t=tt(e._pageId,e._pageConfigs);return!!M(t,"onBeforeRender")&&t.configElements.onBeforeRender.configEnv==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await rn(e._pageFilesAll,e._pageId);return t}}async function Hn(e){const n=(await Ae(e)).pageContextAddendum;if(!n._pageId){const s=new Error("No routing match");throw Bn(s),s}return l(d(n,"_pageId","string")),n}function Bn(e){p(e,{_is404:!0})}function Wn(e){return I(e)&&e._is404===!0}async function Ln(e){var t;const n=Fn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(n);{const a=s.headers.get("content-type"),c=a&&a.includes("application/json");if(!c&&s.status===404){B(e.urlOriginal);const f=new Error("Page doesn't exist");throw Object.assign(f,{_abortRendering:!0}),f}u(c,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await s.text(),o=nt(r);if("serverSideError"in o)throw rt("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(o,"pageContext"));const i=o.pageContext;return l(R(i)),l(d(i,"_pageId","string")),Ie(i),i}function ke(){const e="/";return l(Vn(e)),e}function Vn(e){return e.startsWith("/")}const K=D("createPageContext.ts",{});async function je(e){K.pageFilesData||(K.pageFilesData=await ot(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:s,pageConfigGlobal:r}=K.pageFilesData,o=ke();l(be(o));const i={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:o,_isProduction:!0,_pageFilesAll:t,_pageConfigs:s,_pageConfigGlobal:r,_allPageIds:n};return p(i,e),Ee(i),i}async function Ne(e){const t=await je({urlOriginal:e}),n=await Ae(t),s=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:s,pageConfigs:r};const o=n.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:s,pageConfigs:r}:{pageId:null,pageFilesAll:s,pageConfigs:r}}function A(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function Dn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:s(),isClientRouting:o()};function s(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&A(a).includes("render")))}function r(){const i=e.some(a=>A(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>A(a).includes("clientRouting"))}}function Un({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:s}){let r=[];const o=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...o.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=zn(s);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function zn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Gn(e,t){let n=Se(e,t);const s=me(e,t),{isHtmlOnly:r,isClientRouting:o}=Dn({pageFilesClientSide:n,pageFilesServerSide:s,pageId:t});r&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!A(c).includes("render")),n=Yn(n));const{clientEntries:i,clientDependencies:a}=Un({pageFilesClientSide:n,pageFilesServerSide:s,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:s}}async function Kn(e,t,{sharedPageFilesAlreadyLoaded:n}){const s=Se(e,t);await Promise.all(s.map(async r=>{var o;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function Yn(e){const t=[];for(const n of e)if(t.push(n),A(n).includes("overrideDefaultPages"))break;return t}function Mn(e,t,n){var s;if(e){const r=(s=st(e,"clientRouting","boolean"))!==null&&s!==void 0?s:!1,o=!!M(e,"onRenderClient"),i=!!M(e,"Page")&&e.configElements.Page.configEnv!=="server-only";return{isClientSideRenderable:o&&i,isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:o}=Gn(t,n);return{isClientSideRenderable:!r,isClientRouting:o}}}async function $e(e){const{pageId:t,pageFilesAll:n,pageConfigs:s}=await Ne(e);if(!t)return!1;await Kn(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=it(s,t),{isClientSideRenderable:o,isClientRouting:i}=Mn(r,n,t);return o&&i}function He(e){const t=e.getAttribute("href");return!!(t===null||t===""||we(t)||Jn(e)||qn(t)||!Xn(t)||!at(t))}function Jn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function qn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function Xn(e){const t=ke();l(be(t));const{hasBaseServer:n}=V(e,t);return n}function Qn(e,t){return{prefetchPageContext:!1,prefetchStaticAssets:Zn(e,t)}}function Zn(e,t){let n=er(t),s=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(R(r),o);const i=Object.keys(r);u(i.length===1&&i[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,o)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(ve(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function er(e){let t=e.getAttribute("data-prefetch");if(v(t===null,"The `data-prefetch` attribute is outdated.",{showStackTrace:!1,onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const Be=new Map;function We(e){const t=Ve(e);return Be.has(t)}function Le(e){const t=Ve(e);Be.set(t,!0)}function Ve(e){return Xt(e)}C();const fe=new Map;async function Y(e){if(u(lt(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch"),u(!we(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`),We(e))return;Le(e);const{pageId:t,pageFilesAll:n,pageConfigs:s}=await Ne(e);if(t)try{await k(n,s,t)}catch(r){if(Z(r))X(r,!0);else throw r}}function tr(e){Le(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(fe.has(n))return;fe.set(n,!0);const s=n.getAttribute("href");if(He(n))return;l(s);try{if(!await $e(s))return}catch{return}if(We(s))return;const r=Qn(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>Y(s)),n.addEventListener("touchstart",()=>Y(s),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(Y(s),o.disconnect())})});o.observe(n)}}else return})}function De(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=ze()),"scrollPosition"in e||(t=!0,e.scrollPosition=Ue()),Ge(e),t&&re(e)}function ne(){const e=window.history.state||{};return Ge(e),e}function Ue(){return{x:window.scrollX,y:window.scrollY}}function ze(){return new Date().getTime()}function de(){const e=Ue(),t=ne();re({...t,scrollPosition:e})}function nr(e,t){if(t)re(ne(),e);else{const n=ze();rr({timestamp:n,scrollPosition:null},e)}}function Ge(e){if(l(I(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function re(e,t){window.history.replaceState(e,"",t??null)}function rr(e,t){window.history.pushState(e,"",t)}C();const or=D("navigate.ts",{});function sr(e){or.navigate=e}const Ke="__isRenderErrorPageException";function ge(e){return ir(e),typeof e=="object"&&e!==null&&Ke in e}function Ye({pageContext:e}={}){{const n=this;u(!(typeof n=="object"&&(n==null?void 0:n.constructor)===Ye),"Don't use the `new` operator: use `throw RenderErrorPage()` instead of `throw new RenderErrorPage()`.")}te(e,{errorMessagePrefix:"The `pageContext` provided in `RenderErrorPage({ pageContext })`"});const t=new Error("RenderErrorPage");return p(t,{pageContext:e,[Ke]:!0}),t}function ir(e){u(e!==Ye,"Missing parentheses `()` in `throw RenderErrorPage`: it should be `throw RenderErrorPage()`.")}const S=D("useClientRouter.ts",{previousState:W()});pr();De();function X(e,t){l(Z(e)),S.clientRoutingIsDisabled=!0,t&&console.log(e),ve(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function ar(){dr(),lr((r,{keepScrollPosition:o})=>{s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),ur((r,o)=>{s({scrollTarget:r,isBackwardNavigation:o})}),sr(async(r,{keepScrollPosition:o=!1,overwriteLastHistoryEntry:i=!1}={})=>{await s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:r,url:o=j(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:c}){var f;if(S.clientRoutingIsDisabled){B(o);return}if(c){let b;try{b=await $e(o)}catch(P){if(ge(P))b=!0;else throw P}if(!b){B(o);return}}const m={urlOriginal:o,isBackwardNavigation:a},h=++e;l(h>=1),h>1&&n===!1&&((f=S.onPageTransitionStart)===null||f===void 0||f.call(S,m),n=!0);let _=!1;const y=()=>h===1&&_===!1?!1:h!==e,g=await je(m);if(y())return;const w=h===1;p(g,{_isFirstRenderAttempt:w});let x;try{x=await An(g)}catch(b){if(console.error(b),he(b,g))return;ge(b)?(p(g,{is404:!0}),p(g,b.pageContext)):p(g,{is404:Wn(b)});try{x=await kn(g)}catch(P){if(he(P,g)||(w||setTimeout(()=>{window.location.pathname=o},0),Zt(b,P)))return;throw P}}if(p(g,x),z(g,"onPageTransitionStart"),S.onPageTransitionStart=g.exports.onPageTransitionStart,g.exports.hydrationCanBeAborted?_=!0:v(!Qt(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{showStackTrace:!1,onlyOnce:!0}),!y()&&(t&&await t,!y())){if(cr(o,i),Oe.markNavigationChange(),l(t===void 0),t=(async()=>{await ut(g,!0),tr(g)})(),await t,t=void 0,g._isFirstRenderAttempt){z(g,"onHydrationEnd");const{onHydrationEnd:b}=g.exports;if(b){const P=g.exportsAll.onHydrationEnd[0].exportSource;l(P),await ye(()=>b(g),"onHydrationEnd",P)}}else h===e&&(g.exports.onPageTransitionEnd&&(z(g,"onPageTransitionEnd"),g.exports.onPageTransitionEnd(g)),n=!1);Me(r),oe(),S.initialRenderIsDone=!0}}}function lr(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=s(r.target);if(!o)return;const i=o.getAttribute("href");if(He(o))return;l(i),r.preventDefault();const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function s(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}function ur(e){window.addEventListener("popstate",()=>{const t=W(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===S.previousState.urlWithoutHash,r=!t.historyState.timestamp||!S.previousState.historyState.timestamp?null:t.historyState.timestamp<S.previousState.historyState.timestamp;S.previousState=t,s?window.history.state===null?(De(),S.previousState=W()):Me(n):e(n,r)})}function cr(e,t){j()!==e&&(oe(),nr(e,t),S.previousState=W())}function W(){return{urlWithoutHash:j({withoutHash:!0}),historyState:ne()}}function Me(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=gr();if(n&&n!=="top"){const s=document.getElementById(n)||document.getElementsByName(n)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;fr(t)}function fr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const s=new Date().getTime();for(;;)if(await en(10),t(),n()||new Date().getTime()-s>100)return},0)}))}function dr(){window.addEventListener("scroll",tn(de,Math.ceil(1e3/3)),{passive:!0}),Je(de)}function gr(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function pr(){pe(),Je(pe),hr(()=>S.initialRenderIsDone&&oe())}function oe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function pe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Je(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function hr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function he(e,t){return!!(I(e)&&e._abortRendering||mr(e,t))}function mr(e,t){if(!Z(e))return!1;if(t._isFirstRenderAttempt)throw X(e,!1),e;return X(e,!0),B(t.urlOriginal),!0}C();ct(!0);ar();
