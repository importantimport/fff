---
title: 'Flavor Transform'
outline: 'deep'
---

# Flavor Transform

Modifying the post frontmatter every time you migrate your blog framework/theme is a hassle.

But with FFF Flavored Frontmatter, you can freely convert your frontmatter without modifying the original posts!

## [FFF Transform Preset](/references/fff-flavored-frontmatter.ffftransformpreset.html)

This is an `FFFTransformPreset` object that specifies how the Frontmatter should be transformed.

### Basic

a basic preset looks like this:

```ts
import type { FFFTransformPreset } from 'fff-flavored-frontmatter'

const basic: FFFTransformPreset = {
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
import type { FFFTransformPreset } from 'fff-flavored-frontmatter'

const flags: FFFTransformPreset = {
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

### [Reverse](/references/fff-flavored-frontmatter.ffftransformpresetreverse.html)

Just like [FFF Transform Preset](#fff-transform-preset), but it uses any string as a key to export the FFF Flavored Frontmatter to other incompatible environments.

```ts
import type { FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

const basicReverse: FFFTransformPresetReverse = {
  date: 'created',
  draft: ({ flags }) => flags?.includes('draft'),
}
```

```yaml
# input
created: 2023-06-04
flags:
  - draft

# output
created: 2023-06-04
date: 2023-06-04
draft: true
flags:
  - draft
```

### Predefined

There are some predefined presets in the [`fff-transform-presets`](/packages/fff-transform-presets) package that can be used directly.

```ts
import { hexo, hugo } from 'fff-transform-presets'
```

## Using the plugin

Go to the README for [`remark-fff`](/packages/remark-fff) or [`markdown-it-fff`](/packages/markdown-it-fff)!

## Transform Function

For environments where the above two plugins do not work directly (e.g. Qwik City), you can also use the `transform` function exported by `fff-flavored-frontmatter`.

```ts
import { transform } from 'fff-flavored-frontmatter'
import { hexo } from 'fff-transform-presets'

let fm = { ... }
fm = transform(fm, [hexo])
```

```ts
import { useDocumentHead } from '@builder.io/qwik-city
import { transform, strict } from 'fff-flavored-frontmatter'
import { hugo } from 'fff-transform-presets'

export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const frontmatter = transform(head.frontmatter, [
    strict({
      media: {
        array: false,
        type: 'object',
      }
    }),
    hugo,
    {
      created: 'date',
      flags: ({ draft }) => (draft ? ['draft'] : []),
      summary: 'excerpt',
    },
  ])
})
```
