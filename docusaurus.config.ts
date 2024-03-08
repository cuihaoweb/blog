import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'ChBlog',
    tagline: 'welcom to my blog',
    favicon: 'img/logo.ico',

    url: 'https://blog.chdl.fun',
    baseUrl: '/ChBlog/',
    projectName: 'blog', // Usually your repo name.
    organizationName: 'cuihaoweb', // Usually your GitHub org/user name.
    deploymentBranch: 'rb',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'zh',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
              htmlLang: 'en',
            },
            zh: {
                htmlLang: 'zh',
            }
        }
    },

    headTags: [
        // 百度统计
        {
            tagName: 'script',
            attributes: {type: 'text/javascript'},
            innerHTML: `
                var _hmt = _hmt || [];
                (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?9f42b9e0421867461c737dfa74f0e34d";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                })();
            `
        }
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    sortPosts: 'ascending',
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ]
    ],

    themes: [
        [
            "@easyops-cn/docusaurus-search-local",
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                hashed: true
            }
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        metadata: [
            {name: 'keywords', content: 'ch,blog'},
            {name: 'description', content: 'the blog of ch, it has some articles about web, welcome to visit'},
            {name: 'google-site-verification', content: 'fs5EybByxqvIchWyU4mIpxHS8HJrFYX8flIiBwdT6ps'}
        ],
        colorMode: {
            defaultMode: 'dark'
        },
        navbar: {
            title: 'ChBlog',
            logo: {
                alt: 'Ch Blog Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    to: '/docs/intro',
                    label: '教程',
                    position: 'right',
                    items: [
                        {
                            to: '/docs/category/nextjs', label: 'NextJs教程'
                        }
                    ]
                },
                { to: '/blog', label: 'Blog', position: 'right' },
                {
                    href: 'https://github.com/cuihaoweb',
                    label: 'GitHub',
                    position: 'right',
                },
                { type: 'localeDropdown', position: 'right' }
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/',
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/cuihaoweb',
                        }
                    ]
                },
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'ch home',
                            to: 'https://www.chdl.fun',
                        },
                        {
                            label: 'toolkit',
                            href: 'https://tk.chdl.fun',
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                {
                    className: 'code-block-error-line',
                    line: 'error-line',
                },
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'}
                }
            ]
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
