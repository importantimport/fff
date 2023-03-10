---
title: 'Object Media'
---

# Object Media

The common frontmatter variable format supports only links:

```yaml
# String Image
image: 'https://fff.local/images/foo.avif'
```

FFF Flavored Frontmatter extends it as an object, basically allowing you to set all the relevant data for a media.

```yaml
# Object Image
image:
  src: 'https://fff.local/images/foo.avif'
  alt: 'lorem ipsum'
  figcaption: 'lorem ipsum'
  sources:
    - srcset: 'https://fff.local/images/foo444.avif'
      media: '(min-width:444px)'
    - srcset: 'https://fff.local/images/foo666.avif'
      media: '(min-width:666px)'
```

Both formats are supported! You can use the plugin to convert them.

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
    strict: {
      media: {
        type: 'string', // 'string' | 'object'
      },
    },
  })
```
