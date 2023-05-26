# Markdown It FFF

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

const md = MarkdownIt()
  .use(frontmatterPlugin, {
    grayMatterOptions: {
      excerpt: true,
    },
  })
  .use(fffPlugin, {
    presets: [{
      created: 'date',
      flags: ({ draft }) => (draft ? ['draft'] : []),
      summary: 'excerpt',
    }],
  })
```

### Options

Configuration (optional).

#### options.presets

default: `[]`

Specifies a preset for how remark-fff will be converted.

You can create your own presets, or import some from `fff-transform-presets`.

```ts
import MarkdownIt from 'markdown-it'
import { fffPlugin } from 'markdown-it-fff'
import { hugo, mditVue } from 'fff-transform-presets'

const md = MarkdownIt()
  .use(fffPlugin, {
    presets: [
      hugo,
      mditVue,
      {
        created: 'date',
        flags: ({ draft }) => (draft ? ['draft'] : []),
        summary: 'excerpt',
      },
    ],
  })
```

#### options.strict

default: `undefined`

Forced conversion to a single type, currently limited to media variables.

```ts
import MarkdownIt from 'markdown-it'
import { fffPlugin } from 'markdown-it-fff'

const md = MarkdownIt()
  .use(fffPlugin, {
    strict: {
      media: {
        type: 'string',
        array: false,
      },
    },
  })
```
