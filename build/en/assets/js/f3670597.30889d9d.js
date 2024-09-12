"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[8330],{5161:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=s(216),i=s(4506);const o={sidebar_position:6},r="\u81ea\u9002\u5e94\u9875\u9762",c={id:"nextjs/styling/self-adaption",title:"\u81ea\u9002\u5e94\u9875\u9762",description:"\u9996\u5148\u5f97\u533a\u5206\u81ea\u9002\u5e94\u5e03\u5c40\u548c\u54cd\u5e94\u5f0f\u5e03\u5c40\u4e4b\u95f4\u7684\u533a\u522b\u3002",source:"@site/docs/nextjs/04.styling/06.self-adaption.md",sourceDirName:"nextjs/04.styling",slug:"/nextjs/styling/self-adaption",permalink:"/ChBlog/en/docs/nextjs/styling/self-adaption",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/04.styling/06.self-adaption.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u4e3b\u9898",permalink:"/ChBlog/en/docs/nextjs/styling/theme"},next:{title:"\u670d\u52a1\u7aef\u7ec4\u4ef6",permalink:"/ChBlog/en/docs/nextjs/rendering/server-compnent"}},l={},d=[{value:"postcss",id:"postcss",level:2},{value:"\u8bbe\u7f6e\u6839\u5143\u7d20fon-size",id:"\u8bbe\u7f6e\u6839\u5143\u7d20fon-size",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u81ea\u9002\u5e94\u9875\u9762",children:"\u81ea\u9002\u5e94\u9875\u9762"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u5f97\u533a\u5206\u81ea\u9002\u5e94\u5e03\u5c40\u548c\u54cd\u5e94\u5f0f\u5e03\u5c40\u4e4b\u95f4\u7684\u533a\u522b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u81ea\u9002\u5e94\u5e03\u5c40\u662f\u6307\u5728\u540c\u4e00\u8bbe\u5907\u7c7b\u578b\u4e0b\uff0c\u9875\u9762\u53ef\u4ee5\u6839\u636e\u7a97\u53e3\u5927\u5c0f\u7b49\u6bd4\u4f8b\u7f29\u653e\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u5c3a\u5bf8\u7684\u5c4f\u5e55\u3002\u5728\u81ea\u9002\u5e94\u5e03\u5c40\u4e2d\uff0c\u9875\u9762\u7684\u5e03\u5c40\u548c\u5143\u7d20\u5927\u5c0f\u4f1a\u6839\u636e\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u5927\u5c0f\u8fdb\u884c\u8c03\u6574\uff0c\u4f46\u4e0d\u4f1a\u6539\u53d8\u5143\u7d20\u7684\u6392\u5217\u987a\u5e8f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u5219\u66f4\u52a0\u7075\u6d3b\uff0c\u5b83\u662f\u6307\u5728\u4e0d\u540c\u8bbe\u5907\u7c7b\u578b\u4e0b\uff0c\u9875\u9762\u53ef\u4ee5\u901a\u8fc7\u9690\u85cf\u3001\u8c03\u6574\u5e03\u5c40\u548c\u6539\u53d8\u5143\u7d20\u7684\u6392\u5217\u987a\u5e8f\u7b49\u65b9\u5f0f\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u5c4f\u5e55\u5c3a\u5bf8\u548c\u8bbe\u5907\u7279\u6027\u3002\u5728\u54cd\u5e94\u5f0f\u5e03\u5c40\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u5a92\u4f53\u67e5\u8be2\u3001\u5f39\u6027\u5e03\u5c40\u548c\u5176\u4ed6\u6280\u672f\u624b\u6bb5\uff0c\u6839\u636e\u8bbe\u5907\u7684\u7279\u6027\u548c\u5c4f\u5e55\u5c3a\u5bf8\uff0c\u8c03\u6574\u9875\u9762\u7684\u5e03\u5c40\u548c\u6837\u5f0f\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"postcss",children:"postcss"}),"\n",(0,t.jsx)(n.p,{children:"\u672c\u6559\u7a0b\u901a\u8fc7rem\u7684\u65b9\u6848\u6765\u8fdb\u884c\u81ea\u9002\u5e94\uff0crem\u662f\u76f8\u5bf9\u6839\u5143\u7d20font-size\u7684\u5355\u4f4d\u3002\u4e3a\u4e86\u7b80\u5316\u7f16\u5199rem\u5355\u4f4d\uff0c\u53ef\u4ee5\u4f7f\u7528postcss\u63d2\u4ef6\u8fdb\u884c\u8f6c\u5316\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\u5b89\u88c5postcss\u63d2\u4ef6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install postcss postcss-pxtorem autoprefixer -D\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u521b\u5efapostcss.config.js\u6587\u4ef6\uff0c\u5e76\u5199\u5165\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="postcss.config.js"',children:"module.exports = {\n    plugins: {\n        tailwindcss: {},\n        autoprefixer: {},\n        'postcss-pxtorem': {\n            rootValue: 16,\n            propList: ['*', '!font-size']\n        }\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"rootValue\uff0c\u8868\u793a1rem\u7b49\u4e8e\u591a\u5c11px\uff0c\u8fd9\u91cc\u8bbe\u7f6e\u4e3a16px\u3002"}),"\n",(0,t.jsx)(n.li,{children:"propList\uff0c\u8868\u793a\u9700\u8981\u8f6c\u5316\u54ea\u4e9b\u5c5e\u6027\u3002\u8fd9\u91cc\u8bbe\u7f6e\u4e3a*\uff0c\u8868\u793a\u6240\u6709\u5c5e\u6027\u90fd\u9700\u8981\u8f6c\u5316\uff0c \u540c\u65f6!font-size\u8868\u793a\u4e0d\u8f6c\u5316font-size\u5c5e\u6027\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e2a\u4eba\u5efa\u8bae, \u4f7f\u7528\u81ea\u9002\u5e94\u5e03\u5c40\u548c\u54cd\u5e94\u5f0f\u5e03\u5c40\u6df7\u5408\u642d\u914d\u65f6\uff0c\u6700\u597d\u4e0d\u8981\u8f6c\u5316font-size\u4e3arem\uff0c\u907f\u514d\u51fa\u73b0\u5b57\u4f53\u5927\u5c0f\u8fc7\u5c0f\u7684\u60c5\u51b5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbe\u7f6e\u6839\u5143\u7d20fon-size",children:"\u8bbe\u7f6e\u6839\u5143\u7d20fon-size"}),"\n",(0,t.jsx)(n.p,{children:"\u5047\u8bbe\u8bbe\u8ba1\u7a3f\u7684\u5bbd\u5ea6\u662f1242px\uff0c\u90a3\u4e48\u6839\u5143\u7d20font-size\u7684\u503c\u4e3a\uff1a\u5c4f\u5e55\u5bbd\u5ea6 * 16 / 1242"}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7css\u8bbe\u7f6e\u6839\u5143\u7d20\u5b57\u4f53\u5927\u5c0f(\u63a8\u8350):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",metastring:'title="global.css"',children:"/* 1242\u4e0b\uff0c1rem = 16px */\nhtml {\n    font-size: calc(100vw * 16 / 1242);\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7js\u8bbe\u7f6e\u6839\u5143\u7d20\u5b57\u4f53\u5927\u5c0f:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app/page.jsx"',children:"function setFontSize() {\n  // \u83b7\u53d6\u5c4f\u5e55\u5bbd\u5ea6\n  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n\n  // \u6839\u636e\u5c4f\u5e55\u5bbd\u5ea6\u548c\u8bbe\u8ba1\u7a3f\u7684\u5c3a\u5bf8\u6bd4\u4f8b\u8ba1\u7b97\u5b57\u4f53\u5927\u5c0f\n  var fontSize = screenWidth / 10; // \u5047\u8bbe\u8bbe\u8ba1\u7a3f\u5bbd\u5ea6\u4e3a10rem\n\n  // \u8bbe\u7f6eHTML\u5143\u7d20\u7684\u5b57\u4f53\u5927\u5c0f\n  document.documentElement.style.fontSize = fontSize + 'px';\n}\n\nsetFontSize();\nwindow.addEventListener('resize', setFontSize);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},4506:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(6372);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);