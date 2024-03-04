"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[249],{3956:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});n(6372);var s=n(3394),a=n(3905),i=n(9354),o=n(206),r=n(8973),l=n(8703),c=n(106),d=n(5528),m=n(216);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.A,{...n,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,o.e)(),{title:n,description:s,date:i,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(a.be,{title:n,description:s,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var g=n(7806),x=n(1738);function f(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:a}=(0,o.e)(),{nextItem:i,prevItem:c,frontMatter:d,unlisted:h}=s,{hide_table_of_contents:f,toc_min_heading_level:p,toc_max_heading_level:v}=d;return(0,m.jsxs)(r.A,{sidebar:t,toc:!f&&a.length>0?(0,m.jsx)(g.A,{toc:a,minHeadingLevel:p,maxHeadingLevel:v}):void 0,children:[h&&(0,m.jsx)(x.A,{}),(0,m.jsx)(l.A,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function p(e){const t=e.content;return(0,m.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(a.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(f,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},7806:(e,t,n)=>{n.d(t,{A:()=>c});n(6372);var s=n(3394),a=n(7130);const i={tableOfContents:"tableOfContents_eXR1",docItemContainer:"docItemContainer_NThr"};var o=n(216);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.A,{...n,linkClassName:r,linkActiveClassName:l})})}},7130:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6372),a=n(9241);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>r(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(5690),u=n(216);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const g=s.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const x=(0,a.p)(),f=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return d((0,s.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:p}}),[r,l,f,p])),(0,u.jsx)(g,{toc:v,className:n,linkClassName:r,...h})}},1738:(e,t,n)=>{n.d(t,{A:()=>h});n(6372);var s=n(3394),a=n(106),i=n(320),o=n(216);function r(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(i.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(9354),m=n(8667);function u(e){let{className:t}=e;return(0,o.jsx)(m.A,{type:"caution",title:(0,o.jsx)(r,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(u,{...e})]})}},206:(e,t,n)=>{n.d(t,{e:()=>l,i:()=>r});var s=n(6372),a=n(675),i=n(216);const o=s.createContext(null);function r(e){let{children:t,content:n,isBlogPostPage:a=!1}=e;const r=function(e){let{content:t,isBlogPostPage:n}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:a});return(0,i.jsx)(o.Provider,{value:r,children:t})}function l(){const e=(0,s.useContext)(o);if(null===e)throw new a.dV("BlogPostProvider");return e}},8340:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(6372),a=n(7726);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const r={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),r}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),i=n.pluralForms.indexOf(a);return s[Math.min(i,s.length-1)]}(n,t,e)}}},8978:(e,t,n)=>{n.d(t,{A:()=>d});n(6372);var s=n(3394),a=n(9354);const i={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var o=n(216);function r(e){let{type:t,className:n,children:r}=e;return(0,o.jsx)("div",{className:(0,s.A)(a.G.common.admonition,a.G.common.admonitionType(t),i.admonition,n),children:r})}function l(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:i.admonitionHeading,children:[(0,o.jsx)("span",{className:i.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:i.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:s,children:a,className:i}=e;return(0,o.jsxs)(r,{type:t,className:i,children:[(0,o.jsx)(l,{title:s,icon:n}),(0,o.jsx)(c,{children:a})]})}},8973:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(6372),a=n(3394),i=n(5585),o=n(7716),r=n(5690),l=n(106),c=n(9551),d=n(9744);function m(e){const{pathname:t}=(0,c.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_DhTa",sidebarItemTitle:"sidebarItemTitle_LS76",sidebarItemList:"sidebarItemList_SctH",sidebarItem:"sidebarItem_qUo8",sidebarItemLink:"sidebarItemLink_WFfo",sidebarItemLinkActive:"sidebarItemLinkActive_oS7e"};var h=n(216);function g(e){let{sidebar:t}=e;const n=m(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:n.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=n(383);function f(e){let{sidebar:t}=e;const n=m(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:n.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(r.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,h.jsx)(x.GX,{component:f,props:e})}function v(e){let{sidebar:t}=e;const n=(0,o.l)();return t?.items.length?"mobile"===n?(0,h.jsx)(p,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function j(e){const{sidebar:t,toc:n,children:s,...o}=e,r=t&&t.items.length>0;return(0,h.jsx)(i.A,{...o,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(v,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.A)("col",{"col--7":r,"col--9 col--offset-1":!r}),itemScope:!0,itemType:"https://schema.org/Blog",children:s}),n&&(0,h.jsx)("div",{className:"col col--2",children:n})]})})})}function b(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(j,{...e})})}},8703:(e,t,n)=>{n.d(t,{A:()=>w});n(6372);var s=n(3394),a=n(206),i=n(3797),o=n(216);function r(e){let{children:t,className:n}=e;const{frontMatter:s,assets:r,metadata:{description:l}}=(0,a.e)(),{withBaseUrl:c}=(0,i.h)(),d=r.image??s.image,m=s.keywords??[];return(0,o.jsxs)("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[l&&(0,o.jsx)("meta",{itemProp:"description",content:l}),d&&(0,o.jsx)("link",{itemProp:"image",href:c(d,{absolute:!0})}),m.length>0&&(0,o.jsx)("meta",{itemProp:"keywords",content:m.join(",")}),t]})}var l=n(5690);const c={title:"title_xvU1"};function d(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,a.e)(),{permalink:r,title:d}=n,m=i?"h1":"h2";return(0,o.jsx)(m,{className:(0,s.A)(c.title,t),itemProp:"headline",children:i?d:(0,o.jsx)(l.A,{itemProp:"url",to:r,children:d})})}var m=n(106),u=n(8340);const h={container:"container_iJTo"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,m.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,o.jsx)(o.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,o.jsx)("time",{dateTime:t,itemProp:"datePublished",children:n})}function f(){return(0,o.jsx)(o.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,a.e)();console.log("\ud83d\ude80 ~ file: index.js:42 ~ BlogPostItemHeaderInfo ~ metadata:",n);const{date:i,formattedDate:r,readingTime:l}=n;return console.log("\ud83d\ude80 ~ file: index.js:43 ~ BlogPostItemHeaderInfo ~ formattedDate:",r),(0,o.jsxs)("div",{className:(0,s.A)(h.container,"margin-vert--md",t),children:[(0,o.jsx)(x,{date:i,formattedDate:r}),void 0!==l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(g,{readingTime:l})]})]})}function v(e){return e.href?(0,o.jsx)(l.A,{...e}):(0,o.jsx)(o.Fragment,{children:e.children})}function j(e){let{author:t,className:n}=e;const{name:a,title:i,url:r,imageURL:l,email:c}=t,d=r||c&&`mailto:${c}`||void 0;return(0,o.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",n),children:[l&&(0,o.jsx)(v,{href:d,className:"avatar__photo-link",children:(0,o.jsx)("img",{className:"avatar__photo",src:l,alt:a,itemProp:"image"})}),a&&(0,o.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,o.jsx)("div",{className:"avatar__name",children:(0,o.jsx)(v,{href:d,itemProp:"url",children:(0,o.jsx)("span",{itemProp:"name",children:a})})}),i&&(0,o.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:i})]})]})}const b={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function N(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,a.e)();if(0===n.length)return null;const r=n.every((e=>{let{name:t}=e;return!t}));return(0,o.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",r?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,o.jsx)("div",{className:(0,s.A)(!r&&"col col--6",r?b.imageOnlyAuthorCol:b.authorCol),children:(0,o.jsx)(j,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,o.jsxs)("header",{children:[(0,o.jsx)(d,{}),(0,o.jsx)(p,{}),(0,o.jsx)(N,{})]})}var _=n(2195),P=n(7694);function L(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,a.e)();return(0,o.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,s.A)("markdown",n),itemProp:"articleBody",children:(0,o.jsx)(P.A,{children:t})})}var k=n(6892),C=n(7684);function I(){return(0,o.jsx)("b",{children:(0,o.jsx)(m.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function y(e){const{blogPostTitle:t,...n}=e;return(0,o.jsx)(l.A,{"aria-label":(0,m.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,o.jsx)(I,{})})}const T={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function H(){const{metadata:e,isBlogPostPage:t}=(0,a.e)(),{tags:n,title:i,editUrl:r,hasTruncateMarker:l}=e,c=!t&&l,d=n.length>0;return d||c||r?(0,o.jsxs)("footer",{className:(0,s.A)("row docusaurus-mt-lg",t&&T.blogPostFooterDetailsFull),children:[d&&(0,o.jsx)("div",{className:(0,s.A)("col",{"col--9":c}),children:(0,o.jsx)(C.A,{tags:n})}),t&&r&&(0,o.jsx)("div",{className:"col margin-top--sm",children:(0,o.jsx)(k.A,{editUrl:r})}),c&&(0,o.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":d}),children:(0,o.jsx)(y,{blogPostTitle:i,to:e.permalink})})]}):null}function w(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,a.e)();return e?void 0:"margin-bottom--xl"}();return(0,o.jsxs)(r,{className:(0,s.A)(i,n),children:[(0,o.jsx)(A,{}),(0,o.jsx)(L,{children:t}),(0,o.jsx)(H,{})]})}}}]);