"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[7226],{2125:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var t=s(216),i=s(4506);const l={sidebar_position:2},o="stylelint",r={id:"nextjs/configure/stylelint",title:"stylelint",description:"Stylelint\u662f\u4e00\u4e2a\u7528\u4e8e\u68c0\u67e5\u548c\u5f3a\u5236\u6267\u884cCSS\u4ee3\u7801\u98ce\u683c\u89c4\u8303\u7684\u5de5\u5177\u3002",source:"@site/docs/nextjs/11.configure/02.stylelint.md",sourceDirName:"nextjs/11.configure",slug:"/nextjs/configure/stylelint",permalink:"/ChBlog/en/docs/nextjs/configure/stylelint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/11.configure/02.stylelint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"eslint",permalink:"/ChBlog/en/docs/nextjs/configure/eslint"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/ChBlog/en/docs/nextjs/configure/env"}},c={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"stylelint",children:"stylelint"}),"\n",(0,t.jsx)(e.p,{children:"Stylelint\u662f\u4e00\u4e2a\u7528\u4e8e\u68c0\u67e5\u548c\u5f3a\u5236\u6267\u884cCSS\u4ee3\u7801\u98ce\u683c\u89c4\u8303\u7684\u5de5\u5177\u3002\n\u5b83\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u548c\u56e2\u961f\u4fdd\u6301\u4e00\u81f4\u7684CSS\u7f16\u7801\u98ce\u683c\uff0c\u5e76\u53d1\u73b0\u548c\u4fee\u590d\u6f5c\u5728\u7684\u4ee3\u7801\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(e.p,{children:"Stylelint\u4e0eESLint\u7684\u4f5c\u7528\u7c7b\u4f3c\uff0c\u4f46\u9488\u5bf9\u7684\u662fCSS\u548c\u9884\u5904\u7406\u5668\uff08\u5982Sass\u3001Less\uff09\u4ee3\u7801\uff0c\u800c\u4e0d\u662fJavaScript\u4ee3\u7801\u3002\n\u5b83\u53ef\u4ee5\u68c0\u67e5CSS\u6587\u4ef6\u4e2d\u7684\u8bed\u6cd5\u9519\u8bef\u3001\u4e0d\u4e00\u81f4\u7684\u547d\u540d\u7ea6\u5b9a\u3001\u672a\u4f7f\u7528\u7684\u6837\u5f0f\u89c4\u5219\u3001\u4e0d\u63a8\u8350\u4f7f\u7528\u7684CSS\u5c5e\u6027\u7b49\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm i stylelint stylelint-config-standard-scss postcss-html postcss-scss -D\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["\u65b0\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa",(0,t.jsx)(e.code,{children:".stylelintrc.cjs"})," \u6587\u4ef6\uff0c\u5e76\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:'// https://stylelint.io/user-guide/configure\n\n/** @type{import(\'stylelint\').Config}*/\nmodule.exports = {\n    extends: [\n        \'stylelint-config-standard-scss\',\n    ],\n    customSyntax: \'postcss-html\',\n    ignoreFiles: [ "**/*.{js,jsx,ts,tsx,json}" ],\n    overrides: [\n        {\n          files: ["**/*.{scss,css,sass}"],\n          customSyntax: "postcss-scss",\n        }\n    ],\n    rules: {\n        \'selector-pseudo-class-no-unknown\': [\n            true,\n            {\n                "ignorePseudoClasses": ["global"]\n            }\n        ]\n    }\n};\n'})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:["\u5982\u679c\u4f60\u662fvscode\u7528\u6237\uff0c\u53ef\u4ee5\u5b89\u88c5\u63d2\u4ef6 ",(0,t.jsx)(e.code,{children:"stylelint"})," \u6765\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u5177\u4f53\u914d\u7f6e\u53ef\u4ee5\u590d\u7528eslint\u7ae0\u8282\u4e2d\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u53c2\u8003: ",(0,t.jsx)(e.a,{href:"./eslint#%E8%87%AA%E5%AE%9A%E4%B9%89eslint%E9%85%8D%E7%BD%AE",children:"eslint"})]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},4506:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>r});var t=s(6372);const i={},l=t.createContext(i);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);