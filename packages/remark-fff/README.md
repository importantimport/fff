# Remark FFF

🌟 Remark plugin for auto-conversion other frontmatter variable formats to FFF Flavored Frontmatter.

## What is this?

This package is a unified (remark) plugin to convert other frontmatter variable formats to FFF Flavored Frontmatter.

Using it, you can painlessly migrate posts from old to FFF-compatible blog frameworks that use Remark.

## Install

This package supports both ESM and CJS.

```bash
pnpm add remark-fff # pnpm
# yarn add remark-fff # yarn
# npm i remark-fff # npm
```

## Usage

Use in MDsveX or Astro or Nuxt:

```ts
import remarkFFF from 'remark-fff'

export default {
  remarkPlugins: [
    // without options
    remarkFFF,
    // with options
    [remarkFFF, { presets: ['hugo'], target: 'astro' }]
  ],
}
```

### Options

Configuration (optional).

#### options.presets

default: `[]`

Specifies a preset for how remark-fff will be converted.

You can create your own presets, or import some from `fff-transform-presets`.

```ts
import remarkFFF from 'remark-fff'
import { hugo } from 'fff-transform-presets'

remarkFFF({
  presets: [
    hugo
    {
      created: 'date',
      flags: ({ draft }) => (draft ? ['draft'] : []),
      summary: 'excerpt',
    },
  ],
})
```

#### options.target

default: `mdsvex`

Packages that use this plugin currently support MDsveX, Astro and Nuxt.

```ts
import remarkFFF from 'remark-fff'

remarkFFF({ target: 'astro' })
```

#### options.strict

default: `undefined`

Forced conversion to a single type, currently limited to media variables.

```ts
import remarkFFF from 'remark-fff'

remarkFFF({
  strict: {
    media: {
      type: 'string',
      array: false,
    },
  },
})
```
