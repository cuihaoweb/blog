"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[9403],{3587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(216),r=t(4506),a=t(2420),l=t(3760);const i={sidebar_position:1},c="UI\u7ec4\u4ef6\u5e93\u7684\u9009\u62e9",o={id:"nextjs/styling/ui-component",title:"UI\u7ec4\u4ef6\u5e93\u7684\u9009\u62e9",description:"\u9009\u62e9\u9002\u5408\u81ea\u5df1\u9879\u76ee\u7684UI\u7ec4\u4ef6\u5e93\u662f\u524d\u7aef\u5f00\u53d1\u4e2d\u81f3\u5173\u91cd\u8981\u7684\u51b3\u7b56, \u4e00\u4e2a\u4f18\u79c0\u7684UI\u7ec4\u4ef6\u5e93\u53ef\u4ee5\u63d0\u4f9b\u4e30\u5bcc\u7684\u754c\u9762\u5143\u7d20\u548c\u529f\u80fd\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u5feb\u901f\u6784\u5efa\u73b0\u4ee3\u5316\u7684\u7528\u6237\u754c\u9762\u3002",source:"@site/docs/nextjs/04.styling/01.ui-component.md",sourceDirName:"nextjs/04.styling",slug:"/nextjs/styling/ui-component",permalink:"/ChBlog/docs/nextjs/styling/ui-component",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nextjs/04.styling/01.ui-component.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"loading\u52a0\u8f7d",permalink:"/ChBlog/docs/nextjs/router/loading"}},u={},d=[{value:"css-in-js\u7ec4\u4ef6\u5e93",id:"css-in-js\u7ec4\u4ef6\u5e93",level:2},{value:"\u63a8\u8350\u7684UI\u7ec4\u4ef6\u5e93",id:"\u63a8\u8350\u7684ui\u7ec4\u4ef6\u5e93",level:2},{value:"\u53c2\u8003\uff1a",id:"\u53c2\u8003",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ui\u7ec4\u4ef6\u5e93\u7684\u9009\u62e9",children:"UI\u7ec4\u4ef6\u5e93\u7684\u9009\u62e9"}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u62e9\u9002\u5408\u81ea\u5df1\u9879\u76ee\u7684UI\u7ec4\u4ef6\u5e93\u662f\u524d\u7aef\u5f00\u53d1\u4e2d\u81f3\u5173\u91cd\u8981\u7684\u51b3\u7b56, \u4e00\u4e2a\u4f18\u79c0\u7684UI\u7ec4\u4ef6\u5e93\u53ef\u4ee5\u63d0\u4f9b\u4e30\u5bcc\u7684\u754c\u9762\u5143\u7d20\u548c\u529f\u80fd\u7ec4\u4ef6\uff0c\u5e2e\u52a9\u5feb\u901f\u6784\u5efa\u73b0\u4ee3\u5316\u7684\u7528\u6237\u754c\u9762\u3002\n\u5728\u505a\u51fa\u9009\u62e9\u4e4b\u524d\uff0c\u9700\u8981\u4ed4\u7ec6\u8bc4\u4f30\u9879\u76ee\u9700\u6c42\u548c\u76ee\u6807\uff0c\u8003\u8651\u5230\u7ec4\u4ef6\u5e93\u7684\u53ef\u5b9a\u5236\u6027\u3001\u6613\u7528\u6027\u3001\u6027\u80fd\u548c\u517c\u5bb9\u6027\u7b49\u65b9\u9762\u3002\n\u901a\u8fc7\u9009\u62e9\u5408\u9002\u7684UI\u7ec4\u4ef6\u5e93\uff0c\u53ef\u4ee5\u5927\u5927\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u548c\u7528\u6237\u4f53\u9a8c\uff0c\u4e3a\u9879\u76ee\u7684\u6210\u529f\u5960\u5b9a\u57fa\u7840\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"css-in-js\u7ec4\u4ef6\u5e93",children:"css-in-js\u7ec4\u4ef6\u5e93"}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u5b9e\u6211\u5e76\u4e0d\u592a\u63a8\u8350\u4f7f\u7528css-in-js\u7ec4\u4ef6\u5e93\uff0c\u56e0\u4e3acss-in-js\u7ec4\u4ef6\u5e93\u7684\u6837\u5f0f\u662f\u4f7f\u7528js\u4ee3\u7801\u52a8\u6001\u751f\u6210\u7684\uff0c\u8fd9\u4f1a\u5e26\u6765\u4e00\u4e9b\u6027\u80fd\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["\u6700\u4e3a\u91cd\u8981\u7684\u4e00\u70b9\u5c31\u662f\uff0cssr\u6e32\u67d3css-in-js\u7ec4\u4ef6\u662f\u4f1a\u51fa\u73b0 ",(0,s.jsx)(n.code,{children:"\u9875\u9762\u95ea\u70c1!!!"}),"\uff0c\u7531\u4e8ecss-in-js\u7684css\u6837\u5f0f\u662f\u7531js\u52a8\u6001\u751f\u6210\u7684\uff0c\u5f53\u4f60\u7684js\u5c1a\u672a\u52a0\u8f7d\u5b8c\u6210\u65f6\u9875\u9762\u4f1a\u663e\u793a\u4e00\u4e2a\u6ca1\u6709\u6837\u5f0f\u7684html\u5185\u5bb9, \u5f53js\u52a0\u8f7d\u5e76\u6267\u884c\u4e4b\u540e\uff0c\u9875\u9762\u624d\u4f1a\u663e\u793a\u5b8c\u6574\u7684\u6837\u5f0f\uff0c",(0,s.jsx)(n.code,{children:"\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u5bfc\u81f4\u9875\u9762\u95ea\u70c1!!!"})," , \u5982\u679c\u4f60\u80fd\u63a5\u6536\u5f53\u6211\u6ca1\u8bf4\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f88\u4e0d\u5e78\uff0cantd\u7684\u6837\u5f0f\u5c31\u91c7\u7528\u4e86css-in-js\u7684\u65b9\u6848\uff0c\u5f88\u96be\u53d7\u554a\uff0c\u7f51\u4e0a\u4e5f\u6709\u4e00\u4e9b\u7f51\u53cb\u66fe\u63d0\u5230\u8fc7antd\u7684\u6837\u5f0f\u95ea\u70c1\u95ee\u9898\uff0c\n\u4e0d\u8fc7\uff0cantd\u5b98\u65b9\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://ant.design/docs/react/server-side-rendering-cn",children:"antd\u5b98\u65b9\u6587\u6863"}),"\uff0c\u7b80\u5355\u8bf4\u4e00\u4e0b\u539f\u7406\u5176\u5b9e\u5c31\u662f\u5c06\u6837\u5f0f\u4ee3\u7801\u63d0\u53d6\u51fa\u6765\uff0c\u7136\u540e\u901a\u8fc7",(0,s.jsx)(n.code,{children:"style"}),"\u6807\u7b7e\u63d2\u5165\u5230html\u4e2d\uff0c\u4f46\u662f\u6211\u8ba4\u4e3a\u8fd9\u79cd\u65b9\u6848\u4e0d\u597d\uff0c\u867d\u7136\u53ef\u4ee5\u89e3\u51b3\u95ea\u70c1\u95ee\u9898\uff0c\u4f46\u662f\u6ca1\u529e\u6cd5\u5f88\u597d\u7684\u5229\u7528link\u6807\u7b7e\u7684\u9884\u52a0\u8f7d\u529f\u80fd\uff0c\u800c\u4e14antd\u7684\u6837\u5f0f\u4ee3\u7801\u91cf\u6bd4\u8f83\u5927\uff0c\u63d0\u53d6\u51fa\u6765\u4e4b\u540e\uff0chtml\u6587\u4ef6\u4f1a\u53d8\u5f97\u5f88\u5927\uff0c\u540c\u6837\u5b98\u65b9\u4e5f\u7ed9\u51fa\u4e86\u8be5\u95ee\u9898\u7684\u5904\u7406\u529e\u6cd5\uff0c\u4f46\u662f\u8fc7\u7a0b\u5f88\u7e41\u7410\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u81ea\u884c\u7814\u7a76\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63a8\u8350\u7684ui\u7ec4\u4ef6\u5e93",children:"\u63a8\u8350\u7684UI\u7ec4\u4ef6\u5e93"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0e\u5176\u6298\u817eantd\u90a3\u4e9b\u7e41\u7410\u7684\u914d\u7f6e\uff0c\u4e0d\u5982\u6211\u63a8\u8350\u5927\u5bb6\u76f4\u63a5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://react-bootstrap.netlify.app/",children:"react-bootstrap"})," \uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5e93\u7684\u6837\u5f0f\u4f7f\u7528\u7684\u662f\u4f20\u7edf\u7684scss\u9884\u5904\u7406\u5668\uff0c\u6ca1\u6709\u4f7f\u7528css-in-js\u7684\u65b9\u6848\uff0c\u56e0\u6b64\u4e0d\u4f1a\u51fa\u73b0\u6837\u5f0f\u95ea\u70c1\u7684\u95ee\u9898\uff0c\u800c\u4e14\u4f7f\u7528\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u5f00\u7bb1\u5373\u7528\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install react-bootstrap bootstrap\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"\u5bfc\u5165\u6837\u5f0f"}),"\n"]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(l.A,{value:"css",label:"css",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"import 'bootstrap/dist/css/bootstrap.min.css';\n"})})}),(0,s.jsx)(l.A,{value:"scss",label:"scss",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"@import 'bootstrap/scss/bootstrap';\n"})})})]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528\u7ec4\u4ef6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import {Button} from 'react-bootstrap';\n\nfunction Example() {\n  return (\n    <Button>Default</Button>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e9b\u5c0f\u4f19\u4f34\u53ef\u80fd\u62c5\u5fc3\u8fd9\u6837\u5bfc\u5165\u7ec4\u4ef6\u4f1a\u5bfc\u81f4\u6253\u5305\u4f53\u79ef\u8fc7\u5927\uff0c\u5176\u5b9e\u4e0d\u7136\uff0cnext.js\u9488\u5bf9react-bootstrap\u7684\u7ec4\u4ef6\u5e93\u505a\u4e86\u4e00\u4e9b\u4f18\u5316\uff0c\u5b83\u662f\u6309\u9700\u52a0\u8f7d\u7684\uff0c\u5177\u4f53\u4f18\u5316\u7684\u7b2c\u4e09\u65b9\u5e93\u6709\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"lucide-react"}),"\n",(0,s.jsx)(n.li,{children:"date-fns"}),"\n",(0,s.jsx)(n.li,{children:"lodash-es"}),"\n",(0,s.jsx)(n.li,{children:"ramda"}),"\n",(0,s.jsx)(n.li,{children:"antd"}),"\n",(0,s.jsx)(n.li,{children:"react-bootstrap"}),"\n",(0,s.jsx)(n.li,{children:"ahooks"}),"\n",(0,s.jsx)(n.li,{children:"@ant-design/icons"}),"\n",(0,s.jsx)(n.li,{children:"@headlessui/react"}),"\n",(0,s.jsx)(n.li,{children:"@headlessui-float/react"}),"\n",(0,s.jsx)(n.li,{children:"@heroicons/react/20/solid"}),"\n",(0,s.jsx)(n.li,{children:"@heroicons/react/24/solid"}),"\n",(0,s.jsx)(n.li,{children:"@heroicons/react/24/outline"}),"\n",(0,s.jsx)(n.li,{children:"@visx/visx"}),"\n",(0,s.jsx)(n.li,{children:"@tremor/react"}),"\n",(0,s.jsx)(n.li,{children:"rxjs"}),"\n",(0,s.jsx)(n.li,{children:"@mui/material"}),"\n",(0,s.jsx)(n.li,{children:"@mui/icons-material"}),"\n",(0,s.jsx)(n.li,{children:"recharts"}),"\n",(0,s.jsx)(n.li,{children:"react-use"}),"\n",(0,s.jsx)(n.li,{children:"@material-ui/core"}),"\n",(0,s.jsx)(n.li,{children:"@material-ui/icons"}),"\n",(0,s.jsx)(n.li,{children:"@tabler/icons-react"}),"\n",(0,s.jsx)(n.li,{children:"mui-core"}),"\n",(0,s.jsx)(n.li,{children:"react-icons/*"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["antd\u5b98\u65b9\u6587\u6863: ",(0,s.jsx)(n.a,{href:"https://ant.design/",children:"https://ant.design/"})]}),"\n",(0,s.jsxs)(n.li,{children:["react-bootstrap\u5b98\u65b9\u6587\u6863: ",(0,s.jsx)(n.a,{href:"https://react-bootstrap.netlify.app/",children:"https://react-bootstrap.netlify.app/"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3760:(e,n,t)=>{t.d(n,{A:()=>l});t(6372);var s=t(3394);const r={tabItem:"tabItem_TPIr"};var a=t(216);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},2420:(e,n,t)=>{t.d(n,{A:()=>I});var s=t(6372),r=t(3394),a=t(6905),l=t(9551),i=t(9705),c=t(8578),o=t(9931),u=t(7113);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,d]=j({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=o??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(9323);const b={tabList:"tabList_z6kg",tabItem:"tabItem_Y5Xp"};var f=t(216);function g(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==s&&(o(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function I(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},4506:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(6372);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);