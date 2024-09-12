"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[5645],{444:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(216),l=n(4506);const i={sidebar_position:4},o="css module",c={id:"nextjs/styling/css-module",title:"css module",description:"CSS\u6a21\u5757\uff08CSS Modules\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u89e3\u51b3CSS\u547d\u540d\u51b2\u7a81\u548c\u4f5c\u7528\u57df\u9694\u79bb\u95ee\u9898\u7684\u6280\u672f\u3002\u5b83\u901a\u8fc7\u5728\u7f16\u8bd1\u9636\u6bb5\u4e3aCSS\u6837\u5f0f\u8868\u751f\u6210\u552f\u4e00\u7684\u7c7b\u540d\uff0c\u4ee5\u786e\u4fdd\u6837\u5f0f\u7684\u4f5c\u7528\u8303\u56f4\u4ec5\u9650\u4e8e\u5176\u6240\u5c5e\u7684\u7ec4\u4ef6\u6216\u6a21\u5757\u3002",source:"@site/docs/nextjs/04.styling/04.css-module.md",sourceDirName:"nextjs/04.styling",slug:"/nextjs/styling/css-module",permalink:"/ChBlog/en/docs/nextjs/styling/css-module",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/04.styling/04.css-module.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tailwind Css",permalink:"/ChBlog/en/docs/nextjs/styling/tailwindcss"},next:{title:"\u4e3b\u9898",permalink:"/ChBlog/en/docs/nextjs/styling/theme"}},r={},d=[{value:"Example",id:"example",level:2},{value:"typescript-plugin-css-modules",id:"typescript-plugin-css-modules",level:2}];function a(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"css-module",children:"css module"}),"\n",(0,t.jsx)(e.p,{children:"CSS\u6a21\u5757\uff08CSS Modules\uff09\u662f\u4e00\u79cd\u7528\u4e8e\u89e3\u51b3CSS\u547d\u540d\u51b2\u7a81\u548c\u4f5c\u7528\u57df\u9694\u79bb\u95ee\u9898\u7684\u6280\u672f\u3002\u5b83\u901a\u8fc7\u5728\u7f16\u8bd1\u9636\u6bb5\u4e3aCSS\u6837\u5f0f\u8868\u751f\u6210\u552f\u4e00\u7684\u7c7b\u540d\uff0c\u4ee5\u786e\u4fdd\u6837\u5f0f\u7684\u4f5c\u7528\u8303\u56f4\u4ec5\u9650\u4e8e\u5176\u6240\u5c5e\u7684\u7ec4\u4ef6\u6216\u6a21\u5757\u3002\nNext.js \u5185\u7f6e\u4e86\u5bf9\u4f7f\u7528\u6269\u5c55 .module.css \u7684 CSS \u6a21\u5757\u7684\u652f\u6301\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.p,{children:"next.js\u4ec5\u5bf9 .module.css \u6269\u5c55\u540d\u7684\u6587\u4ef6\u542f\u7528css module\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",metastring:'title="app/dashboard/layout.jsx"',children:"import styles from './styles.module.css'\n \nexport default function DashboardLayout({ children }) {\n  return <section className={styles.dashboard}>{children}</section>\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"typescript-plugin-css-modules",children:"typescript-plugin-css-modules"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u7684\u9879\u76ee\u4f7f\u7528\u4e86 typescript\uff0c\u63a8\u8350\u4e00\u4e2a\u63d2\u4ef6 ",(0,t.jsx)(e.code,{children:"typescript-plugin-css-modules"}),",\n\u8fd9\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u8ba9\u4f60\u5728\u7f16\u5199 className \u65f6\uff0c\u667a\u80fd\u63d0\u793acss module\u7684\u7c7b\u540d\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u6b65\u9aa4\u5982\u4e0b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u5b89\u88c5\u63d2\u4ef6\uff1a",(0,t.jsx)(e.code,{children:"npm i typescript-plugin-css-modules -D"})]}),"\n",(0,t.jsx)(e.li,{children:"\u914d\u7f6etsconfig.json:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="tsconfig.json"',children:'{\n  "compilerOptions": {\n    "plugins": [\n      { "name": "typescript-plugin-css-modules" }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"\u914d\u7f6e.vscode/settings.json:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title=".vscode/settings.json"',children:'{\n  "typescript.tsdk": "node_modules/typescript/lib",\n  "typescript.enablePromptUseWorkspaceTsdk": true\n}\n'})})]})}function u(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(a,{...s})}):a(s)}},4506:(s,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var t=n(6372);const l={},i=t.createContext(l);function o(s){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:o(s.components),t.createElement(i.Provider,{value:e},s.children)}}}]);