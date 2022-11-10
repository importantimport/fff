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

Use in MDsveX or Astro:

```ts
import remarkFFF from 'remark-fff'

export default defineConfig({
  ...,
  remarkPlugins: [
    ...,
    // without options
    remarkFFF
    // with options
    [remarkFFF, { presets: ['hugo'], target: 'astro' }]
  ],
})
```

### Options

Configuration (optional).

#### options.presets

default: `['hugo']`

Specifies a preset for how remark-fff will be converted.

When it is a string, the corresponding object is retrieved from [presets.ts](src/presets.ts).

You can also create your own presets!

```ts
remarkPlugins: [
  [
    remarkFFF,
    {
      presets: [
        'hugo', // presets['hugo']
        {
          created: 'date',
          summary: 'excerpt',
          flags: ({ draft }) => draft ? ['draft'] : []
        }
      ]
    }
  ]
],
```

#### options.target

default: `mdsvex`

Packages that use this plugin currently support MDsveX and Astro.

```ts
remarkPlugins: [
  [
    remarkFFF,
    { target: 'astro' }
  ]
],
```

#### options.strict

default: `undefined`

Forced conversion to a single type, currently limited to media variables.

```ts
remarkPlugins: [
  [
    remarkFFF,
    {
      strict: {
        media: {
          type: 'string',
          array: false
        }
      }
    }
  ]
],
```
