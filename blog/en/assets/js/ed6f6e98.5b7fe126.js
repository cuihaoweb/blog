"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[2932],{256:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(216),o=t(4506);const i={sidebar_position:4},r="\u5ef6\u8fdf\u52a0\u8f7d",c={id:"nextjs/client-api/lazy-load",title:"\u5ef6\u8fdf\u52a0\u8f7d",description:"next.js \u5141\u8bb8\u4f60\u5ef6\u8fdf\u52a0\u8f7d\u5ba2\u6237\u7aef\u7ec4\u4ef6\u548c\u5bfc\u5165\u7684\u5e93\uff0c\u4ec5\u5728\u9700\u8981\u65f6\u624d\u4f1a\u52a0\u8f7d\u5b83\u4eec\u3002",source:"@site/docs/nextjs/07.client-api/04.lazy-load.md",sourceDirName:"nextjs/07.client-api",slug:"/nextjs/client-api/lazy-load",permalink:"/ChBlog/en/docs/nextjs/client-api/lazy-load",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/07.client-api/04.lazy-load.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"useRouter",permalink:"/ChBlog/en/docs/nextjs/client-api/useRouter"},next:{title:"fetch",permalink:"/ChBlog/en/docs/nextjs/server-api/fetch"}},a={},l=[{value:"dynamic()",id:"dynamic",level:2},{value:"ssr \u9636\u6bb5\u5ef6\u8fdf\u52a0\u8f7d\u7684\u610f\u4e49",id:"ssr-\u9636\u6bb5\u5ef6\u8fdf\u52a0\u8f7d\u7684\u610f\u4e49",level:2},{value:"\u8df3\u8fc7 ssr",id:"\u8df3\u8fc7-ssr",level:2},{value:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b",id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b",level:2},{value:"\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5e93",id:"\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5e93",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5ef6\u8fdf\u52a0\u8f7d",children:"\u5ef6\u8fdf\u52a0\u8f7d"}),"\n",(0,s.jsx)(e.p,{children:"next.js \u5141\u8bb8\u4f60\u5ef6\u8fdf\u52a0\u8f7d\u5ba2\u6237\u7aef\u7ec4\u4ef6\u548c\u5bfc\u5165\u7684\u5e93\uff0c\u4ec5\u5728\u9700\u8981\u65f6\u624d\u4f1a\u52a0\u8f7d\u5b83\u4eec\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"dynamic",children:"dynamic()"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"'use client'\nimport { useState } from 'react'\nimport dynamic from 'next/dynamic'\n \nconst ComponentA = dynamic(() => import('../components/A'))\nconst ComponentB = dynamic(() => import('../components/B'))\nconst ComponentC = dynamic(() => import('../components/C'), { ssr: false })\n \nexport default function ClientComponentExample() {\n    const [showMore, setShowMore] = useState(false)\n\n    return (\n        <div>\n            <ComponentA />\n        \n            {showMore && <ComponentB />}\n            <button onClick={() => setShowMore(!showMore)}>Toggle</button>\n\n            <ComponentC />\n        </div>\n    )\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u52a8\u6001\u52a0\u8f7d\u4e86\u4e09\u4e2a\u7ec4\u4ef6\uff0cComponentA\u3001ComponentB \u548c ComponentC\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4e2d ComponentA \u548c ComponentB \u662f\u5728 SSR \u9636\u6bb5\u8fdb\u884c\u7684\u6e32\u67d3\uff0cComponentC \u5219\u662f\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u8fdb\u884c\u7684\u6e32\u67d3\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"ssr-\u9636\u6bb5\u5ef6\u8fdf\u52a0\u8f7d\u7684\u610f\u4e49",children:"ssr \u9636\u6bb5\u5ef6\u8fdf\u52a0\u8f7d\u7684\u610f\u4e49"}),"\n",(0,s.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cdynamic \u7684\u7ec4\u4ef6\u662f\u5728 SSR \u9636\u6bb5\u8fdb\u884c\u6e32\u67d3\uff0c\u53ef\u80fd\u6709\u7684\u5c0f\u4f19\u4f34\u4f1a\u95ee\uff0c\u8fd9\u6837\u505a\u7684\u610f\u4e49\u662f\u4ec0\u4e48\u5462\uff1f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6d41\u5f0f\u52a0\u8f7d\uff0c\u9996\u5148\uff0cssr\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u53ef\u4ee5\u907f\u514d\u56e0\u4e3a\u67d0\u4e2a\u7ec4\u4ef6\u52a0\u8f7d\u65f6\u95f4\u8fc7\u957f\uff0c\u800c\u5bfc\u81f4\u6574\u4e2a\u9875\u9762\u52a0\u8f7d\u65f6\u95f4\u8fc7\u957f\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u4ee3\u7801\u5206\u5272\uff0c\u5176\u6b21\uff0c\u53ef\u4ee5\u5c06\u5ba2\u6237\u7aef\u7ec4\u4ef6\u7684 bundle \u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u62c6\u5206\uff0c\u907f\u514d\u5355\u4e2a bundle \u8fc7\u5927\uff0c\u8fdb\u800c\u5f71\u54cd\u9875\u9762\u7684\u52a0\u8f7d\u901f\u5ea6\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8df3\u8fc7-ssr",children:"\u8df3\u8fc7 ssr"}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u5b9e\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5e76\u4e0d\u5e0c\u671b\u7ec4\u4ef6\u5728 SSR \u9636\u6bb5\u8fdb\u884c\u6e32\u67d3\uff0c\u800c\u662f\u671f\u671b\u5728\u5ba2\u6237\u7aef\u8fd0\u884c\u65f6\u8fdb\u884c\u6e32\u67d3\uff0c\u8fdb\u800c\u51cf\u5c11 SSR \u9636\u6bb5\u7684\u6e32\u67d3\u65f6\u95f4\uff0c\u63d0\u9ad8\u9875\u9762\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ssr \u53c2\u6570\u6765\u8fdb\u884c\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"const ComponentC = dynamic(() => import('../components/C'), { ssr: false })\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b",children:"\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b\uff0c\u901a\u8fc7 dynamic \u7684 loading \u53c2\u6570\u6765\u8fdb\u884c\u8bbe\u7f6e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"import dynamic from 'next/dynamic'\n\nconst WithCustomLoading = dynamic(\n    () => import('../components/WithCustomLoading'),\n    {\n        loading: () => <p>Loading...</p>,\n    }\n)\n\nexport default function Page() {\n    return (\n        <div>\n            <WithCustomLoading />\n        </div>\n    )\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5e93",children:"\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5e93"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u8fb9\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u5ef6\u8fdf\u52a0\u8f7d\u5ba2\u6237\u7aef\u7ec4\u4ef6\uff0c\u90a3\u4e48\u5982\u4f55\u5ef6\u8fdf\u52a0\u8f7d\u7b2c\u4e09\u65b9\u5e93\u5462\uff1f"}),"\n",(0,s.jsxs)(e.p,{children:["\u5f88\u7b80\u5355\uff0c\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"import()"})," \u51fd\u6570\u5c31\u80fd\u5b9e\u73b0\u7b2c\u4e09\u65b9\u5e93\u7684\u5ef6\u8fdf\u52a0\u8f7d\uff0c\u8fdb\u800c\u907f\u514d\u5728 SSR \u9636\u6bb5\u52a0\u8f7d\u4e0d\u5fc5\u8981\u7684\u7b2c\u4e09\u65b9\u5e93\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-jsx",children:"'use client'\nimport { useState } from 'react'\n\nconst names = ['Tim', 'Joe', 'Bel', 'Lee']\n \nexport default function Page() {\n    const [results, setResults] = useState()\n    \n    return (\n        <div>\n            <input\n                type=\"text\"\n                placeholder=\"Search\"\n                onChange={async e => {\n                    const { value } = e.currentTarget\n\n                    const Fuse = (await import('fuse.js')).default\n\n                    const fuse = new Fuse(names)\n                    setResults(fuse.search(value))\n                }}\n            />\n            <pre>Results: {JSON.stringify(results, null, 2)}</pre>\n        </div>\n    )\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},4506:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>c});var s=t(6372);const o={},i=s.createContext(o);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);