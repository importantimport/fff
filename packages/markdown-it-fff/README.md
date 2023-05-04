# Markdown It **FFF**

🌟 markdown-it plugin for auto-conversion other frontmatter variable formats to FFF Flavored Frontmatter.

## Install

```sh
pnpm add markdown-it-fff # pnpm
# yarn add markdown-it-fff # yarn
# npm i markdown-it-fff # npm
```

## Usage

```ts
import MarkdownIt from 'markdown-it'
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { fffPlugin } from 'markdown-it-fff'

const md = MarkdownIt().use(frontmatterPlugin, {
  grayMatterOptions: {
    excerpt: true,
  },
}).use(fffPlugin, {
  presets: ['vue', 'hugo'],
})
```

### Options

Configuration (optional).

#### options.presets

default: `['hugo', 'vue']`

Specifies a preset for how remark-fff will be converted.

When it is a string, the corresponding object is retrieved from [presets.ts](src/presets.ts).

You can also create your own presets!

```ts
use(fffPlugin, {
  presets: [
    'hugo', // presets['hugo']
    {
      created: 'date',
      summary: 'excerpt',
      flags: ({ draft }) => (draft ? ['draft'] : []),
    },
  ],
})
```

#### options.strict

default: `undefined`

Forced conversion to a single type, currently limited to media variables.

```ts
use(fffPlugin, {
  strict: {
    media: {
      type: 'string',
      array: false,
    },
  },
})
```
