# FFF Transform Presets

🌟 Predefined transform presets for FFF Flavored Frontmatter.

## Installation

```bash
pnpm add fff-transform-presets # pnpm
# yarn add fff-transform-presets # yarn
# npm i fff-transform-presets # npm
```

## Usage

You can use it with the transform function or the remark / markdown-it plugin.

```ts
import { transform } from 'fff-flavored-frontmatter'
import { hexo, hexoReverse } from 'fff-transform-presets'

// original frontmatter
let fm = {
  // ...
}

// hexo => fff
fm = transform(fm, [hexo])

// fff => hexo
fm = transform(fm, [hexoReverse])
```

```ts
import { hugo } from 'fff-transform-presets'
import remarkFFF from 'remark-fff'

export default defineConfig({
  remarkPlugins: [
    [remarkFFF, { presets: [hugo], target: 'astro' }]
  ],
})
```

```ts
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { hugo, mditVue } from 'fff-transform-presets'
import MarkdownIt from 'markdown-it'
import { fffPlugin } from 'markdown-it-fff'

const md = MarkdownIt().use(frontmatterPlugin, {
  grayMatterOptions: {
    excerpt: true,
  },
}).use(fffPlugin, {
  presets: [
    hugo,
    mditVue,
  ],
})
```
