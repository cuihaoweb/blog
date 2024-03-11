"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[7438],{8874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(216),a=n(4506);const r={sidebar_position:4},o="generateStaticParams",c={id:"nextjs/server-data/generateStaticParams",title:"generateStaticParams",description:"generateStaticParams \u51fd\u6570\u5728\u6784\u5efa\u65f6\u4f1a\u751f\u6210\u9759\u6001\u8def\u7531\uff0c\u800c\u4e0d\u662f\u5728\u8bf7\u6c42\u65f6\u6309\u9700\u751f\u6210\u8def\u7531\u3002",source:"@site/docs/nextjs/09.server-data/04.generateStaticParams.md",sourceDirName:"nextjs/09.server-data",slug:"/nextjs/server-data/generateStaticParams",permalink:"/ChBlog/en/docs/nextjs/server-data/generateStaticParams",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/09.server-data/04.generateStaticParams.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"NextResponse",permalink:"/ChBlog/en/docs/nextjs/server-api/NextResponse"}},i={},d=[{value:"\u5355\u4e2a\u8def\u7531\u6bb5",id:"\u5355\u4e2a\u8def\u7531\u6bb5",level:2},{value:"\u5d4c\u5957\u8def\u7531\u6bb5",id:"\u5d4c\u5957\u8def\u7531\u6bb5",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"generatestaticparams",children:"generateStaticParams"}),"\n",(0,s.jsx)(t.p,{children:"generateStaticParams \u51fd\u6570\u5728\u6784\u5efa\u65f6\u4f1a\u751f\u6210\u9759\u6001\u8def\u7531\uff0c\u800c\u4e0d\u662f\u5728\u8bf7\u6c42\u65f6\u6309\u9700\u751f\u6210\u8def\u7531\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u53ef\u80fd\u6709\u4eba\u4f1a\u95ee\uff0c\u4f7f\u7528 generateStaticParams \u51fd\u6570\u6709\u4ec0\u4e48\u597d\u5904\uff1f"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7531\u4e8e\u8def\u7531\u662f\u9759\u6001\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528\u7f13\u5b58\uff0c\u63d0\u5347\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u3002"}),"\n",(0,s.jsx)(t.li,{children:"\u63d0\u5347\u8def\u7531\u5339\u914d\u7684\u6548\u7387\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"\u5355\u4e2a\u8def\u7531\u6bb5",children:"\u5355\u4e2a\u8def\u7531\u6bb5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="app/blog/[slug]/layout.js "',children:"export async function generateStaticParams() {\n    const posts = await fetch('https://.../posts').then((res) => res.json())\n    \n    return posts.map((post) => ({\n        slug: post.slug,\n    }))\n}\n\nexport default function Layout({ params }) {\n    const { slug } = params\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"\u5d4c\u5957\u8def\u7531\u6bb5",children:"\u5d4c\u5957\u8def\u7531\u6bb5"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="app/products/[category]/[product].js "',children:"export function generateStaticParams() {\n  return [\n    { category: 'a', product: '1' },\n    { category: 'b', product: '2' },\n    { category: 'c', product: '3' },\n  ]\n}\n\n// - /products/a/1\n// - /products/b/2\n// - /products/c/3\nexport default function Page({params}) {\n    const { category, product } = params\n    // ...\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4506:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6372);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);