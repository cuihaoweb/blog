"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[130],{6231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(216),c=t(4506);const i={sidebar_position:1},r="fetch",o={id:"nextjs/server-api/fetch",title:"fetch",description:"Next.js \u6269\u5c55\u4e86 Web api \u7684 fetch() API\uff0c\u5141\u8bb8\u670d\u52a1\u5668\u4e0a\u7684\u6bcf\u4e2a\u8bf7\u6c42\u8bbe\u7f6e\u81ea\u5df1\u7684\u6301\u4e45\u6027\u7f13\u5b58\u3002",source:"@site/docs/nextjs/08.server-api/01.fetch.md",sourceDirName:"nextjs/08.server-api",slug:"/nextjs/server-api/fetch",permalink:"/ChBlog/en/docs/nextjs/server-api/fetch",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/08.server-api/01.fetch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"useRouter",permalink:"/ChBlog/en/docs/nextjs/client-api/useRouter"},next:{title:"cookies",permalink:"/ChBlog/en/docs/nextjs/server-api/cookies"}},a={},l=[{value:"fetch(url, options)",id:"fetchurl-options",level:2},{value:"options.cache",id:"optionscache",level:3},{value:"options.next.revalidate",id:"optionsnextrevalidate",level:3},{value:"options.next.tags",id:"optionsnexttags",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fetch",children:"fetch"}),"\n",(0,s.jsx)(n.p,{children:"Next.js \u6269\u5c55\u4e86 Web api \u7684 fetch() API\uff0c\u5141\u8bb8\u670d\u52a1\u5668\u4e0a\u7684\u6bcf\u4e2a\u8bf7\u6c42\u8bbe\u7f6e\u81ea\u5df1\u7684\u6301\u4e45\u6027\u7f13\u5b58\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"export default async function Page() {\n  // `force-cache` \u662f\u9ed8\u8ba4\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u5ffd\u7565\n  const staticData = await fetch(`https://...`, { cache: 'force-cache' })\n \n  // \u8fd9\u4e2a\u8bf7\u6c42\u4e0d\u4f1a\u88ab\u7f13\u5b58\n  const dynamicData = await fetch(`https://...`, { cache: 'no-store' })\n \n  // \u6b64\u8bf7\u6c42\u4f1a\u88ab\u7f13\u5b5810\u79d2\n  const revalidatedData = await fetch(`https://...`, {next: { revalidate: 10 }})\n \n  return <div>...</div>\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"fetchurl-options",children:"fetch(url, options)"}),"\n",(0,s.jsx)(n.h3,{id:"optionscache",children:"options.cache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"fetch(`https://...`, { cache: 'force-cache' | 'no-store' })\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"force-cache"}),": (\u9ed8\u8ba4)\uff0c\u5f3a\u5236\u7f13\u5b58\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"no-store"}),": \u4e0d\u7f13\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"optionsnextrevalidate",children:"options.next.revalidate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"fetch(`https://...`, { next: { revalidate: false | 0 | number } })\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e\u8d44\u6e90\u7684\u7f13\u5b58\u751f\u5b58\u671f\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"false"}),", \u65e0\u9650\u671f\u7f13\u5b58\u8d44\u6e90\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0"}),", \u9632\u6b62\u8d44\u6e90\u88ab\u7f13\u5b58\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"number"}),", \uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u6307\u5b9a\u8d44\u6e90\u7684\u7f13\u5b58\u751f\u5b58\u671f\u5e94\u4e3a\u6700\u591a n \u79d2\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"optionsnexttags",children:"options.next.tags"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"fetch(`https://...`, { next: { tags: ['collection'] } })\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e\u8d44\u6e90\u7684\u7f13\u5b58\u6807\u7b7e\u3002\u53ef\u4ee5\u4f7f\u7528 revalidateTag \u91cd\u65b0\u9a8c\u8bc1\u6570\u636e\u3002\u81ea\u5b9a\u4e49\u6807\u7b7e\u7684\u6700\u5927\u957f\u5ea6\u4e3a 256 \u4e2a\u5b57\u7b26\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4506:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6372);const c={},i=s.createContext(c);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);