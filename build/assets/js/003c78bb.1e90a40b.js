"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[640],{7404:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(216),l=n(4506);const i={sidebar_position:3},r="<Script>",d={id:"nextjs/buildIn-components/Script",title:"<Script>",description:"\u52a0\u8f7djs\u811a\u672c\u6587\u4ef6\u3002",source:"@site/docs/nextjs/06.buildIn-components/03.Script.md",sourceDirName:"nextjs/06.buildIn-components",slug:"/nextjs/buildIn-components/Script",permalink:"/ChBlog/docs/nextjs/buildIn-components/Script",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/06.buildIn-components/03.Script.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"<Link>",permalink:"/ChBlog/docs/nextjs/buildIn-components/Link"},next:{title:"useParams",permalink:"/ChBlog/docs/nextjs/client-api/useParams"}},c={},o=[{value:"props",id:"props",level:2}];function x(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"script",children:(0,s.jsx)(e.code,{children:"<Script>"})}),"\n",(0,s.jsx)(e.p,{children:"\u52a0\u8f7djs\u811a\u672c\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"import Script from 'next/script'\n \nexport default function Dashboard() {\n  return (\n    <>\n      <Script src=\"https://example.com/script.js\" />\n    </>\n  )\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"props",children:"props"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Default"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"required"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"src"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"true"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u811a\u672c\u6587\u4ef6\u5730\u5740"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"strategy"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"false"}),(0,s.jsxs)(e.td,{style:{textAlign:"left"},children:["\u52a0\u8f7d\u7b56\u7565\uff0c\u53ef\u9009\u503c\uff1a",(0,s.jsx)(e.code,{children:"beforeInteractive"}),"\u3001",(0,s.jsx)(e.code,{children:"afterInteractive"}),"\u3001",(0,s.jsx)(e.code,{children:"lazyOnload"}),"\u3001",(0,s.jsx)(e.code,{children:"worker"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"onLoad"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"function"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"false"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u52a0\u8f7d\u5b8c\u6210\u56de\u8c03\u51fd\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"onReady"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"function"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"false"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u52a0\u8f7d\u5b8c\u6210\u56de\u8c03\u51fd\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"onError"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"function"}),(0,s.jsx)(e.td,{style:{textAlign:"left"}}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"false"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u52a0\u8f7d\u5931\u8d25\u56de\u8c03\u51fd\u6570"})]})]})]})]})}function h(t={}){const{wrapper:e}={...(0,l.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(x,{...t})}):x(t)}},4506:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>d});var s=n(6372);const l={},i=s.createContext(l);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(l):t.components||l:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);