"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[8493],{5677:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>x});var r=s(216),t=s(4506);const o={sidebar_position:5},i="NextResponse",l={id:"nextjs/server-api/NextResponse",title:"NextResponse",description:"NextResponse \u6269\u5c55\u4e86 Web Response API",source:"@site/docs/nextjs/08.server-api/05.NextResponse.md",sourceDirName:"nextjs/08.server-api",slug:"/nextjs/server-api/NextResponse",permalink:"/ChBlog/en/docs/nextjs/server-api/NextResponse",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/08.server-api/05.NextResponse.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"middleware",permalink:"/ChBlog/en/docs/nextjs/server-api/middleware"},next:{title:"generateMetadata",permalink:"/ChBlog/en/docs/nextjs/server-data/generateMetadata"}},p={},x=[{value:"new NextResponse()",id:"new-nextresponse",level:2},{value:"NextResponse.json()",id:"nextresponsejson",level:2},{value:"NextResponse.redirect()",id:"nextresponseredirect",level:2},{value:"NextResponse.rewrite()",id:"nextresponserewrite",level:2},{value:"NextResponse.next()",id:"nextresponsenext",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nextresponse",children:"NextResponse"}),"\n",(0,r.jsxs)(n.p,{children:["NextResponse \u6269\u5c55\u4e86 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/Response",children:"Web Response API"})]}),"\n",(0,r.jsx)(n.h2,{id:"new-nextresponse",children:"new NextResponse()"}),"\n",(0,r.jsx)(n.p,{children:"new NextResponse(body, options) \u6784\u9020\u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 Response \u5bf9\u8c61\u3002\nbody \u53ef\u4ee5\u662f:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Blob"}),"\n",(0,r.jsx)(n.li,{children:"Buffer"}),"\n",(0,r.jsx)(n.li,{children:"FormData"}),"\n",(0,r.jsx)(n.li,{children:"ReadableStream"}),"\n",(0,r.jsx)(n.li,{children:"URLSearchParams"}),"\n",(0,r.jsx)(n.li,{children:"String"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NextResponse } from 'next/server'\n\nexport function middleware(request: NextRequest) {\n    return new NextResponse('Hello world', {status: 200})\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nextresponsejson",children:"NextResponse.json()"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56dejson\u683c\u5f0f\u7684\u54cd\u5e94"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NextResponse } from 'next/server'\n \nexport async function middleware(request) {\n  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nextresponseredirect",children:"NextResponse.redirect()"}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u5b9a\u5411\u5230\u6307\u5b9aurl"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NextResponse } from 'next/server'\n \nexport async function middleware(request) {\n    return NextResponse.redirect(new URL('/new', request.url))\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nextresponserewrite",children:"NextResponse.rewrite()"}),"\n",(0,r.jsx)(n.p,{children:"\u91cd\u5199\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NextResponse } from 'next/server'\n \n import { NextResponse } from 'next/server'\n \nexport async function middleware(request) {\n    return NextResponse.rewrite(new URL('/proxy', request.url))\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"nextresponsenext",children:"NextResponse.next()"}),"\n",(0,r.jsx)(n.p,{children:"\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6\uff0c\u540c\u65f6\u8fd4\u56de\u54cd\u5e94"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { NextResponse } from 'next/server'\n \n\nexport async function GET(request) {\n    const response = NextResponse.next()\n    response.cookies.set('show-banner', 'false')\n    return response;\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4506:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(6372);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);