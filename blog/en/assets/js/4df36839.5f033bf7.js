"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[4832],{2091:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(216),t=s(4506);const i={sidebar_position:3},d="headers",a={id:"nextjs/server-api/headers",title:"headers",description:"next.js\u5141\u8bb8\u4f60\u901a\u8fc7 headers() \u51fd\u6570\u4ece\u670d\u52a1\u5668\u7ec4\u4ef6\u8bfb\u53d6 HTTP \u5934\uff0c\u540c\u65f6\u652f\u6301\u64cd\u4f5c\u54cd\u5e94\u5934\u3002",source:"@site/docs/nextjs/08.server-api/03.headers.md",sourceDirName:"nextjs/08.server-api",slug:"/nextjs/server-api/headers",permalink:"/ChBlog/en/docs/nextjs/server-api/headers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/08.server-api/03.headers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"cookies",permalink:"/ChBlog/en/docs/nextjs/server-api/cookies"},next:{title:"middleware",permalink:"/ChBlog/en/docs/nextjs/server-api/middleware"}},o={},c=[{value:"Api refer",id:"api-refer",level:2}];function l(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"headers",children:"headers"}),"\n",(0,n.jsxs)(r.p,{children:["next.js\u5141\u8bb8\u4f60\u901a\u8fc7 ",(0,n.jsx)(r.code,{children:"headers()"})," \u51fd\u6570\u4ece\u670d\u52a1\u5668\u7ec4\u4ef6\u8bfb\u53d6 HTTP \u5934\uff0c\u540c\u65f6\u652f\u6301\u64cd\u4f5c\u54cd\u5e94\u5934\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:"import { headers } from 'next/headers'\n \nexport default function Page() {\n  const headersList = headers()\n  const referer = headersList.get('referer')\n \n  return <div>Referer: {referer}</div>\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"api-refer",children:"Api refer"}),"\n",(0,n.jsx)(r.p,{children:"headers \u8fd4\u56de\u4e00\u4e2a\u53ea\u8bfb\u7684 Web Headers \u5bf9\u8c61\u3002"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.entries()"}),": \u8fd4\u56de\u4e00\u4e2a iterator \u5141\u8bb8\u904d\u5386\u6b64\u5bf9\u8c61\u4e2d\u5305\u542b\u7684\u6240\u6709\u952e/\u503c\u5bf9\u7684\u6743\u9650\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.forEach()"}),": \uff1a\u4e3a\u6b64 Headers \u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e2a\u952e/\u503c\u5bf9\u6267\u884c\u4e00\u6b21\u63d0\u4f9b\u7684\u51fd\u6570\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.get()"}),": \u8fd4\u56de\u5177\u6709\u7ed9\u5b9a\u540d\u79f0\u7684 Headers \u5bf9\u8c61\u4e2d\u6807\u5934\u7684\u6240\u6709\u503c String \u7684\u5e8f\u5217\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.has()"}),": \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8bf4\u660e Headers \u5bf9\u8c61\u662f\u5426\u5305\u542b\u67d0\u4e2a\u6807\u5934\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.keys()"}),": \u8fd4\u56de\u4e00\u4e2a iterator \u5141\u8bb8\u60a8\u904d\u5386\u6b64\u5bf9\u8c61\u4e2d\u5305\u542b\u7684\u952e/\u503c\u5bf9\u7684\u6240\u6709\u952e\u3002"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"Headers.values()"}),": \u8fd4\u56de\u5141\u8bb8\u60a8 iterator \u904d\u5386\u6b64\u5bf9\u8c61\u4e2d\u5305\u542b\u7684\u952e/\u503c\u5bf9\u7684\u6240\u6709\u503c\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4506:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>a});var n=s(6372);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);