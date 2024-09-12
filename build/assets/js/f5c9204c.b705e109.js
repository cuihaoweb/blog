"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[6045],{8471:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(216),l=s(4506);const i={sidebar_position:1},r="useParams",a={id:"nextjs/client-api/useParams",title:"useParams",description:"useParams \u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u7684hook\uff0c\u53ef\u4ee5\u8ba9\u4f60\u8bfb\u53d6\u7531\u5f53\u524d URL \u8def\u7531\u7684query\u53c2\u6570\u3002",source:"@site/docs/nextjs/07.client-api/01.useParams.md",sourceDirName:"nextjs/07.client-api",slug:"/nextjs/client-api/useParams",permalink:"/ChBlog/docs/nextjs/client-api/useParams",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/07.client-api/01.useParams.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"<Script>",permalink:"/ChBlog/docs/nextjs/buildIn-components/Script"},next:{title:"usePathname",permalink:"/ChBlog/docs/nextjs/client-api/usePathname"}},o={},c=[{value:"example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"useparams",children:"useParams"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"useParams"})," \u662f\u4e00\u4e2a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u7684hook\uff0c\u53ef\u4ee5\u8ba9\u4f60\u8bfb\u53d6\u7531\u5f53\u524d URL \u8def\u7531\u7684query\u53c2\u6570\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"'use client'\n \nimport { useParams } from 'next/navigation'\n \nexport default function ExampleClientComponent() {\n  const params = useParams()\n \n  // Route -> /shop/[tag]/[item]\n  // URL -> /shop/shoes/nike-air-max-97\n  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }\n  console.log(params)\n \n  return <></>\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"example"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Router"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Url"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Params"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"{}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/[slug]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/1"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"{ slug: '1' }"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/[tag]/[item]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/1/2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"{ tag: '1', item: '2' }"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/[...slug]"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"/shop/1/2"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"{ slug: ['1', '2'] }"})})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4506:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6372);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);