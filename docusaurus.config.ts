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
                // {
                //     type: 'docSidebar',
                //     sidebarId: 'tutorialSidebar',
                //     position: 'right',
                //     label: 'Tutorial',
                // },
                { to: '/blog', label: 'Blog', position: 'right' },
                { type: 'localeDropdown', position: 'right' },
                {
                    href: 'https://github.com/cuihaoweb',
                    label: 'GitHub',
                    position: 'right',
                }
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
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
