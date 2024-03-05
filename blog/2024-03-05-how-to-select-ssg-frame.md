---
keywords: [hexo, vitepress, docusaurus]
authors: cuihao
tags: [ssg, frame]
---

# Hexo、VitePress、Docusaurus，哪个最适合你的静态网站生成器？
在选择合适的静态网站生成器时，Hexo、VitePress、Docusaurus是三个备受关注的选项，那么到底哪一个框架更适合你呢？本文将从使用场景、社区生态、功能、性能、扩展性这五个方面，帮你全方位分析各个框架的优缺点，以便为你的技术选型提供参考。

<!--truncate-->
## 1、应用场景
- [Hexo](https://hexo.io), 官方定位自己是 ["快速、简洁且高效的博客框架"](https://hexo.io) , 但是它同样适合构建简单的文档网站，它具有简单易用的特点，适合那些对技术要求不高的个人用户快速搭建和管理网站。

- [VitePress](https://vitepress.dev), 基于vue的SSG框架，可以快速构建个人的技术文档系统，但是官方默认是不支持构建博客网站的，但是对于专业的前端开发者来说可以自己定制主题，对于非技术人员有一定的门槛。

- [Docusaurus](https://docusaurus.io), 基于react的SSG框架，相比与VitePress，Docusaurus支持博客和文档系统，同时也提供了一定的定制化能力，同样对于专业的前端开发者来说也可以自己定制主题，对于非技术人员有一定的门槛。


## 2、功能
| 框架 | 国际化 | 主题切换 | 本地搜索 | markdown语法 |
| --- | --- | --- | --- | --- |
| hexo | ✓ | ✓ | ✓ | ✓ |
| vitepress | ✓ | ✓ | ✓ | ✓ |
| docusaurus | ✓ | ✓ | ✓ | ✓ |

常见的功能，这些框架都支持，所以大家可以放心使用。


## 3、社区生态
**社区：**
- Hexo, 由众多的独立开发者和用户提供支持和贡献，其社区十分活跃，你可以在社区中找到帮助和解决方案。
- VitePress作为Vue项目的一部分，可以享受到Vue社区的支持。Vue社区庞大活跃，有很多开发者和用户参与其中，提供支持和贡献。
- Docusaurus由Facebook开发和维护，拥有庞大的社区和开发者基础。它的社区中有很多开发者和用户提供支持和贡献，可以获得丰富的资源和帮助。

**github stars：**
| 框架 | github stars | url |
| --- | --- | --- |
| hexo | 38.2k | https://github.com/hexojs/hexo |
| vitepress | 10.4k | https://github.com/vuejs/vitepress |
| docusaurus | 51.8k | https://github.com/facebook/docusaurus |

相比较来说，docusaurus的stars数最多，hexo次之，vitepress最少当然10k左右的star其实已经很高了。

通过github stars的数量从侧面反应了这些框架在开源社区中的受欢迎程度和广泛使用的程度。然而，stars数目并不是衡量一个工具好坏的唯一标准。除了stars数目外，还应考虑其他因素，例如功能特性、扩展性、性能等。每个工具都有自己的特点和优势，适用于不同的使用场景和需求。因此，在选择合适的静态网站生成器时，除了stars数目外，还应该综合考虑工具的特点和适用性，以及社区支持和生态系统的健康程度，这只是提供给大家一个参考。

**theme：**
- Hexo官方提供了一些内置的主题供选择，如Next、landscape、jacman等。这些主题具有不同的风格和布局，可以根据个人喜好进行选择和定制。Hexo社区中也有许多第三方开发的主题，如Butterfly、Maupassant等。这些主题提供了更多的样式和功能定制选项，可以满足更多的需求。
- VitePress官方提供了默认的主题，具有简洁的设计和易于导航的布局。这个主题适合构建技术文档和API文档等。VitePress使用Vue单文件组件来编写内容，因此可以根据需求自定义主题。可以通过修改默认主题的样式和布局，或者创建全新的主题来满足个性化需求。
- Docusaurus官方提供了默认主题，具有专注于文档网站的特点。它提供了清晰的导航结构、多语言支持、版本控制等功能，适合构建开源项目的文档网站。Docusaurus支持通过React自定义布局和组件来创建定制化主题。可以根据项目需求进行样式和布局的修改，或者通过创建自定义组件来扩展功能。

主题模板是静态网站生成器中用于定义网站外观和布局的重要组成部分。Hexo、VitePress和Docusaurus都提供了丰富的主题模板供选择。

Hexo拥有官方和第三方主题，可满足不同风格和需求；VitePress提供默认主题和自定义选项，适用于简洁的开源项目文档网站；Docusaurus的官方主题同样适合构建开源项目文档网站，并支持自定义布局和组件。

在选择主题模板时，应考虑风格、功能定制和社区支持。通过选择适合的主题模板，您可以快速打造吸引人、个性化的网站，满足您的需求和品味。

## 4、性能
说性能之前，得先知道各个框架底层的渲染框架，
- hexo，底层使用EJS，EJS是一款 ["嵌入式 JavaScript 模板"](https://ejs.co) , 因此hexo的运行时依赖很少，具有原生html的性能。
- vitepress，底层使用了vite、vue进行构建，vitepress运行时会有一个hydrate的过程，因此需要额外依赖vue.js的运行时支持，也就是需要加载额外的js文件。
    :::tip
    所谓hydrate，指的是 Vue 在浏览器端接管由服务端发送的静态 HTML，使其变为由 Vue 管理的动态 DOM 的过程。简单解释来说，就是让静态的html可以通过vue.js进行交互。
    :::
- Docusaurus，底层使用了webpack、react进行构建，同样也会有hydrate的过程，也需要加载额外的js文件。

总结来说，从页面加载速度来说，hexo > vitepress > docusaurus。从开发环境的速来来说：ejs > vite > webpack。

但是，这些框架页面的加载速度来说，其实也就是200ms以内的差异，如果使用http cache、gzip等优化手段，这些框架的渲染速度差异几乎可以忽略不计。


## 5、扩展性
- hexo，由于底层使用了ejs模板引擎，因此想要更加方便的扩展，其实相对来说不是一件容易的事情。然而如果你能选择hexo，我相信你其实也不需要什么额外的扩展。
- vitepress，底层使用了vue，因此支持你完全使用vue的语法去定制你想要的任何样式。
- docusaurus, 底层使用了react，因此同样支持你完全使用react的语法去定制你想要的任何样式。


## 总结
综上所述，根据不同的使用场景和需求，可以选择适合的工具。

如果你是一个**非前端开发者**，那么我建议hexo，你完全可以使用hexo提供丰富的社区模板构建你想要的页面。

如果你是前端程序员，并且技术栈以vue为主，可以尝试vitepress，但是vitepress不支持博客，当然你完全可以定制化主题，但是不妨可以先看看hexo是否有满足你需求的博客主题模板。

如果你是前端程序员，并且技术栈以react为主，可以使用docusaurus，它同时支持博客和文档，同样支持定制化主题。

最后献上我的个人博客网站：https://blog.chdl.fun , 我的博客是采用了docusaurus进行构建，欢迎读者老爷前来围观。


## 参考：
- hexo官方网站： https://hexo.io
- vitepress官方网站：https://vitepress.dev
- docusaurus官方网站：https://docusaurus.io
- ejs官方网站：https://ejs.co
- vue.js：https://v2.ssr.vuejs.org/guide/hydration.html#client-side-hydration
