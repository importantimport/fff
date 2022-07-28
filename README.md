<div align="center">
<a href="https://github.com/importantimport/fff">
<img src="docs/public/glowing_star.svg" alt="fff" width="192px" />
</a>
</div>

<h1 align="center">FFF<br />Flavored<br />Frontmatter</h1>
<p align="center">
<a href="https://npmjs.com/package/fff-flavored-frontmatter"><img src="https://img.shields.io/npm/v/fff-flavored-frontmatter?color=yellow" alt="npm"></a>
<a href="https://www.jsdocs.io/package/fff-flavored-frontmatter"><img src="https://img.shields.io/badge/jsdocs.io-reference-yellow" alt="jsdocs.io"></a>
<img src="https://img.shields.io/npm/dt/fff-flavored-frontmatter?color=yellow" alt="downloads">
<a href="https://deno.land/x/fff"><img src="https://img.shields.io/badge/available%20on-deno.land/x-black.svg?logo=deno" alt="deno.land"></a>
</p>

<p align="center">Yet Another Opinionated Frontmatter Variable Specs.</p>

## 📝 Documentation

The documentation is located in the [`docs`](docs) folder and can be viewed from the GitHub About link.

## 📦️ Package

> Pls confirm the version you need before installing, or always keep the latest version.

```bash
pnpm add -D fff-flavored-frontmatter # pnpm
yarn add fff-flavored-frontmatter # yarn
npm i -D fff-flavored-frontmatter # npm
```

### Usage

Use in a ESM + TypeScript Node.js project:

```ts
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
// import type { FFFBase, FFFExtra } from 'fff-flavored-frontmatter' // if you need them
// import type { FFFImage, FFFAudio, FFFVideo, FFFAuthor } from 'fff-flavored-frontmatter' // if you need them
```

CJS is also supported.

```ts
const { FFFFlavoredFrontmatter } = require('fff-flavored-frontmatter')
```

Or Deno?

```ts
import type { FFFFlavoredFrontmatter } from "https://deno.land/x/fff/fff.ts";
```

## 📄 License

> [glowing_star.svg](docs/public/glowing_star.svg) from the [adobe-fonts/noto-emoji-svg](https://github.com/adobe-fonts/noto-emoji-svg) distributed under the [Apache License, Version 2.0](https://github.com/adobe-fonts/noto-emoji-svg/blob/main/LICENSE).

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.