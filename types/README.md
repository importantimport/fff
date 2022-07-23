# FFF Flavored Frontmatter

🌟 Yet Another Opinionated Frontmatter Variable Specs.

## Installation

> Pls confirm the version you need before installing, or always keep the latest version.

```bash
pnpm add -D fff-flavored-frontmatter # pnpm
yarn add fff-flavored-frontmatter # yarn
npm i -D fff-flavored-frontmatter # npm
```

## Usage

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