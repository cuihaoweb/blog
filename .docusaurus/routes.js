import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ChBlog/en/blog',
    component: ComponentCreator('/ChBlog/en/blog', '151'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/archive',
    component: ComponentCreator('/ChBlog/en/blog/archive', '6b2'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/ellipsis',
    component: ComponentCreator('/ChBlog/en/blog/ellipsis', '4f3'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/how-to-select-ssg-frame',
    component: ComponentCreator('/ChBlog/en/blog/how-to-select-ssg-frame', 'b8d'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/next-fullstack-intro',
    component: ComponentCreator('/ChBlog/en/blog/next-fullstack-intro', 'f4a'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/react-or-vue',
    component: ComponentCreator('/ChBlog/en/blog/react-or-vue', 'a65'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags',
    component: ComponentCreator('/ChBlog/en/blog/tags', '012'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/css',
    component: ComponentCreator('/ChBlog/en/blog/tags/css', '828'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/docker',
    component: ComponentCreator('/ChBlog/en/blog/tags/docker', '3e2'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/frame',
    component: ComponentCreator('/ChBlog/en/blog/tags/frame', 'bd1'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/next-js',
    component: ComponentCreator('/ChBlog/en/blog/tags/next-js', '574'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/react',
    component: ComponentCreator('/ChBlog/en/blog/tags/react', '51d'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/ssg',
    component: ComponentCreator('/ChBlog/en/blog/tags/ssg', '7b6'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/tags/vue',
    component: ComponentCreator('/ChBlog/en/blog/tags/vue', '0af'),
    exact: true
  },
  {
    path: '/ChBlog/en/blog/what-is-docker',
    component: ComponentCreator('/ChBlog/en/blog/what-is-docker', 'fdf'),
    exact: true
  },
  {
    path: '/ChBlog/en/search',
    component: ComponentCreator('/ChBlog/en/search', 'd04'),
    exact: true
  },
  {
    path: '/ChBlog/en/docs',
    component: ComponentCreator('/ChBlog/en/docs', '3b6'),
    routes: [
      {
        path: '/ChBlog/en/docs',
        component: ComponentCreator('/ChBlog/en/docs', 'f3b'),
        routes: [
          {
            path: '/ChBlog/en/docs',
            component: ComponentCreator('/ChBlog/en/docs', '890'),
            routes: [
              {
                path: '/ChBlog/en/docs/category/nextjs',
                component: ComponentCreator('/ChBlog/en/docs/category/nextjs', '652'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/intro',
                component: ComponentCreator('/ChBlog/en/docs/intro', '06f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/build',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/build', 'bfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/buildIn-components/Image',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/buildIn-components/Image', '931'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/buildIn-components/Link',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/buildIn-components/Link', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/buildIn-components/Script',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/buildIn-components/Script', '1c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/client-api/lazy-load',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/client-api/lazy-load', 'bc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/client-api/useParams',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/client-api/useParams', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/client-api/usePathname',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/client-api/usePathname', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/client-api/useRouter',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/client-api/useRouter', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/configure/env',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/configure/env', '85d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/configure/eslint',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/configure/eslint', 'dfc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/configure/next.configjs',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/configure/next.configjs', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/configure/stylelint',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/configure/stylelint', '529'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/deploy/docker',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/deploy/docker', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/deploy/pm2',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/deploy/pm2', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/deploy/static-deploy',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/deploy/static-deploy', '452'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/get-start',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/get-start', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/install',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/install', 'b0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/rendering/client-component',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/rendering/client-component', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/rendering/composition-component',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/rendering/composition-component', 'a18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/rendering/server-compnent',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/rendering/server-compnent', '19e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/router/dynamic-routes',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/router/dynamic-routes', 'a5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/router/index',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/router/index', 'dce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/router/layout',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/router/layout', '95c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/router/loading',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/router/loading', '00d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/router/not-found',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/router/not-found', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/seo/metadata',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/seo/metadata', '6ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/seo/robots.txt',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/seo/robots.txt', 'fe8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/seo/sitemap.xml',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/seo/sitemap.xml', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/cookies',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/cookies', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/fetch',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/fetch', '8f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/headers',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/headers', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/middleware',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/middleware', '399'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/NextResponse',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/NextResponse', 'bfb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/notFound',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/notFound', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/redirect',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/redirect', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-api/RESTful-API',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-api/RESTful-API', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-data/generateMetadata',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-data/generateMetadata', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-data/generateSitemaps',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-data/generateSitemaps', 'f5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/server-data/generateStaticParams',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/server-data/generateStaticParams', '933'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/css-module',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/css-module', '7ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/css-pretreater',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/css-pretreater', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/self-adaption',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/self-adaption', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/tailwindcss',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/tailwindcss', '019'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/theme',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/theme', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ChBlog/en/docs/nextjs/styling/ui-component',
                component: ComponentCreator('/ChBlog/en/docs/nextjs/styling/ui-component', '0d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ChBlog/en/',
    component: ComponentCreator('/ChBlog/en/', 'a67'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
