<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./docs/public/fff-dark.png">
    <img src="./docs/public/fff-light.png">
  </picture>
  <h6>The Flexible & Functional Frontmatter Solution.</h6>
</div>

---

<div align="center">

**[<kbd> <br> Introduction <br> </kbd>](https://fff.js.org/intro/what-is-fff.html)** 
**[<kbd> <br> Concepts <br> </kbd>](https://fff.js.org/concepts/object-media.html)** 
**[<kbd> <br> Version <br> </kbd>](https://fff.js.org/version/changelog.html)**

</div>

---

## 📦️ Packages

### [fff-flavored-frontmatter](/packages/fff-flavored-frontmatter/)

[![npm](https://img.shields.io/npm/v/fff-flavored-frontmatter?color=yellow)](https://npmjs.com/package/fff-flavored-frontmatter)
![minified size](https://img.shields.io/bundlephobia/min/fff-flavored-frontmatter?color=yellow)
![downloads](https://img.shields.io/npm/dt/fff-flavored-frontmatter?color=yellow)
[![deno.land](https://img.shields.io/badge/available%20on-deno.land/x-black.svg?logo=deno)](https://deno.land/x/fff)

Type definition of the FFF Flavored Frontmatter.

```ts
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
```

---

### [fff-transform-presets](/packages/fff-transform-presets/)

[![npm](https://img.shields.io/npm/v/fff-transform-presets?color=yellow)](https://npmjs.com/package/fff-transform-presets)
![minified size](https://img.shields.io/bundlephobia/min/fff-transform-presets?color=yellow)
![downloads](https://img.shields.io/npm/dt/fff-transform-presets?color=yellow)

Predefined transform presets for FFF Flavored Frontmatter.

```ts
import { transform } from 'fff-flavored-frontmatter'
import { hexo } from 'fff-transform-presets'

fm = transform(fm, [hexo])
```

---

### [remark-fff](/packages/remark-fff/)

[![npm](https://img.shields.io/npm/v/remark-fff?color=yellow)](https://npmjs.com/package/remark-fff)
![minified size](https://img.shields.io/bundlephobia/min/remark-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/remark-fff?color=yellow)

Remark plugin for auto-conversion other frontmatter variable formats to FFF Flavored Frontmatter.

```ts
import remarkFFF from 'remark-fff'
import { hexo } from 'fff-transform-presets'

export default defineConfig({
  remarkPlugins: [[remarkFFF, { presets: [hexo], target: 'astro' }]],
})
```

---

### [markdown-it-fff](/packages/markdown-it-fff/)

[![npm](https://img.shields.io/npm/v/markdown-it-fff?color=yellow)](https://npmjs.com/package/markdown-it-fff)
![minified size](https://img.shields.io/bundlephobia/min/markdown-it-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/markdown-it-fff?color=yellow)

markdown-it plugin for auto-conversion other frontmatter variable formats to FFF Flavored Frontmatter.

```ts
import MarkdownIt from 'markdown-it'
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { fffPlugin } from 'markdown-it-fff'

const md = MarkdownIt().use(frontmatterPlugin).use(fffPlugin)
```

---

### [indiekit-preset-fff](/packages/indiekit-preset-fff/)

[![npm](https://img.shields.io/npm/v/indiekit-preset-fff?color=yellow)](https://npmjs.com/package/indiekit-preset-fff)
![minified size](https://img.shields.io/bundlephobia/min/indiekit-preset-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/indiekit-preset-fff?color=yellow)

FFF Flavored Frontmatter publication preset for Indiekit.

```json
{
  "indiekit-preset-fff": {
    "format": "yaml",
    "types": "urara"
  },
  "plugins": ["indiekit-preset-fff"]
}
```

---

### [create-fff](/packages/create-fff/)

[![npm](https://img.shields.io/npm/v/create-fff?color=yellow)](https://npmjs.com/package/create-fff)
![minified size](https://img.shields.io/bundlephobia/min/create-fff?color=yellow)
![downloads](https://img.shields.io/npm/dt/create-fff?color=yellow)

```bash
pnpm create fff netlify-cms
```

## 📄 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
