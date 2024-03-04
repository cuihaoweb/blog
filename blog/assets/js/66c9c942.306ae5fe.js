"use strict";(self.webpackChunknext_js_guides=self.webpackChunknext_js_guides||[]).push([[273],{2544:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"react-or-vue","metadata":{"permalink":"/ChBlog/blog/react-or-vue","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/react/2024-03-04-react-or-vue.md","source":"@site/blog/react/2024-03-04-react-or-vue.md","title":"React \u8fd8\u662f Vue\uff0c\u54ea\u4e2a JS \u6846\u67b6\u6700\u597d\uff1f","description":"React \u662f\u7528\u4e8e\u6784\u5efa\u5355\u9875\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u6d41\u884c\u7684 JavaScript \u5e93\u3002\u53e6\u4e00\u65b9\u9762\uff0cVue.js\u58f0\u79f0\u662f\u6846\u67b6\u3002\u5b83\u4eec\u6bd4 Angular \u6709\u66f4\u591a\u7684\u5171\u540c\u70b9\uff0cAngular \u662f\u4e00\u4e2a\u201c\u771f\u6b63\u7684\u201d\u6846\u67b6\u3002\ud83d\udea9","date":"2024-03-04T00:00:00.000Z","formattedDate":"2024\u5e743\u67084\u65e5","tags":[{"label":"css","permalink":"/ChBlog/blog/tags/css"}],"readingTime":7.795,"hasTruncateMarker":true,"authors":[{"name":"cuihao","title":"Maintainer of Docusaurus","url":"https://github.com/cuihaoweb","imageURL":"https://github.com/cuihaoweb.png","key":"cuihao"}],"frontMatter":{"slug":"react-or-vue","keywords":["react","vue","react-vs-vue"],"authors":"cuihao","tags":["css"]},"unlisted":false,"nextItem":{"title":"Docker\u7684\u4f5c\u7528\uff0c\u5230\u5e95\u89e3\u51b3\u4e86\u4ec0\u4e48\u75db\u70b9?","permalink":"/ChBlog/blog/what-is-docker"}},"content":"React \u662f\u7528\u4e8e\u6784\u5efa\u5355\u9875\u5e94\u7528\u7a0b\u5e8f\u7684\u6700\u6d41\u884c\u7684 JavaScript \u5e93\u3002\u53e6\u4e00\u65b9\u9762\uff0cVue.js\u58f0\u79f0\u662f\u6846\u67b6\u3002\u5b83\u4eec\u6bd4 Angular \u6709\u66f4\u591a\u7684\u5171\u540c\u70b9\uff0cAngular \u662f\u4e00\u4e2a\u201c\u771f\u6b63\u7684\u201d\u6846\u67b6\u3002\ud83d\udea9\\n\\n\u5728\u672c\u6587\u4e2d\uff0c\u6211\u5c06\u5bf9 React.js \u548c Vue.js \u8fdb\u884c\u8be6\u7ec6\u6bd4\u8f83\uff0c\u4ee5\u4fbf\u60a8\u51b3\u5b9a\u54ea\u79cd JS \u6846\u67b6/\u5e93\u6700\u9002\u5408\u60a8\u3002\ud83d\udea7\\n\\n\x3c!--truncate--\x3e\\n## \u2696\ufe0f\u6846\u67b6\u6982\u8ff0\\nReact \u7531 Facebook \u7684\u8f6f\u4ef6\u5de5\u7a0b\u5e08 Jordan Walke \u521b\u5efa\u3002\u76ee\u524d\uff0c\u5b83\u7531 Meta\uff08\u524d\u8eab\u4e3a Facebook\uff09\u4ee5\u53ca\u4e00\u4e2a\u7531\u4e2a\u4eba\u5f00\u53d1\u8005\u548c\u516c\u53f8\u7ec4\u6210\u7684\u793e\u533a\u7ef4\u62a4\u3002\\n\\n\u5176\u4e30\u5bcc\u7684\u751f\u6001\u7cfb\u7edf\u548c\u7075\u6d3b\u6027\u4f7f\u5176\u6210\u4e3a\u6784\u5efa\u590d\u6742\u7528\u6237\u754c\u9762\u548c\u5904\u7406\u6570\u636e\u5904\u7406\u4efb\u52a1\u7684\u5b8c\u7f8e\u9009\u62e9\u3002\\n\\n\u6b64\u5916\uff0cReact Native \u662f React.js \u7684\u6269\u5c55\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u8f7b\u677e\u521b\u5efa\u6df7\u5408\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\\n<hr />\\nVue \u662f\u4e00\u4e2a\u76f8\u5bf9\u8f83\u65b0\u7684\u8fdb\u5165\u8005\uff0c\u7531 Evan You \u521b\u5efa\uff0cVue \u4e13\u6ce8\u4e8e UI \u8bbe\u8ba1\u548c\u5f00\u53d1\u7684\u7b80\u5355\u6027\u548c\u6548\u7387\u3002\\n\\n\ud83e\uddf9\ud83e\udee7\u5176\u76f4\u89c2\u7684\u8bed\u6cd5\u548c\u6e05\u6670\u7684\u8bbe\u8ba1\u539f\u5219\u4f7f\u5176\u5bf9\u5bfb\u6c42\u7528\u4e8e\u6784\u5efa\u754c\u9762\u7684\u7b80\u5355\u6846\u67b6\u7684\u5f00\u53d1\u4eba\u5458\u5177\u6709\u5438\u5f15\u529b\u3002\\n\\nVue.js \u8fd8\u901a\u8fc7 Pinia \u63d0\u4f9b\xa0`built-in`\xa0\u52a8\u753b\u548c\u72b6\u6001\u7ba1\u7406\u7b49\u529f\u80fd\uff0c\u4ee5\u6ee1\u8db3\u5e7f\u6cdb\u7684\u5f00\u53d1\u9700\u6c42\u3002\\n\\n## \ud83c\udf4f \u4f7f\u7528Vue.js\u7684\u539f\u56e0\\nVue.js\u56e0\u5176\u7b80\u5355\u6027\u800c\u53d7\u5230\u5173\u6ce8\u3002\u5f00\u53d1\u4eba\u5458\u6b23\u8d4f\u5176\u6e05\u6670\u800c\u5408\u4e4e\u903b\u8f91\u7684\u8bbe\u8ba1\uff0c\u5b83\u52a0\u5feb\u4e86\u5f00\u53d1\u8fc7\u7a0b\u548c\u5de5\u4f5c\u6d41\u7a0b\u3002\\n\\n\u4e0e\u5176\u4ed6\u4e00\u4e9b\u6846\u67b6\u4e0d\u540c\uff0cVue.js\u5728\u6574\u4e2a UI \u529f\u80fd\u4e2d\u4fdd\u6301\u4e00\u81f4\u7684\u8bed\u6cd5\u3002\\n\\nVue.js\u7684\u4f18\u52bf\u4e4b\u4e00\u5728\u4e8e\u5176\u9ad8\u6548\u7684\u5b98\u65b9\u63d2\u4ef6\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u4e3a\u5e38\u89c1\u4efb\u52a1\u63d0\u4f9b\u89e3\u51b3\u65b9\u6848\uff0c\u4f8b\u5982\xa0`Vue-Router`\xa0.\\n\\n\\n## \u269b\ufe0f \u4f7f\u7528 React \u7684\u539f\u56e0\\nReact.js\u5177\u6709\u4e00\u4e9b\u72ec\u7279\u7684\u529f\u80fd\uff0c\u4f7f\u5176\u6210\u4e3a\u5f00\u53d1\u4eba\u5458\u7684\u70ed\u95e8\u9009\u62e9\u3002\\n\\n**JSX \u8bed\u6cd5\u7b80\u5316\u4e86\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u7684\u521b\u5efa\u3002\ud83d\udcc2**\\n\\nJSX \u4ee3\u8868 JavaScript XML\u3002JSX \u5141\u8bb8\u6211\u4eec\u5728 React \u4e2d\u7f16\u5199 HTML\u3002JSX \u4f7f\u5728 React \u4e2d\u7f16\u5199\u548c\u6dfb\u52a0 HTML \u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002\\n\\n\u5b83\u53ea\u662f\u4e00\u4e2a\u7c7b\u4f3c XML \u7684\u6269\u5c55\uff0c\u5141\u8bb8\u6211\u4eec\u7f16\u5199\u770b\u8d77\u6765\u50cf\u6807\u8bb0\u7684 JavaScript\uff0c\u5e76\u4ece\u7ec4\u4ef6\u8fd4\u56de\u5b83\u3002\\n\\n\u6b64\u5916\uff0cReact.js \u4e3a\u641c\u7d22\u5f15\u64ce\u4f18\u5316 \uff08SEO\uff09 \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u652f\u6301\uff0c\u786e\u4fdd\u4f7f\u7528 React.js \u6784\u5efa\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u6613\u4e8e\u641c\u7d22\u5f15\u64ce\u53d1\u73b0\u548c\u7d22\u5f15\u3002\\n\\nReact.js\u7684\u53e6\u4e00\u4e2a\u4f18\u52bf\u662f\u5b83\u652f\u6301\u901a\u8fc7 React Native \u8fdb\u884c\u79fb\u52a8\u5f00\u53d1\u3002\u719f\u6089React.js\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u63d0\u9ad8\u4ed6\u4eec\u7684\u6280\u80fd\uff0c\u4f7f\u7528\u4e0eReact.js\u76f8\u540c\u7684\u8bed\u6cd5\u548c\u5f00\u53d1\u6a21\u5f0f\u6765\u6784\u5efa\u672c\u673a\u79fb\u52a8\u5e94\u7528\u7a0b\u5e8f\u3002\\n\\n\u6b64\u5916\uff0cReact \u5f00\u53d1\u4eba\u5458\u5de5\u5177\u5728\u7ec4\u7ec7\u548c\u8c03\u8bd5\u4ee3\u7801\u65b9\u9762\u63d0\u4f9b\u4e86\u5b9d\u8d35\u7684\u5e2e\u52a9\u3002\\n\\n## **\ud83e\udd47 \u53d7\u6b22\u8fce\u7a0b\u5ea6\u548c\u6027\u80fd\u7684\u6bd4\u8f83**\\nReact.js \u548c Vue.js \u5728\u5f00\u53d1\u8005\u793e\u533a\u4e2d\u90fd\u89c1\u8bc1\u4e86\u5de8\u5927\u7684\u9700\u6c42\uff0c\u4f46React.js\u76ee\u524d\u5728\u53d7\u6b22\u8fce\u7a0b\u5ea6\u65b9\u9762\u7565\u6709\u4f18\u52bf\u3002\u5176\u66f4\u5927\u7684\u7528\u6237\u7fa4\u548c\u5e7f\u6cdb\u7684\u751f\u6001\u7cfb\u7edf\u6709\u52a9\u4e8e\u5176\u5728\u5404\u79cd\u9879\u76ee\u548c\u884c\u4e1a\u4e2d\u7684\u5e7f\u6cdb\u4f7f\u7528\u3002\\n\\n\ud83d\udef0\ufe0f \u5728\u6027\u80fd\u65b9\u9762\uff0c\u8fd9\u4e24\u4e2a\u6846\u67b6\u90fd\u63d0\u4f9b\u4e86\xa0`virtual DOM`\xa0HTML \u9875\u9762\u7684\u9ad8\u6548\u5448\u73b0\u3002\ud83d\udcdf\\n\\n**\u6b64\u65b9\u6cd5\u53ef\u786e\u4fdd UI \u66f4\u65b0\u5feb\u901f\u4e14\u54cd\u5e94\u8fc5\u901f\u3002**\\n\\n\u7136\u800c\uff0cVue.js\u5f80\u5f80\u5728\u7ec4\u4ef6\u521b\u5efa\u548c\u66f4\u65b0\u65b9\u9762\u8868\u73b0\u51fa\u8272\uff0c\u8fd9\u8981\u5f52\u529f\u4e8e\u5176\u7b80\u5316\u7684\u4f18\u5316\u65b9\u6cd5\u3002\\n\\n> \ud83d\udd0e Statista\u7684\u8c03\u67e5\u62a5\u544a\u663e\u793a\uff0c42.62%\u7684\u5f00\u53d1\u8005\u9009\u62e9\u4e86React.js\uff0c\u800c18.82%\u7684\u5f00\u53d1\u8005\u4f7f\u7528\u4e86Vue.js\u3002\u7528\u4e8e Web \u5f00\u53d1\\n\\n## \ud83e\uddca\u53ef\u6269\u5c55\u6027\\n\u53ef\u4f38\u7f29\u6027\u662f\u5904\u7406\u5927\u578b\u590d\u6742\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u7684\u5173\u952e\u56e0\u7d20\u3002\\n\\nReact.js\u901a\u8fc7 [\\"smart\\" and \\"dumb\\" components](https://coderwall.com/p/znkw-q/smart-vs-dumb-components-when-to-use-which) \u7684\u6982\u5ff5\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u67b6\u6784\u3002\\n\\nVue.js\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u7684\u53ef\u4f38\u7f29\u6027\u65b9\u6cd5\uff0c\u901a\u8fc7 Pinia \u548c\u5176\u4ed6\u5b98\u65b9\u5e93\u652f\u6301\u72b6\u6001\u7ba1\u7406\u3002\u8fd9\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u6709\u6548\u5730\u7ba1\u7406\u72b6\u6001\u66f4\u6539\uff0c\u5e76\u786e\u4fdd\u5728\u9879\u76ee\u590d\u6742\u6027\u589e\u52a0\u65f6\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002\\n\\n## \ud83d\udcf2\u9002\u5e94\u79fb\u52a8\u8bbe\u5907\\nReact.js \u548c Vue.js \u90fd\u4e3a\u79fb\u52a8\u5f00\u53d1\u63d0\u4f9b\u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u6ee1\u8db3\u5bf9\u8de8\u5e73\u53f0\u5e94\u7528\u7a0b\u5e8f\u65e5\u76ca\u589e\u957f\u7684\u9700\u6c42\u3002\\n\\nReact Native \u662f\u4e00\u4e2a\u57fa\u4e8e React.js \u7684\u79fb\u52a8\u5f00\u53d1\u6846\u67b6\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u4f7f\u7528\u719f\u6089\u7684React.js\u6a21\u5f0f\u6784\u5efa\u539f\u751f iOS \u548c Android \u5e94\u7528\u7a0b\u5e8f\u3002\\n<hr />\\nVue.js \u652f\u6301\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u5f00\u53d1\u7684\u79fb\u52a8 UI \u6846\u67b6 Weex\uff0c\u8be5\u6846\u67b6\u652f\u6301\u4f7f\u7528Vue.js\u7ec4\u4ef6\u521b\u5efa iOS \u548c Android \u5e94\u7528\u7a0b\u5e8f\u3002\\n\\n\u867d\u7136 Weex \u7684\u53d7\u6b22\u8fce\u7a0b\u5ea6\u53ef\u80fd\u4e0d\u5982 React Native\uff0c\u4f46\u5b83\u4e3a\u5bfb\u6c42\u4ee5Vue.js\u4e3a\u4e2d\u5fc3\u7684\u79fb\u52a8\u5f00\u53d1\u65b9\u6cd5\u7684\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u884c\u7684\u9009\u62e9\u3002\\n\\n## \ud83d\ude8e\ud83d\udd29\u89c4\u6a21\u548c\u793e\u533a\u652f\u6301\\n\u6846\u67b6\u7684\u5927\u5c0f\u4f1a\u663e\u8457\u5f71\u54cd\u5176\u6027\u80fd\u548c\u52a0\u8f7d\u65f6\u95f4\u3002\\n\\n\u4e0e React.js \u76f8\u6bd4\uff0cVue.js \u7684\u9ed8\u8ba4\u5927\u5c0f\u66f4\u5c0f\uff0c\u56e0\u6b64\u5bf9\u4e8e\u4f18\u5148\u8003\u8651\u4f18\u5316\u7684\u9879\u76ee\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u6709\u5438\u5f15\u529b\u7684\u9009\u62e9\u3002\\n\\n\u6b64\u5916\uff0cVue.js\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u57fa\u672c\u529f\u80fd\u3002\u4f8b\u5982\uff0c\u5b83\u51cf\u5c11\u4e86\u5bf9\u989d\u5916\u5e93\u4e0b\u8f7d\u7684\u9700\u6c42\u3002\\n\\n\u5728\u793e\u533a\u652f\u6301\u65b9\u9762\uff0cReact.js\u53d7\u76ca\u4e8eFacebook\u548c\u6d3b\u8dc3\u7684\u5f00\u6e90\u793e\u533a\u7684\u652f\u6301\u3002\u7136\u800c\uff0c\u7531\u4e8e\u5176\u7528\u6237\u53cb\u597d\u7684\u8bbe\u8ba1\u548c\u5e7f\u6cdb\u7684\u6587\u6863\uff0cVue.js \u5728\u5f00\u53d1\u4eba\u5458\u4e2d\u4e5f\u83b7\u5f97\u4e86\u5438\u5f15\u529b\u3002\u867d\u7136React.js\u53ef\u80fd\u62e5\u6709\u66f4\u5927\u7684\u793e\u533a\uff0c\u4f46Vue.js\u7684\u65e5\u76ca\u666e\u53ca\u8868\u660e\u5176\u957f\u671f\u6210\u529f\u7684\u6f5c\u529b\u3002\\n\\n## \ud83c\udfd2\u4f7f\u7528\u6848\u4f8b\\nReact.js \u548c Vue.js \u90fd\u662f\u5177\u6709\u5e7f\u6cdb\u7528\u4f8b\u7684\u591a\u529f\u80fd\u6846\u67b6\u3002\\n\\nReact.js\u4e3b\u8981\u7528\u4e8e\u6784\u5efa\u793e\u4ea4\u5a92\u4f53\u5e73\u53f0\u3001\u590d\u6742\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u4ee5\u53ca\u9700\u8981\u4e0e React Native \u65e0\u7f1d\u96c6\u6210\u4ee5\u8fdb\u884c\u79fb\u52a8\u5f00\u53d1\u7684\u9879\u76ee\u3002\\n\\n\u53e6\u4e00\u65b9\u9762\uff0cVue.js\u975e\u5e38\u9002\u5408\u4e2d\u5c0f\u578b Web \u5e94\u7528\u7a0b\u5e8f\u3001\u5b9e\u65f6\u5e73\u53f0\u548c\u5185\u5bb9\u4ea4\u4ed8\u5e73\u53f0\u3002\u5176\u5feb\u901f\u7684\u6027\u80fd\u548c\u6613\u4e8e\u7ef4\u62a4\u4f7f\u5176\u6210\u4e3a\u5bfb\u6c42\u8f7b\u91cf\u7ea7\u6846\u67b6\u4ee5\u8fdb\u884c\u5feb\u901f\u5f00\u53d1\u7684\u5f00\u53d1\u4eba\u5458\u7684\u70ed\u95e8\u9009\u62e9\u3002\\n\\n## \ud83d\udc4f\u7ed3\u8bba\\n\u603b\u4e4b\uff0cReact.js\u548cVue.js\u90fd\u4e3a\u524d\u7aef\u5f00\u53d1\u9879\u76ee\u63d0\u4f9b\u4e86\u72ec\u7279\u7684\u4f18\u52bf\u548c\u4f18\u52bf\u3002React.js \u51ed\u501f\u5176\u591a\u529f\u80fd\u6027\u3001\u5f3a\u5927\u7684\u751f\u6001\u7cfb\u7edf\u548c\u5bf9\u79fb\u52a8\u5f00\u53d1\u7684\u652f\u6301\u800c\u83b7\u80dc\u3002\u5b83\u662f\u5904\u7406\u590d\u6742\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u4eba\u5458\u7684\u9996\u9009\u3002\\n\\n\u53e6\u4e00\u65b9\u9762\uff0cVue.js\u4ee5\u5176\u7b80\u5355\u3001\u9ad8\u6548\u548c\u5feb\u901f\u7684\u6027\u80fd\u800c\u8457\u79f0\u3002\u5176\u76f4\u89c2\u7684\u8bed\u6cd5\u548c\u9ad8\u6548\u7684\u8bbe\u8ba1\u4f7f\u5176\u6210\u4e3a\u5bfb\u6c42\u5f00\u9500\u6700\u5c0f\u7684\u8f7b\u91cf\u7ea7\u6846\u67b6\u7684\u5f00\u53d1\u4eba\u5458\u7684\u7edd\u4f73\u9009\u62e9\u3002\\n\\n\u5f15\u7528\uff1ahttps://dev.to/codewithshahan/react-or-vue-which-js-framework-is-best-25on"},{"id":"what-is-docker","metadata":{"permalink":"/ChBlog/blog/what-is-docker","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/docker/2024-03-04-what-is-docker.md","source":"@site/blog/docker/2024-03-04-what-is-docker.md","title":"Docker\u7684\u4f5c\u7528\uff0c\u5230\u5e95\u89e3\u51b3\u4e86\u4ec0\u4e48\u75db\u70b9?","description":"\u672c\u6587\u63a2\u8ba8\u4e86Docker\u7684\u4f5c\u7528\u548c\u5b83\u5728\u89e3\u51b3\u73b0\u4ee3\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u7684\u75db\u70b9\u65b9\u9762\u7684\u91cd\u8981\u6027\u3002\u4e86\u89e3Docker\u5982\u4f55\u63d0\u4f9b\u8f7b\u91cf\u7ea7\u3001\u53ef\u79fb\u690d\u548c\u53ef\u6269\u5c55\u7684\u5bb9\u5668\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u7b80\u5316\u4e86\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u3001\u7ba1\u7406\u548c\u8de8\u73af\u5883\u79fb\u690d\u3002","date":"2024-03-04T00:00:00.000Z","formattedDate":"2024\u5e743\u67084\u65e5","tags":[{"label":"css","permalink":"/ChBlog/blog/tags/css"}],"readingTime":3.045,"hasTruncateMarker":true,"authors":[{"name":"cuihao","title":"Maintainer of Docusaurus","url":"https://github.com/cuihaoweb","imageURL":"https://github.com/cuihaoweb.png","key":"cuihao"}],"frontMatter":{"slug":"what-is-docker","keywords":["docker","\u5bb9\u5668\u5316\u6280\u672f","\u79fb\u690d\u6027","\u9694\u79bb\u6027"],"authors":"cuihao","tags":["css"]},"unlisted":false,"prevItem":{"title":"React \u8fd8\u662f Vue\uff0c\u54ea\u4e2a JS \u6846\u67b6\u6700\u597d\uff1f","permalink":"/ChBlog/blog/react-or-vue"},"nextItem":{"title":"css(\u5355\u884c\u3001\u591a\u884c)\u5c55\u793a\u7701\u7565\u53f7\uff0c\u517c\u5bb9\u6240\u6709\u6d4f\u89c8\u5668","permalink":"/ChBlog/blog/ellipsis"}},"content":"\u672c\u6587\u63a2\u8ba8\u4e86Docker\u7684\u4f5c\u7528\u548c\u5b83\u5728\u89e3\u51b3\u73b0\u4ee3\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u7684\u75db\u70b9\u65b9\u9762\u7684\u91cd\u8981\u6027\u3002\u4e86\u89e3Docker\u5982\u4f55\u63d0\u4f9b\u8f7b\u91cf\u7ea7\u3001\u53ef\u79fb\u690d\u548c\u53ef\u6269\u5c55\u7684\u5bb9\u5668\u5316\u89e3\u51b3\u65b9\u6848\uff0c\u7b80\u5316\u4e86\u5e94\u7528\u7a0b\u5e8f\u7684\u90e8\u7f72\u3001\u7ba1\u7406\u548c\u8de8\u73af\u5883\u79fb\u690d\u3002\\n\\n\x3c!--truncate--\x3e\\n## 1. \u79fb\u690d\u6027, \u4e00\u6b21\u6784\u5efa\u5230\u5904\u4f7f\u7528\\n\u5047\u5982\u6709\u4e00\u4e2a\u670d\u52a1\u5668a\u8fd0\u884c\u4e86\u5f88\u591a\u9879\u76ee(node\u3001java\u3001php\u3001mysql)\u3002\u6709\u4e00\u5929\u9700\u8981\u4f7f\u7528\u65b0\u7684\u670d\u52a1\u5668b\u3002\\n\\n\u90a3\u4e48\u670d\u52a1\u5668a\u4e0a\u7684\u6240\u6709\u8fd0\u884c\u7684\u9879\u76ee\u90fd\u5f97\u8fc1\u79fb\u5230\u670d\u52a1\u5668b\u4e0a\uff0c\u90a3\u4e48\u9700\u8981\u7ed9\u670d\u52a1\u5668b\u642d\u5efa\u5404\u79cd\u8fd0\u884c\u73af\u5883\uff0c\u5de5\u4f5c\u91cf\u8017\u65f6\u8017\u529b\u3002\\n\\n\u4f7f\u7528docker\u5c06\u6240\u4ee5\u7684\u9879\u76ee\u4ee5\u53ca\u8fd0\u884c\u73af\u5883\u8fdb\u884c\u955c\u50cf\u6784\u5efa\uff0c\u53ea\u9700\u8981\u5728\u53e6\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u4e00\u4e2adocker\uff0c\u5e76\u4e0b\u8f7d\u5bf9\u5e94\u4e4b\u524d\u6784\u5efa\u597d\u7684\u955c\u50cf\uff0c\u5c31\u80fd\u5feb\u901f\u642d\u5efa\u51fa\u5bf9\u5e94\u7684\u8fd0\u884c\u73af\u5883\uff0c\u5e76\u5c06\u9879\u76ee\u8fd0\u884c\u8d77\u6765\u3002\\n\\n## 2. \u9694\u79bb\u6027, \u4e0d\u540c\u7684\u5bb9\u5668\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4e92\u4e0d\u5e72\u6270\\nDocker\u901a\u8fc7namespace\u5b9e\u73b0\u9694\u79bb\u7684\uff0cnamespace\u662fLinux\u63d0\u4f9b\u7684\u8d44\u6e90\u9694\u79bb\u673a\u5236\uff0c\u8d1f\u8d23\u9694\u79bb\u8fdb\u7a0b\u3002\u53ea\u6709\u5728\u540c\u4e00\u4e2anamespace\u4e0b\u7684\u8fdb\u7a0b\u53ef\u4ee5\u76f8\u4e92\u8054\u7cfb\uff0c\u4f46\u65e0\u6cd5\u611f\u53d7\u5230\u5916\u90e8\u8fdb\u7a0b\u7684\u5b58\u5728\uff0c\u8425\u9020\u51fa\u5904\u4e8e\u4e00\u4e2a\u72ec\u7acb\u7684\u7cfb\u7edf\u73af\u5883\u4e2d\u7684\u9519\u89c9\u3002\\n\\n\u56e0\u4e3anamespace\u4e0d\u7ba1\u518d\u600e\u4e48\u9694\u79bb\uff0c\u4f46\u662f\u5bb9\u5668\u5185\u90e8\u6267\u884c\u4efb\u52a1\u90fd\u4f9d\u8d56\u540c\u4e00\u4e2acpu\u3001\u5185\u5b58\u7b49\u3002\u4e3a\u4e86\u9632\u6b62\u5bb9\u5668\u8fc7\u5ea6\u5360\u7528\u6216\u5f71\u54cd\u5176\u4ed6\u5bb9\u5668\u6216\u5bbf\u4e3b\u673a\uff0c\u9700\u8981\u9650\u5236\u5bb9\u5668\u4f7f\u7528\u7684 CPU \u6838\u5fc3\u6570\u91cf\u3001\u5185\u5b58\u5927\u5c0f\uff0c\u6216\u8005\u8bbe\u7f6e\u5bb9\u5668\u7684\u7f51\u7edc\u5e26\u5bbd\u9650\u5236\uff0c\u4ee5\u786e\u4fdd\u5bb9\u5668\u4e4b\u95f4\u7684\u8d44\u6e90\u4f7f\u7528\u4e92\u4e0d\u5e72\u6270\u3002\u56e0\u6b64\u4f7f\u7528\u4e86\u63a7\u5236\u7ec4\uff08Control Groups\uff0c\u7b80\u79f0cgroups\uff09\u662f\u4e00\u4e2a Linux \u5185\u6838\u7279\u6027\uff0c\u5b83\u53ef\u4ee5\u4e3a\u8fdb\u7a0b\u6216\u8fdb\u7a0b\u7ec4\u5206\u914d\u8d44\u6e90\uff0c\u5e76\u9650\u5236\u5176\u8d44\u6e90\u4f7f\u7528\u91cf\uff0c\u786e\u4fdd\u7cfb\u7edf\u7684\u8d44\u6e90\u516c\u5e73\u5206\u914d\u548c\u9ad8\u6548\u5229\u7528\u3002\\n\\n## 3. \u8f7b\u91cf, docker\u662f\u4e00\u79cd\u865a\u62df\u5316\u5bb9\u5668\u6280\u672f\u3002\\n\u4ed6\u548c\u865a\u62df\u673a\u6700\u6839\u672c\u7684\u533a\u522b\u662f\uff1a**docker\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u5171\u7528**\u64cd\u4f5c\u7cfb\u7edf**\u5185\u6838\uff0c\u4e0d\u4f1a\u5728\u5bbf\u4e3b\u673a\u4e0a\u518d\u6b21\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf**\uff0c\u66f4\u52a0\u8282\u7701\u8d44\u6e90\u3002\\n\\n## 4. \u542f\u52a8\u5feb\\ndocker\u91c7\u7528\u4e86\u4e00\u79cd\u955c\u50cf\u5206\u5c42\u6a21\u578b\uff0c\u901a\u8fc7\u8fd9\u79cd\u6a21\u578b\u53ef\u4ee5\u5b9e\u73b0\u955c\u50cf\u4e4b\u95f4\u7684\u5171\u4eab\u548c\u91cd\u7528\uff0c\u542f\u52a8\u5bb9\u5668\u65f6\u65e0\u9700\u52a0\u8f7d\u6574\u4e2a\u955c\u50cf\u5c42\uff0c\u6240\u4ee5\u542f\u52a8\u4f1a\u66f4\u5feb\u3002"},{"id":"ellipsis","metadata":{"permalink":"/ChBlog/blog/ellipsis","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/css/2024-03-04-ellipsis.md","source":"@site/blog/css/2024-03-04-ellipsis.md","title":"css(\u5355\u884c\u3001\u591a\u884c)\u5c55\u793a\u7701\u7565\u53f7\uff0c\u517c\u5bb9\u6240\u6709\u6d4f\u89c8\u5668","description":"\u672c\u6587\u63a2\u8ba8\u4e86\u5982\u4f55\u4f7f\u7528CSS\u6765\u5904\u7406\u8d85\u51fa\u5bb9\u5668\u8303\u56f4\u7684\u5185\u5bb9\u5e76\u5c55\u793a\u7701\u7565\u53f7, \u5e2e\u52a9\u60a8\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\u5b9e\u73b0\u4f18\u96c5\u7684\u6587\u672c\u622a\u65ad\u6548\u679c\u3002","date":"2024-03-04T00:00:00.000Z","formattedDate":"2024\u5e743\u67084\u65e5","tags":[{"label":"css","permalink":"/ChBlog/blog/tags/css"}],"readingTime":1.02,"hasTruncateMarker":true,"authors":[{"name":"cuihao","title":"Maintainer of Docusaurus","url":"https://github.com/cuihaoweb","imageURL":"https://github.com/cuihaoweb.png","key":"cuihao"}],"frontMatter":{"slug":"ellipsis","authors":"cuihao","keywords":["css","\u7701\u7565\u53f7"],"tags":["css"]},"unlisted":false,"prevItem":{"title":"Docker\u7684\u4f5c\u7528\uff0c\u5230\u5e95\u89e3\u51b3\u4e86\u4ec0\u4e48\u75db\u70b9?","permalink":"/ChBlog/blog/what-is-docker"}},"content":"\u672c\u6587\u63a2\u8ba8\u4e86\u5982\u4f55\u4f7f\u7528CSS\u6765\u5904\u7406\u8d85\u51fa\u5bb9\u5668\u8303\u56f4\u7684\u5185\u5bb9\u5e76\u5c55\u793a\u7701\u7565\u53f7, \u5e2e\u52a9\u60a8\u5728\u7f51\u9875\u8bbe\u8ba1\u4e2d\u5b9e\u73b0\u4f18\u96c5\u7684\u6587\u672c\u622a\u65ad\u6548\u679c\u3002\\n\\n\x3c!--truncate--\x3e\\n## \u8d85\u51fa\u5355\u884c\u7701\u7565\u53f7\\n```CSS\\n.ellipsis {\\n    overflow: hidden;\\n    white-space: nowrap;\\n    text-overflow: ellipsis;\\n}\\n```\\n\\n## \u8d85\u51fa\u591a\u884c\u7701\u7565\u53f7\\n<b>webkit\u5185\u6838</b>\\n```CSS\\n.introduction {\\n    display: -webkit-box;\\n    -webkit-box-orient: vertical;\\n    -webkit-line-clamp: 2;\\n    text-overflow: ellipsis;\\n    overflow: hidden;\\n}\\n```\\n- \u6ce8\u610f\u70b9\uff1a\\n    1. \u5fc5\u987b\u7ed9\u6587\u672c\u7684\u6700\u8fd1\u7236\u5bb9\u5668\u6dfb\u52a0\u4e0a\u8ff0\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u5728ios\u4e0b\u5931\u6548\u3002\\n    2. \u5982\u679c\u5b50\u5143\u7d20\u8bbe\u7f6e\u4e3adisplay: inline\u65f6\uff0c\u4e5f\u53ef\u751f\u6548\u3002\\n\\n<b>\u975ewebkit\u5185\u6838, \u517c\u5bb9\u65b9\u5f0f</b>\\n```CSS\\n.introduction {\\n    display: block;\\n    position: relative;\\n    line-height: 1.4em;\\n    height: 2.8em;\\n    overflow: hidden;\\n}\\n.introduction::after {\\n    content: \\"...\\";\\n    font-weight: bold;\\n    position: absolute;\\n    bottom: .3em;\\n    right: 0;\\n    width: 1.4em;\\n    background-color: white;\\n}\\n```\\n- \u6dfb\u52a0\u4f2a\u5143\u7d20\uff0c\u8bbe\u7f6e\u767d\u8272\u80cc\u666f\uff0c\u5b9a\u4f4d\u5230\u6700\u540e\u4e00\u884c\u672b\u5c3e\u3002"}]}')}}]);