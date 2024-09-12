"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[2413],{7226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(216),r=t(4506);const i={sidebar_position:12},o="\u6784\u5efa",d={id:"nextjs/build",title:"\u6784\u5efa",description:"\u6784\u5efa Next.js \u5e94\u7528\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 npm run build \u547d\u4ee4\uff0c\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u5728\u6839\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a .next(\u8be5\u8f93\u51fa\u76ee\u5f55\u53ef\u4ee5\u624b\u52a8\u4fee\u6539) \u6587\u4ef6\u5939\u3002",source:"@site/docs/nextjs/12.build.md",sourceDirName:"nextjs",slug:"/nextjs/build",permalink:"/ChBlog/en/docs/nextjs/build",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/12.build.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"next.config.js",permalink:"/ChBlog/en/docs/nextjs/configure/next.configjs"},next:{title:"\u9759\u6001\u90e8\u7f72",permalink:"/ChBlog/en/docs/nextjs/deploy/static-deploy"}},l={},c=[];function a(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6784\u5efa",children:"\u6784\u5efa"}),"\n",(0,s.jsxs)(n.p,{children:["\u6784\u5efa Next.js \u5e94\u7528\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"npm run build"})," \u547d\u4ee4\uff0c\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u4f1a\u5728\u6839\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:".next"}),"(\u8be5\u8f93\u51fa\u76ee\u5f55\u53ef\u4ee5\u624b\u52a8\u4fee\u6539) \u6587\u4ef6\u5939\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u6211\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u603b\u7ed3\u7684\u4e00\u4e9b\u6784\u5efa\u4f18\u5316\u914d\u7f6e\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="next.config.js"',children:"import bundleAnalyzer from '@next/bundle-analyzer';\n\nconst isProd = process.env.NODE_ENV === 'production';\n\n// \u7528\u4e8e\u5206\u6790 Next.js \u5e94\u7528\u6253\u5305\u540e\u7684\u6587\u4ef6\u5927\u5c0f\uff08\u53ef\u9009\uff09\nconst withBundleAnalyzer = bundleAnalyzer({\n    enabled: process.env.ANALYZE === 'true',\n    openAnalyzer: true,\n    analyzerMode: 'static'\n});\n\n/** @type {import('next').NextConfig} */\nconst nextConfig = {\n    output: 'export',\n    distDir: isProd ? 'dist' : '.next',\n    assetPrefix: isProd ? '/next' : '/next',\n    cacheMaxMemorySize: 60 * 1024, // \u8bbe\u7f6e\u7f13\u5b58\u6700\u5927\u5185\u5b58\u4e3a60MB\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\n    typescript: {\n        ignoreBuildErrors: true // \u5ffd\u7565ts\u6784\u5efa\u9519\u8bef\n    },\n    eslint: {\n        ignoreDuringBuilds: true // \u5ffd\u7565eslint\u6784\u5efa\u9519\u8bef\n    }\n};\n\nexport default withBundleAnalyzer(nextConfig);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u6211\u4f7f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"@next/bundle-analyzer"})," \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5206\u6790 Next.js \u5e94\u7528\u6253\u5305\u540e\u7684\u6587\u4ef6\u5927\u5c0f\u3002\n\u5176\u5b9e Next.js \u672c\u8eab\u7684\u4ee3\u7801\u5206\u5272\u529f\u80fd\u5df2\u7ecf\u8db3\u591f\u5f3a\u5927\uff0c\u4e0d\u9700\u8981\u6211\u4eec\u518d\u505a\u989d\u5916\u7684\u4f18\u5316\uff0c\u4f46\u662f\u4e0d\u6392\u9664\u6709\u7528\u6237\u5173\u5fc3\u6253\u5305\u540e\u7684\u6587\u4ef6\u5927\u5c0f\uff0c\u6240\u4ee5\u8fd9\u91cc\u7ed9\u51fa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5b89\u88c5 ",(0,s.jsx)(n.code,{children:"@next/bundle-analyzer"})," \u63d2\u4ef6\uff1a",(0,s.jsx)(n.code,{children:"npm i @next/bundle-analyzer"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:'"analyze": "ANALYZE=true next build"'})," \u547d\u4ee4\uff0c\u7528\u4e8e\u5f00\u542f\u5206\u6790\u529f\u80fd"]}),"\n",(0,s.jsxs)(n.li,{children:["\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"npm run analyze"})," \u547d\u4ee4\uff0c\u67e5\u770b\u5206\u6790\u7ed3\u679c"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4506:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(6372);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);