<div align="center">
<a href="https://github.com/importantimport/fff">
<img src="docs/public/glowing_star.svg" alt="fff" width="192px" />
</a>
</div>
<h1 align="center">FFF<br />Flavored<br />Frontmatter</h1>
<p align="center">Yet Another Opinionated Frontmatter Variable Specs.</p>

## 📝 Documentation

The documentation is located in the [`docs`](docs) folder and can be viewed from [fff.js.org](https://fff.js.org).

## 📦️ Packages

### [fff-flavored-frontmatter](/packages/fff-flavored-frontmatter/)

[![npm](https://img.shields.io/npm/v/fff-flavored-frontmatter?color=yellow)](https://npmjs.com/package/fff-flavored-frontmatter) [![jsdocs.io](https://img.shields.io/badge/jsdocs.io-reference-yellow)](https://www.jsdocs.io/package/fff-flavored-frontmatter) ![minified size](https://img.shields.io/bundlephobia/min/fff-flavored-frontmatter?color=yellow) ![downloads](https://img.shields.io/npm/dt/fff-flavored-frontmatter?color=yellow) [![deno.land](https://img.shields.io/badge/available%20on-deno.land/x-black.svg?logo=deno)](https://deno.land/x/fff)

Type definition of the FFF Flavored Frontmatter.

```ts
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
```

---

### [remark-fff](/packages/remark-fff/)

[![npm](https://img.shields.io/npm/v/remark-fff?color=yellow)](https://npmjs.com/package/remark-fff) [![jsdocs.io](https://img.shields.io/badge/jsdocs.io-reference-yellow)](https://www.jsdocs.io/package/remark-fff) ![minified size](https://img.shields.io/bundlephobia/min/remark-fff?color=yellow) ![downloads](https://img.shields.io/npm/dt/remark-fff?color=yellow)

Remark plugin for auto-conversion other frontmatter variable formats to FFF Flavored Frontmatter.

```ts
import remarkFFF from 'remark-fff'

export default defineConfig({
  remarkPlugins: [[remarkFFF, { presets: ['hugo'], target: 'astro' }]],
})
```

---

### [indiekit-preset-fff](/packages/indiekit-preset-fff/)

[![npm](https://img.shields.io/npm/v/indiekit-preset-fff?color=yellow)](https://npmjs.com/package/indiekit-preset-fff) [![jsdocs.io](https://img.shields.io/badge/jsdocs.io-reference-yellow)](https://www.jsdocs.io/package/indiekit-preset-fff) ![minified size](https://img.shields.io/bundlephobia/min/indiekit-preset-fff?color=yellow) ![downloads](https://img.shields.io/npm/dt/indiekit-preset-fff?color=yellow)

FFF Flavored Frontmatter publication preset for Indiekit.

```json
{
  "plugins": ["indiekit-preset-fff"],
  "indiekit-preset-fff": {
    "format": "yaml"
  }
}
```

## 📄 License

> [glowing_star.svg](docs/public/glowing_star.svg) from the [adobe-fonts/noto-emoji-svg](https://github.com/adobe-fonts/noto-emoji-svg) distributed under the [Apache License, Version 2.0](https://github.com/adobe-fonts/noto-emoji-svg/blob/main/LICENSE).

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
