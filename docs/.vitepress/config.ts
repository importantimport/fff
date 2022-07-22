import { defineConfig } from 'vitepress'
import { version } from '../package.json'
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
      { text: 'Implementation', link: '/intro/implementation' },
      {
        text: 'Contributing',
        link: '/intro/contributing',
      },
    ],
  },
  {
    text: 'Version',
    collapsible: true,
    items: [
      { text: 'Changelog', link: '/version/changelog' },
      { text: '0.2', link: '/version/0.2' },
      { text: '0.1', link: '/version/0.1' },
    ],
  },
]

export default defineConfig({
  lang: 'en-US',
  title: 'FFF Flavored Frontmatter',
  titleTemplate: 'FFF',
  description: 'Yet Another Opinionated Frontmatter Variable Specs.',
  appearance: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'material-lighter',
      dark: 'material-darker',
    },
    config: (md) => md.use(footnote),
  },
  head: [
    ['link', { rel: 'icon', href: '/glowing_star.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:image', content: 'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384'}],
    ['meta', { property: 'twitter:image', content: 'https://og-image.vercel.app/**FFF**%20Flavored%20Frontmatter.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Ffff.js.org%2Fglowing_star.svg&widths=256&widths=384&heights=256&heights=384'}],
    ['meta', { property: 'twitter:card', content: 'summary'}]
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
})
