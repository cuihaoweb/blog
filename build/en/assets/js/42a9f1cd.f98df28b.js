"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[1925],{8960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(216),r=n(4506);const s={sidebar_position:2},i="generateSitemaps",o={id:"nextjs/server-data/generateSitemaps",title:"generateSitemaps",description:"Sitemap\uff08\u7f51\u7ad9\u5730\u56fe\uff09\u662f\u4e00\u4e2aXML\u6587\u4ef6\uff0c\u7528\u4e8e\u5411\u641c\u7d22\u5f15\u64ce\u63d0\u4f9b\u6709\u5173\u7f51\u7ad9\u4e0a\u6240\u6709\u53ef\u8bbf\u95ee\u9875\u9762\u7684\u4fe1\u606f\u3002",source:"@site/docs/nextjs/09.server-data/02.generateSitemaps.md",sourceDirName:"nextjs/09.server-data",slug:"/nextjs/server-data/generateSitemaps",permalink:"/ChBlog/en/docs/nextjs/server-data/generateSitemaps",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/09.server-data/02.generateSitemaps.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"generateMetadata",permalink:"/ChBlog/en/docs/nextjs/server-data/generateMetadata"},next:{title:"generateStaticParams",permalink:"/ChBlog/en/docs/nextjs/server-data/generateStaticParams"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"generatesitemaps",children:"generateSitemaps"}),"\n",(0,a.jsx)(t.p,{children:"Sitemap\uff08\u7f51\u7ad9\u5730\u56fe\uff09\u662f\u4e00\u4e2aXML\u6587\u4ef6\uff0c\u7528\u4e8e\u5411\u641c\u7d22\u5f15\u64ce\u63d0\u4f9b\u6709\u5173\u7f51\u7ad9\u4e0a\u6240\u6709\u53ef\u8bbf\u95ee\u9875\u9762\u7684\u4fe1\u606f\u3002\n\u5b83\u5217\u51fa\u4e86\u7f51\u7ad9\u4e2d\u7684\u5404\u4e2a\u9875\u9762\uff0c\u5e2e\u52a9\u641c\u7d22\u5f15\u64ce\u4e86\u89e3\u7f51\u7ad9\u7684\u7ed3\u6784\u548c\u5185\u5bb9\uff0c\u4ee5\u66f4\u597d\u5730\u8fdb\u884c\u7d22\u5f15\u548c\u6392\u540d\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="app/sitemap.xml"',children:"import { BASE_URL } from '@/app/lib/constants'\n \nexport default async function sitemap() {\n    return [\n        {\n            url: 'https://tk.chdl.com',\n            lastModified: new Date(),\n            changeFrequency: 'yearly',\n            priority: 1,\n        },\n        {\n            url: 'https://tk.chdl.com/zh',\n            lastModified: new Date(),\n            changeFrequency: 'monthly',\n            priority: 0.8,\n        },\n        {\n            url: 'https://tk.chdl.com/en',\n            lastModified: new Date(),\n            changeFrequency: 'weekly',\n            priority: 0.5,\n        }\n    ]\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},4506:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6372);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);