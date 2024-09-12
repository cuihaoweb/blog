"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[1946],{5164:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(216),s=t(4506);const o={sidebar_position:2},c="\u5ba2\u6237\u7aef\u7ec4\u4ef6",r={id:"nextjs/rendering/client-component",title:"\u5ba2\u6237\u7aef\u7ec4\u4ef6",description:"\u5ba2\u6237\u7aef\u7ec4\u4ef6\u5141\u8bb8\u60a8\u5728\u670d\u52a1\u5668\u4e0a\u7f16\u5199\u53ef\u4ea4\u4e92\u7684 UI\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668api.",source:"@site/docs/nextjs/05.rendering/02.client-component.md",sourceDirName:"nextjs/05.rendering",slug:"/nextjs/rendering/client-component",permalink:"/ChBlog/docs/nextjs/rendering/client-component",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/05.rendering/02.client-component.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u670d\u52a1\u7aef\u7ec4\u4ef6",permalink:"/ChBlog/docs/nextjs/rendering/server-compnent"},next:{title:"\u6df7\u5408\u7ec4\u4ef6\u6a21\u5f0f",permalink:"/ChBlog/docs/nextjs/rendering/composition-component"}},l={},d=[{value:"\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7279\u70b9",id:"\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7279\u70b9",level:2},{value:"use client",id:"use-client",level:2},{value:"\u907f\u514d\u5d4c\u5957\u670d\u52a1\u7aef\u7ec4\u4ef6",id:"\u907f\u514d\u5d4c\u5957\u670d\u52a1\u7aef\u7ec4\u4ef6",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u5ba2\u6237\u7aef\u7ec4\u4ef6",children:"\u5ba2\u6237\u7aef\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7ec4\u4ef6\u5141\u8bb8\u60a8\u5728\u670d\u52a1\u5668\u4e0a\u7f16\u5199\u53ef\u4ea4\u4e92\u7684 UI\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668api."}),"\n",(0,i.jsx)(n.h2,{id:"\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7279\u70b9",children:"\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7279\u70b9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4ea4\u4e92\u6027\uff1a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528useState\u3001useEffect\u7b49 React Hook\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668 API\uff1a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u53ef\u4ee5\u8bbf\u95ee\u6d4f\u89c8\u5668 API\uff0c\u4f8b\u5982 window\u3001document \u7b49\u3002"}),"\n",(0,i.jsx)(n.li,{children:"hydrate\uff1a\u7531\u4e8e\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7ec4\u4ef6\u662f\u9759\u6001\u7684\uff0c\u56e0\u6b64\u5728\u5ba2\u6237\u7aef\u6e32\u67d3\u65f6\uff0c\u8fd8\u9700\u8981\u52a0\u8f7djs\u6587\u4ef6\uff0c\u4f7f\u5f97\u7ec4\u4ef6\u80fd\u591f\u4e0e\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-client",children:"use client"}),"\n",(0,i.jsx)(n.p,{children:'"use client" \u7528\u4e8e\u58f0\u660e\u5f53\u524d\u7ec4\u4ef6\u4e3a\u5ba2\u6237\u7aef\u7ec4\u4ef6\u3002'}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u670d\u52a1\u7aef\u7ec4\u4ef6\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528react/client\u76f8\u5173\u7684\u7684api, \u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668 api\u3002"}),"\n",(0,i.jsx)(n.p,{children:'\u4f46\u662f\uff0c "use client" \u7684\u6587\u4ef6\u4e2d\u6240\u6709\u7684\u6a21\u5757\u90fd\u4f1a\u88ab\u6253\u5305\u8fdb bundle \u4e2d\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5e94\u8be5\u5c3d\u53ef\u80fd\u5730\u51cf\u5c11\u5ba2\u6237\u7aef\u7ec4\u4ef6\u7684\u4f7f\u7528\uff0c\u8fdb\u800c\u51cf\u5c11bundle\u7684\u4f53\u79ef\u3002'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"// highlight-next-line\n'use client'\n\nimport { useState } from 'react'\n \nexport default function Counter() {\n  const [count, setCount] = useState(0)\n \n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  )\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u907f\u514d\u5d4c\u5957\u670d\u52a1\u7aef\u7ec4\u4ef6",children:"\u907f\u514d\u5d4c\u5957\u670d\u52a1\u7aef\u7ec4\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7ec4\u4ef6\u4e2d\u662f\u7981\u6b62\u5d4c\u5957\u670d\u52a1\u7aef\u7ec4\u4ef6\u7684\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u7ec4\u4ef6\u4e2d\u662f\u53ef\u4ee5\u5d4c\u5957\u5ba2\u6237\u7aef\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u6df7\u7528\u7684\u6a21\u5f0f\u6211\u4eec\u79f0\u4e4b\u4e3a",(0,i.jsx)(n.a,{href:"./composition-component",children:"composition component"}),"\uff0c\u4e0b\u4e00\u7ae0\u8282\u5c06\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},4506:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(6372);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);