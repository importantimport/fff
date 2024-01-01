import { withPwa } from '@vite-pwa/vitepress'
import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

import { version } from '../../packages/fff-flavored-frontmatter/package.json'

const nav = [
  {
    items: [
      {
        link: '/version/changelog',
        text: 'Changelog',
      },
      {
        link: '/intro/contributing',
        text: 'Contributing',
      },
    ],
    text: version,
  },
]

const sidebar = [
  {
    // collapsed: true,
    items: [
      { link: '/intro/what-is-fff', text: 'What is FFF?' },
      { link: '/intro/implementing', text: 'Implementing' },
      {
        link: '/intro/contributing',
        text: 'Contributing',
      },
      { link: '/intro/showcase', text: 'Showcase' },
    ],
    text: 'Introduction',
  },
  {
    // collapsed: true,
    items: [
      {
        link: '/concepts/object-media',
        text: 'Object Media',
      },
      {
        link: '/concepts/flags',
        text: 'Flags',
      },
      {
        link: '/concepts/flavor-transform',
        text: 'Flavor Transform',
      },
    ],
    text: 'Concepts',
  },
  {
    // collapsed: false,
    items: [
      { link: '/version/1.2', text: '1.2' },
      { link: '/version/changelog', text: 'Changelog' },
    ],
    text: 'Versions',
  },
  {
    collapsed: true,
    items: [
      { link: '/version/1.1', text: '1.1' },
      { link: '/version/1.0', text: '1.0' },
      { link: '/version/0.5', text: '0.5' },
      { link: '/version/0.4', text: '0.4' },
      { link: '/version/0.3', text: '0.3' },
      { link: '/version/0.2', text: '0.2' },
      { link: '/version/0.1', text: '0.1' },
    ],
    text: 'Legacy Versions',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/packages/fff-flavored-frontmatter',
        text: 'fff-flavored-frontmatter',
      },
      {
        link: '/packages/fff-transform-presets',
        text: 'fff-transform-presets',
      },
      { link: '/packages/remark-fff', text: 'remark-fff' },
      { link: '/packages/markdown-it-fff', text: 'markdown-it-fff' },
      { link: '/packages/indiekit-preset-fff', text: 'indiekit-preset-fff' },
      { link: '/packages/create-fff', text: 'create-fff' },
    ],
    text: 'Packages',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/references/fff-flavored-frontmatter',
        text: 'fff-flavored-frontmatter',
      },
      {
        link: '/references/fff-transform-presets',
        text: 'fff-transform-presets',
      },
      { link: '/references/remark-fff', text: 'remark-fff' },
      { link: '/references/markdown-it-fff', text: 'markdown-it-fff' },
      { link: '/references/indiekit-preset-fff', text: 'indiekit-preset-fff' },
      // { link: '/references/create-fff', text: 'create-fff' },
    ],
    link: '/references/index',
    text: 'References',
  },
]

export default withPwa(
  defineConfig({
    appearance: 'dark',
    description: 'The Flexible & Functional Frontmatter Solution.',
    head: [
      [
        'link',
        { href: '/glowing_star.svg', rel: 'icon', type: 'image/svg+xml' },
      ],
      [
        'link',
        {
          href: '/manifest.webmanifest',
          rel: 'manifest',
          type: 'application/manifest+json',
        },
      ],
      [
        'meta',
        {
          content:
            'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384',
          property: 'og:image',
        },
      ],
      [
        'meta',
        {
          content:
            'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384',
          property: 'twitter:image',
        },
      ],
      ['meta', { content: 'summary', property: 'twitter:card' }],
      [
        'script',
        {
          'data-domain': 'fff.js.org',
          'defer': '',
          'src': 'https://plausible.kwaa.dev/js/plausible.js',
        },
      ],
    ],
    lang: 'en-US',
    lastUpdated: true,
    markdown: {
      config: md => md.use(footnote),
      theme: {
        dark: 'material-theme-darker',
        light: 'material-theme-lighter',
      },
    },
    pwa: {
      includeManifestIcons: false,
      manifest: {
        description: 'The Flexible & Functional Frontmatter Solution.',
        icons: [
          {
            purpose: 'any',
            sizes: 'any',
            src: 'glowing_star.svg',
            type: 'image/svg+xml',
          },
        ],
        id: '/',
        name: 'FFF Flavored Frontmatter',
        short_name: 'FFF',
        theme_color: '#fdd835',
      },
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 10,
              },
            },
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          },
          {
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 10,
              },
            },
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          },
        ],
      },
    },
    themeConfig: {
      editLink: {
        pattern: 'https://github.com/importantimport/fff/edit/main/:path',
        text: 'Suggest changes to this page',
      },
      logo: '/glowing_star.svg',
      nav,
      search: { provider: 'local' },
      sidebar,
      siteTitle: 'FFF',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/importantimport/fff' },
      ],
    },
    title: 'FFF Flavored Frontmatter',
    titleTemplate: 'FFF',
  }),
)
