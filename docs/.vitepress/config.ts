import { version } from '../package.json'
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import footnote from 'markdown-it-footnote'

const nav = () => [
  {
    text: version,
    items: [
      {
        text: 'Changelog',
        link: '/version/changelog',
      },
      {
        text: 'Contributing',
        link: '/intro/contributing',
      },
    ],
  },
]

const sidebar = () => [
  {
    text: 'Introduction',
    collapsible: true,
    items: [
      { text: 'What is FFF?', link: '/intro/what-is-fff' },
      { text: 'Implementing', link: '/intro/implementing' },
      {
        text: 'Contributing',
        link: '/intro/contributing',
      },
      { text: 'Showcase', link: '/intro/showcase' },
    ],
  },
  {
    text: 'Concepts',
    collapsible: true,
    items: [
      {
        text: 'Object Media',
        link: '/concepts/object-media',
      },
      {
        text: 'Flags',
        link: '/concepts/flags',
      },
      {
        text: 'Flavor Transform',
        link: '/concepts/flavor-transform'
      }
    ],
  },
  {
    text: 'Packages',
    collapsible: true,
    items: [
      {
        text: 'fff-flavored-frontmatter',
        link: '/packages/fff-flavored-frontmatter',
      },
      { text: 'remark-fff', link: '/packages/remark-fff' },
      { text: 'markdown-it-fff', link: '/packages/markdown-it-fff' },
      { text: 'indiekit-preset-fff', link: '/packages/indiekit-preset-fff' },
      { text: 'create-fff', link: '/packages/create-fff'}
    ],
  },
  {
    text: 'Version',
    collapsible: true,
    items: [
      { text: 'Changelog', link: '/version/changelog' },
      { text: '0.5', link: '/version/0.5' },
      { text: '0.4', link: '/version/0.4' },
      { text: '0.3', link: '/version/0.3' },
      { text: '0.2', link: '/version/0.2' },
      { text: '0.1', link: '/version/0.1' },
    ],
  },
]

export default withPwa(
  defineConfig({
    lang: 'en-US',
    title: 'FFF Flavored Frontmatter',
    titleTemplate: 'FFF',
    description: 'The Flexible & Functional Frontmatter Solution.',
    appearance: 'dark',
    lastUpdated: true,
    markdown: {
      theme: {
        light: 'material-theme-lighter',
        dark: 'material-theme-darker',
      },
      config: (md) => md.use(footnote),
    },
    head: [
      [
        'link',
        { rel: 'icon', href: '/glowing_star.svg', type: 'image/svg+xml' },
      ],
      [
        'link',
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
          type: 'application/manifest+json',
        },
      ],
      [
        'meta',
        {
          property: 'og:image',
          content:
            'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384',
        },
      ],
      [
        'meta',
        {
          property: 'twitter:image',
          content:
            'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384',
        },
      ],
      ['meta', { property: 'twitter:card', content: 'summary' }],
      [
        'script',
        {
          src: 'https://plausible.kwaa.dev/js/plausible.js',
          defer: '',
          'data-domain': 'fff.js.org',
        },
      ],
    ],
    themeConfig: {
      nav: nav(),
      sidebar: sidebar(),
      siteTitle: 'FFF',
      logo: '/glowing_star.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/importantimport/fff' },
      ],
      editLink: {
        pattern: 'https://github.com/importantimport/fff/edit/main/:path',
        text: 'Suggest changes to this page',
      },
    },
    pwa: {
      registerType: 'autoUpdate',
      includeManifestIcons: false,
      manifest: {
        id: '/',
        name: 'FFF Flavored Frontmatter',
        short_name: 'FFF',
        description: 'The Flexible & Functional Frontmatter Solution.',
        theme_color: '#fdd835',
        icons: [
          {
            src: 'glowing_star.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    },
  })
)
