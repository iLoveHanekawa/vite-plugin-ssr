import{_ as s,s as p,d,r as u,q as o,h as c,C as _,t as f,j as v,O as x,P as E,M as y,L as h}from"./chunks/chunk-dabbe040.js";const i={},m={},C={},F={},L=[],P={},R=!0,b=[],w={onBeforeRoute:null},O=null,A=Object.assign({"/pages/about/index.page.tsx":()=>s(()=>import("./pages/about/index.page.4d2073f2.js"),["assets/pages/about/index.page.4d2073f2.js","assets/chunks/chunk-0e184ced.js"]),"/pages/index/index.page.tsx":()=>s(()=>import("./pages/index/index.page.066fbc13.js"),["assets/pages/index/index.page.066fbc13.js","assets/chunks/chunk-0e184ced.js"]),"/pages/user/index.page.tsx":()=>s(()=>import("./pages/user/index.page.ab8f507d.js"),["assets/pages/user/index.page.ab8f507d.js","assets/chunks/chunk-0e184ced.js"]),"/pages/users/index.page.tsx":()=>s(()=>import("./pages/users/index.page.520a4a51.js"),["assets/pages/users/index.page.520a4a51.js","assets/chunks/chunk-0e184ced.js"]),"/renderer/_error.page.tsx":()=>s(()=>import("./renderer/error.page.a77f0542.js"),["assets/renderer/error.page.a77f0542.js","assets/chunks/chunk-0e184ced.js"])}),I={...A};i[".page"]=I;const S=Object.assign({"/renderer/_default.page.client.tsx":()=>s(()=>import("./renderer/default.page.client.25e85b1a.js"),["assets/renderer/default.page.client.25e85b1a.js","assets/chunks/chunk-0e184ced.js","assets/static/default.page.client.4a06ee7b.css"])}),z={...S};i[".page.client"]=z;const T=Object.freeze(Object.defineProperty({__proto__:null,invalidator:O,isGeneratedFile:R,neverLoaded:P,pageConfigGlobal:w,pageConfigs:b,pageFilesEager:m,pageFilesExportNamesEager:F,pageFilesExportNamesLazy:C,pageFilesLazy:i,pageFilesList:L},Symbol.toStringTag,{value:"Module"}));p(T);const g=d({withoutHash:!0});async function H(){const e=u();return o(e,{isHydration:!0,isBackwardNavigation:null}),o(e,await B(e._pageId)),j(),e}function j(){const e=d({withoutHash:!0});c(g===e,`URL manipulated before hydration finished (\`${g}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function B(e){const a={},{pageFilesAll:t,pageConfigs:l}=await _(!0);return o(a,{_pageFilesAll:t,_pageConfigs:l}),o(a,await f(t,l,e)),t.filter(n=>n.fileType!==".page.server").forEach(n=>{var r;v(!(!((r=n.fileExports)===null||r===void 0)&&r.onBeforeRender),`\`export { onBeforeRender }\` of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{showStackTrace:!1,onlyOnce:!0})}),a}x();E(!0);D();async function D(){var e,a;const t=await H();await y(t,!1),h(t,"onHydrationEnd"),await((a=(e=t.exports).onHydrationEnd)===null||a===void 0?void 0:a.call(e,t))}
