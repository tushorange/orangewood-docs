// Import necessary modules
const { themes } = require('prism-react-renderer');
const fs = require('fs');

// Define code themes
const code_themes = {
  light: themes.github,
  dark: themes.dracula,
};

// Define metadata
const meta = {
  title: 'Orangewood Labs Docs',
  tagline: 'Democratizing Robots',
  url: 'https://orangewoodwebsite.vercel.app/',
  baseUrl: '/',
  favicon: 'https://res.cloudinary.com/dreradzep/image/upload/v1725252710/fav_rda6mt.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
};

// Define docs settings
const docs = [
  // Define doc sections here (your existing settings)
];

// Define default settings for docs plugin
const defaultSettings = {
  breadcrumbs: true,
  editUrl: 'https://github.com/dyte-io/docs/tree/main/',
  showLastUpdateTime: false,
  sidebarCollapsible: false,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

// Function to create a docs plugin
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

// Import plugins
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

// Define plugins
const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  webpackPlugin,
  [
    '@docusaurus/plugin-client-redirects',
    {
      createRedirects(path) {
        // Your existing redirect logic
      },
    },
  ],
];

// Read HTML files
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

// Define main configuration
/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  trailingSlash: false,
  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
  scripts: [{ src: 'https://cdn.statuspage.io/se-v2.js', async: true }],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['**/tags/**', '/api/*'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],
  themeConfig: {
    image: '/img/dyte-docs-card.png',
    colorMode: {
      defaultMode: 'light',
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      logo: {
        href: '/',
        src: '/logo/ow-black.png',
        srcDark: '/logo/OWL-Logo-white.png',
        alt: 'Orangewood Documentation | Ornagewood Docs',
        height: '50px',
        width: 'auto',
      },
      items: [
        // Your existing navbar items
      ],
    },
    footer: {
      logo: {
        href: '/',
        src: 'https://res.cloudinary.com/dreradzep/image/upload/v1723783987/logo-white_kw3yma.png',
        srcDark: 'https://res.cloudinary.com/dreradzep/image/upload/v1723783987/logo-white_kw3yma.png',
        alt: 'Orangewood Documentation | Ornagewood Docs',
        height: '36px',
      },
      links: [
        // Your existing footer links
      ],
      copyright: 'Copyright © orangewood since 2017. All rights reserved.',
    },
    prism: {
      theme: code_themes.light,
      darkTheme: code_themes.dark,
      additionalLanguages: [
        // Your existing additional languages
      ],
      magicComments: [
        // Your existing magic comments
      ],
    },
    algolia: {
      appId: 'HL0HSV62RK',
      apiKey: '72ebf02146698733b7114c7b36da0945',
      indexName: 'docs',
      contextualSearch: true,
      searchParameters: {},
    },
  },
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
  // Add the onBrokenLinks option here
  onBrokenLinks: 'ignore',
};

module.exports = config;
