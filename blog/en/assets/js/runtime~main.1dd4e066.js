(()=>{"use strict";var e,a,f,t,d,r={},c={};function b(e){var a=c[e];if(void 0!==a)return a.exports;var f=c[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=r,b.c=c,e=[],b.O=(a,f,t,d)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],d=e[i][2];for(var c=!0,o=0;o<f.length;o++)(!1&d||r>=d)&&Object.keys(b.O).every((e=>b.O[e](f[o])))?f.splice(o--,1):(c=!1,d<r&&(r=d));if(c){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,t,d]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);b.r(d);var r={};a=a||[null,f({}),f([]),f(f)];for(var c=2&t&&e;"object"==typeof c&&!~a.indexOf(c);c=f(c))Object.getOwnPropertyNames(c).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(d,r),d},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({38:"51d71e59",112:"63b89d90",584:"96e22cae",941:"ba8b590a",1020:"db891fc0",1103:"245aff6b",1429:"80dc5a25",2138:"1a4e3797",2426:"23a4367a",2711:"9e4087bc",2984:"a7d97739",3249:"ccc49370",3261:"02e9a86c",3335:"5de85630",3767:"9e2ff084",3976:"0e384e19",4344:"d7e73f36",4462:"a05c8cc8",4583:"1df93b7f",4813:"6875c492",4816:"9b0bbc74",5023:"07cf454e",5610:"044571d4",5645:"2d356f6f",5762:"375b6228",5770:"6e502c53",5807:"452b3e9b",5944:"d675395f",6337:"4d93f1c8",6578:"ae70f138",6946:"fe6d3a6f",6969:"14eb3368",7098:"a7bd4aaa",7284:"2793dbc5",7384:"e21a851f",7472:"814f3328",7627:"d2629290",7643:"a6aa9e1f",7664:"a7405909",7949:"fc016080",8033:"d3dfc248",8209:"01a85c17",8330:"f3670597",8401:"17896441",8581:"935f2afb",8587:"588c6ba7",8849:"1dff5a50",8984:"3229ca83",9048:"a94703ab",9403:"fad18965",9647:"5e95c892",9695:"70adae3e",9701:"2725cf36",9852:"b71f8b05",9886:"f5a8711b"}[e]||e)+"."+{38:"d0ec8a20",112:"a84001a6",584:"abd98336",941:"3063b455",1020:"9065e74a",1103:"4d15e59b",1429:"08b318db",2138:"3e3a5dc3",2426:"b4ceb60a",2711:"7eb978d8",2984:"8a07d1c9",3249:"2da9d0ff",3261:"5d5c4ec6",3335:"11a0434d",3767:"1f313749",3976:"d2925a2f",4344:"1d07acb9",4462:"95a8108d",4583:"c7f1b2d3",4813:"de3c3c29",4816:"a81eacf8",5023:"9ea5627e",5610:"a5b5f10c",5645:"a87c2f77",5762:"311ac62a",5770:"38ce6d35",5807:"2f44c695",5944:"ed60d4e7",6337:"750007c2",6578:"4960c9cc",6946:"4345801c",6969:"071be820",7019:"a07bf412",7098:"0f4e8550",7284:"e4c8cc22",7384:"88219a0c",7472:"4bc2efb0",7627:"dec13530",7643:"831002d8",7664:"220f70b5",7949:"f727fcc8",8033:"2b019669",8209:"76d6d981",8330:"25424667",8401:"828af132",8581:"9870b3b3",8587:"0d864f68",8849:"c5fe5f48",8984:"b10db161",9048:"d4b16e31",9056:"bf254a55",9403:"6678f250",9647:"bb5911ed",9695:"10462963",9701:"40ce151e",9767:"7468c21d",9852:"19c1b9ce",9886:"cb8f1890",9951:"7d910a28"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},d="next-js-guides:",b.l=(e,a,f,r)=>{if(t[e])t[e].push(a);else{var c,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",d+f),c.src=e),t[e]=[a];var l=(a,f)=>{c.onerror=c.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],c.parentNode&&c.parentNode.removeChild(c),d&&d.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/ChBlog/en/",b.gca=function(e){return e={17896441:"8401","51d71e59":"38","63b89d90":"112","96e22cae":"584",ba8b590a:"941",db891fc0:"1020","245aff6b":"1103","80dc5a25":"1429","1a4e3797":"2138","23a4367a":"2426","9e4087bc":"2711",a7d97739:"2984",ccc49370:"3249","02e9a86c":"3261","5de85630":"3335","9e2ff084":"3767","0e384e19":"3976",d7e73f36:"4344",a05c8cc8:"4462","1df93b7f":"4583","6875c492":"4813","9b0bbc74":"4816","07cf454e":"5023","044571d4":"5610","2d356f6f":"5645","375b6228":"5762","6e502c53":"5770","452b3e9b":"5807",d675395f:"5944","4d93f1c8":"6337",ae70f138:"6578",fe6d3a6f:"6946","14eb3368":"6969",a7bd4aaa:"7098","2793dbc5":"7284",e21a851f:"7384","814f3328":"7472",d2629290:"7627",a6aa9e1f:"7643",a7405909:"7664",fc016080:"7949",d3dfc248:"8033","01a85c17":"8209",f3670597:"8330","935f2afb":"8581","588c6ba7":"8587","1dff5a50":"8849","3229ca83":"8984",a94703ab:"9048",fad18965:"9403","5e95c892":"9647","70adae3e":"9695","2725cf36":"9701",b71f8b05:"9852",f5a8711b:"9886"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var d=new Promise(((f,d)=>t=e[a]=[f,d]));f.push(t[2]=d);var r=b.p+b.u(a),c=new Error;b.l(r,(f=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;c.message="Loading chunk "+a+" failed.\n("+d+": "+r+")",c.name="ChunkLoadError",c.type=d,c.request=r,t[1](c)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var t,d,r=f[0],c=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(t in c)b.o(c,t)&&(b.m[t]=c[t]);if(o)var i=o(b)}for(a&&a(f);n<r.length;n++)d=r[n],b.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return b.O(i)},f=self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();