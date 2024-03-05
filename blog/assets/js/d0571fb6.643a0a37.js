"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[6110],{7227:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=t(216),i=t(4506);const o={sidebar_position:3},r="\u8def\u7531",c={id:"nextjs/router",title:"\u8def\u7531",description:"NextJs\u7684\u8def\u7531\u7cfb\u7edf\u662fNextJs\u7684\u6838\u5fc3\u4e4b\u4e00\uff0c\u5148\u4e0a\u4e00\u5f20\u56fe\u6765\u611f\u53d7\u4e0bNextJs\u7684\u8def\u7531\u7cfb\u7edf\u3002",source:"@site/docs/nextjs/03.router.md",sourceDirName:"nextjs",slug:"/nextjs/router",permalink:"/ChBlog/docs/nextjs/router",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/03.router.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/ChBlog/docs/nextjs/install"}},d={},a=[{value:"\u8def\u7531\u89c4\u5219\uff0c\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e",id:"\u8def\u7531\u89c4\u5219\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u8def\u7531",children:"\u8def\u7531"}),"\n",(0,n.jsxs)(s.p,{children:["NextJs\u7684\u8def\u7531\u7cfb\u7edf\u662fNextJs\u7684\u6838\u5fc3\u4e4b\u4e00\uff0c\u5148\u4e0a\u4e00\u5f20\u56fe\u6765\u611f\u53d7\u4e0bNextJs\u7684\u8def\u7531\u7cfb\u7edf\u3002\n",(0,n.jsx)(s.img,{alt:"terminology",src:t(2044).A+"",width:"1600",height:"832"})]}),"\n",(0,n.jsx)(s.h2,{id:"\u8def\u7531\u89c4\u5219\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e",children:"\u8def\u7531\u89c4\u5219\uff0c\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e"}),"\n",(0,n.jsx)(s.p,{children:"NextJs\u7684\u8def\u7531\u7cfb\u7edf\u662f\u4e00\u4e2a\u6811\u5f62\u7ed3\u6784\uff0c\u6700\u9876\u5c42\u662fapp\u76ee\u5f55\uff0c\u7136\u540e\u662f\u8def\u7531\u6587\u4ef6\uff0c\u6700\u540e\u662f\u5177\u4f53\u7684\u9875\u9762\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u901a\u8fc7\u4e00\u5f20url\u548c\u8def\u7531\u6587\u4ef6\u7684\u6620\u5c04\u5173\u7cfb\u56fe\u6765\u76f4\u89c2\u7684\u611f\u53d7\u4e0b\uff1a\n",(0,n.jsx)(s.img,{alt:"terminology",src:t(545).A+"",width:"1600",height:"594"})]}),"\n",(0,n.jsxs)(s.p,{children:["NextJs\u7684\u8def\u7531\u7cfb\u7edf\u9075\u5faa\u4e86\u7ea6\u5b9a\u5927\u4e8e\u914d\u7f6e\u7684\u5143\u7d20\uff0c\u6bcf\u4e2a\u8def\u7531\u6587\u4ef6\u4e0b\u53ef\u4ee5\u5305\u542b\u5982\u4e0b\u7684\u6587\u4ef6\uff1a\n",(0,n.jsx)(s.img,{alt:"terminology",src:t(6795).A+"",width:"1600",height:"641"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"page.js"}),": ",(0,n.jsx)(s.code,{children:"\u5fc5\u586b"})," \u6587\u4ef6\uff0c\u5728\u9875\u9762\u6e32\u67d3\u540e\u52a0\u8f7d\u8be5\u6587\u4ef6, \u7528\u4e8e\u6e32\u67d3\u9875\u9762\u5185\u5bb9."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"layout.js"}),": \u5e03\u5c40\u6587\u4ef6\uff0c\u5728\u9875\u9762\u6e32\u67d3\u524d\u4f1a\u5148\u52a0\u8f7d\u8be5\u6587\u4ef6, \u7528\u4e8e\u6e32\u67d3\u9875\u9762\u5e03\u5c40."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"loading.js"}),": \u52a0\u8f7d\u6587\u4ef6\uff0c\u5728\u9875\u9762\u6e32\u67d3\u524d\u4f1a\u5148\u52a0\u8f7d\u8be5\u6587\u4ef6, \u7528\u4e8e\u6e32\u67d3\u9875\u9762\u52a0\u8f7d\u72b6\u6001."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"error.js"}),": \u9519\u8bef\u6587\u4ef6\uff0c\u5728\u9875\u9762\u6e32\u67d3\u540e\u52a0\u8f7d\u8be5\u6587\u4ef6, \u7528\u4e8e\u6e32\u67d3\u9875\u9762\u9519\u8bef\u72b6\u6001."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"not-found.js"}),": 404\u6587\u4ef6\uff0c\u5728\u9875\u9762\u6e32\u67d3\u540e\u52a0\u8f7d\u8be5\u6587\u4ef6, \u7528\u4e8e\u6e32\u67d3\u9875\u9762404\u72b6\u6001."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6795:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/file-conventions-component-hierarchy-0df46872487e8dcb0a790058dd4981b8.avif"},545:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/route-segments-to-path-segments-df9be7022e4d9d0a1e34c6b6965d3af1.avif"},2044:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/terminology-component-tree-3abb3cbaa639c19608a243a5d6302026.avif"},4506:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(6372);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);