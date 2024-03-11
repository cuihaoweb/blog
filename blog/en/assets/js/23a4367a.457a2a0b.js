"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[2426],{6808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(216),s=n(4506),a=n(2420),l=n(3760);const o={sidebar_position:4},i="loading\u52a0\u8f7d",u={id:"nextjs/router/loading",title:"loading\u52a0\u8f7d",description:"loading.js \u53ef\u4ee5\u5e2e\u52a9\u4f60\u4f7f\u7528React Suspense\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6, \u5f53\u4f60\u5728\u52a0\u8f7d\u8def\u7531\u5185\u5bb9\u65f6\uff0c\u5b83\u4f1a\u663e\u793a\u8be5\u52a0\u8f7d\u72b6\u6001\u7ec4\u4ef6\uff0c\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u81ea\u52a8\u66ff\u6362\u3002",source:"@site/docs/nextjs/03.router/04.loading.md",sourceDirName:"nextjs/03.router",slug:"/nextjs/router/loading",permalink:"/ChBlog/en/docs/nextjs/router/loading",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/03.router/04.loading.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"404\u9875\u9762",permalink:"/ChBlog/en/docs/nextjs/router/not-found"},next:{title:"\u52a8\u6001\u8def\u7531",permalink:"/ChBlog/en/docs/nextjs/router/dynamic-routes"}},c={},d=[{value:"\u4f20\u7edfssr\u6e32\u67d3\u6d41\u7a0b",id:"\u4f20\u7edfssr\u6e32\u67d3\u6d41\u7a0b",level:2},{value:"\u6d41\u5f0f\u6e32\u67d3",id:"\u6d41\u5f0f\u6e32\u67d3",level:2},{value:"Suspense",id:"suspense",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"loading\u52a0\u8f7d",children:"loading\u52a0\u8f7d"}),"\n",(0,r.jsx)(t.p,{children:"loading.js \u53ef\u4ee5\u5e2e\u52a9\u4f60\u4f7f\u7528React Suspense\u521b\u5efa\u4e00\u4e2a\u7ec4\u4ef6, \u5f53\u4f60\u5728\u52a0\u8f7d\u8def\u7531\u5185\u5bb9\u65f6\uff0c\u5b83\u4f1a\u663e\u793a\u8be5\u52a0\u8f7d\u72b6\u6001\u7ec4\u4ef6\uff0c\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u65b0\u7684\u5185\u5bb9\u5c06\u4f1a\u81ea\u52a8\u66ff\u6362\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u4f20\u7edfssr\u6e32\u67d3\u6d41\u7a0b",children:"\u4f20\u7edfssr\u6e32\u67d3\u6d41\u7a0b"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"ssr-render-process",src:n(9567).A+"",width:"1600",height:"612"}),"\n\u4f20\u7edf\u7684ssr\u6e32\u67d3\u6d41\u7a0b\uff0c\u5f53\u7528\u6237\u8bf7\u6c42\u4e00\u4e2a\u9875\u9762\u65f6\uff0c\u670d\u52a1\u5668\u4f1a\u6839\u636e\u8def\u7531\u5339\u914d\u5230\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u7136\u540e\u6e32\u67d3\u8be5\u7ec4\u4ef6\uff0c\u6700\u540e\u5c06\u6e32\u67d3\u540e\u7684html\u8fd4\u56de\u7ed9\u7528\u6237\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u5982\u679c\u7ec4\u4ef6\u4e2d\u5b58\u5728\u5f02\u6b65\u6570\u636e\uff0c\u90a3\u4e48\u670d\u52a1\u7aef\u4f1a\u7b49\u5f85\u5f02\u6b65\u6570\u636e\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\u518d\u6e32\u67d3\uff0c\u8fd9\u6837\u53ef\u80fd\u4f1a\u5bfc\u81f4\u9875\u9762\u767d\u5c4f\u65f6\u95f4\u8f83\u957f\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u800cnext.js\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b0\u7684\u6e32\u67d3\u65b9\u5f0f\uff0c\u5373\u6d41\u5f0f\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u6d41\u5f0f\u6e32\u67d3",children:"\u6d41\u5f0f\u6e32\u67d3"}),"\n",(0,r.jsxs)(t.p,{children:["\u6240\u8c13\u7684\u6d41\u5f0f\u6e32\u67d3\uff0c\u5c31\u662f\u628a\u4e00\u4e2a\u7ec4\u4ef6\u62c6\u5206\u6210\u591a\u4e2a\u5c0f\u5757\uff0c\u7136\u540e\u5206\u5757\u6e32\u67d3\u3002\n",(0,r.jsx)(t.img,{alt:"ssr-rendering-with-streaming",src:n(1536).A+"",width:"1600",height:"785"}),"\n\u8fd9\u6837\u7684\u8bdd\uff0c\u5f53\u5ba2\u6237\u7aef\u8bf7\u6c42\u9875\u9762\u65f6\u4f1a\u4f18\u5148\u5c55\u793a\u9759\u6001\u5185\u5bb9\uff0c\u7b49\u5230\u670d\u52a1\u7aef\u5f02\u6b65\u6570\u636e\u52a0\u8f7d\u5b8c\u6210\u5e76\u6e32\u67d3\u6210\u529f\u540e\uff0c\u5ba2\u6237\u7aef\u518d\u7ee7\u7eed\u6e32\u67d3\u5269\u4f59\u7684\u5185\u5bb9\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4f46\u662f\uff0c\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff0c\u6d41\u5f0f\u6e32\u67d3\u5e76\u4e0d\u4f1a\u63d0\u9ad8\u6574\u4e2a\u9875\u9762\u7684\u52a0\u8f7d\u901f\u5ea6\uff0c\u53ea\u662f\u5c06\u767d\u5c4f\u65f6\u95f4\u7f29\u77ed\u4e86\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"suspense",children:"Suspense"}),"\n",(0,r.jsx)(t.p,{children:"Next.js\u63d0\u4f9b\u7684Suspense\u7ec4\u4ef6\u548c\u4f20\u7edf\u7684spa\u4e2d\u4f7f\u7528\u7684Suspense\u7ec4\u4ef6\u662f\u4e0d\u540c\u7684\u3002"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u4f20\u7edfspa\u4e2d\u7684Suspense\u7ec4\u4ef6\u9700\u8981\u642d\u914dReact\u63d0\u4f9b\u7684lazy\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(t.li,{children:"Next.js\u4e2d\u7684Suspense\u7ec4\u4ef6\u5219\u662f\u7528\u4e8e\u52a0\u8f7d\u5f02\u6b65\u6570\u636e\u7684\uff0c\u4e0d\u9700\u8981\u642d\u914dlazy\u51fd\u6570\uff0c\u5f53\u5f02\u6b65\u7ec4\u4ef6\u6e32\u67d3\u5b8c\u6210\u65f6\uff0c\u4f1a\u663e\u793a\u8be5\u7ec4\u4ef6\u4e2d\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(t.li,{children:"\u8fd8\u9700\u8981\u6ce8\u610f\u4e00\u70b9\uff0cNext.js\u4e2d\u7684Suspense\u5e76\u4e0d\u4f1a\u4e3b\u52a8\u5206\u5305\uff0c\u800cspa\u4e2d\u7684\u4f1a\u6839\u636eimport\u51fd\u6570\u4e2d\u7684path\u81ea\u52a8\u5206\u5305\uff0c\u8fd9\u4e00\u70b9\u9700\u8981\u989d\u5916\u6ce8\u610f\u3002"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(l.A,{value:"post",label:"post",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:'showLineNumbers title="app/post/page.js"',children:"import { Suspense } from 'react'\nimport { PostFeed, Weather } from './Components'\n\nexport default function Posts() {\n    return (\n        <section>\n            <Suspense fallback={<p>Loading feed...</p>}>\n                <PostFeed />\n            </Suspense>\n            <Suspense fallback={<p>Loading weather...</p>}>\n                <Weather />\n            </Suspense>\n        </section>\n    )\n}\n"})})}),(0,r.jsx)(l.A,{value:"PostFeed",label:"PostFeed",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"showLineNumbers",children:"export default async function PostFeed() {\n    const list = await fetch('https://xxx')\n    return (<pre>list</pre>)\n}\n"})})}),(0,r.jsx)(l.A,{value:"Weather",label:"Weather",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-jsx",metastring:"showLineNumbers",children:"export default async function Weather() {\n    const list = await fetch('https://xxx')\n    return (<pre>list</pre>)\n}\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3760:(e,t,n)=>{n.d(t,{A:()=>l});n(6372);var r=n(3394);const s={tabItem:"tabItem_TPIr"};var a=n(216);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},2420:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6372),s=n(3394),a=n(6905),l=n(9551),o=n(9705),i=n(8578),u=n(9931),c=n(7113);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(9323);const x={tabList:"tabList_z6kg",tabItem:"tabItem_Y5Xp"};var g=n(216);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=o[n].value;s!==r&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1536:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/server-rendering-with-streaming-160fb94441120891c72ab20d3af34f81.avif"},9567:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/server-rendering-without-streaming-chart-39ba9057b3515423c388bd0acb89616a.avif"},4506:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6372);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);