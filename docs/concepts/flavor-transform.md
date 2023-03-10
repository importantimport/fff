---
title: 'Flavor Transform'
outline: 'deep'
---

# Flavor Transform

Modifying the post frontmatter every time you migrate your blog framework/theme is a hassle.

But with `remark-fff` and `markdown-it-fff`, you can freely convert your frontmatter without modifying the original posts!

## FFFPreset

The above two plugins accept objects named `FFFPreset`.

### Basic

a basic preset looks like this:

```ts
const basic = {
  created: 'date',
  flags: ({ draft }) => (draft ? ['draft'] : []),
}
```

It converts the date to created and writes `draft: true` to `flags: ['draft']`. for compatibility and code simplicity, the original frontmatter data remains.

```yaml
# input
date: 2023-02-23
draft: true

# output
date: 2023-02-23
created: 2023-02-23
draft: true
flags:
  - draft
```

### Arrow

The key represents the name of the output variable and is replaced directly if the value is a string.

When value is an arrow function, it passes the entire frontmatter:

```ts
const flags = {
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    Array.from(
      new Set([
        ...(flags ?? []),
        ...(draft ? ['draft'] : []),
        ...(visibility ? [visibility] : []),
      ])
    ),
}
```

```yaml
# input
draft: true
visibility: 'unlisted'
flags:
  - foo
  - bar

# output
draft: true
visibility: 'unlisted'
flags:
  - foo
  - bar
  - draft
  - unlisted
```

Note: When using the arrow function you need to ensure that it returns the original value or null.

### Predefined

When you use a string as a preset in the plugin parameters, it automatically reads the corresponding value in the predefined preset (if it exists).

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
    presets: [
      'vue', // https://github.com/importantimport/fff/blob/93f27f8de28c02974aa7d471f20f085443051be5/packages/markdown-it-fff/src/presets.ts#L10-L12
      'hugo', // https://github.com/importantimport/fff/blob/93f27f8de28c02974aa7d471f20f085443051be5/packages/remark-fff/src/presets.ts#L17-L46
    ],
  })
```

## Using the plugin

Go to the README for [`remark-fff`](/packages/remark-fff) or [`markdown-it-fff`](/packages/markdown-it-fff)!

## TransformFm

For environments where the above two plugins do not work directly (e.g. Qwik City), you can also use the `transformFm` function exported by `remark-fff`.

Note that it only accepts FFFPreset (not string), so you must import the preset:

```ts
import { useDocumentHead } from '@builder.io/qwik-city'
import { transformFm, hugo } from 'remark-fff'

export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const frontmatter = transformFm(head.frontmatter, [
    hugo,
    {
      created: 'date',
      summary: 'excerpt',
      flags: ({ draft }) => (draft ? ['draft'] : []),
    },
  ])
})
```
