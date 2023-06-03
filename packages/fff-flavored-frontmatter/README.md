# FFF Flavored Frontmatter

[![npm](https://img.shields.io/npm/v/fff-flavored-frontmatter?color=yellow)](https://npmjs.com/package/fff-flavored-frontmatter)
![minified size](https://img.shields.io/bundlephobia/min/fff-flavored-frontmatter?color=yellow)
![downloads](https://img.shields.io/npm/dt/fff-flavored-frontmatter?color=yellow)
[![deno.land](https://img.shields.io/badge/available%20on-deno.land/x-black.svg?logo=deno)](https://deno.land/x/fff)

🌟 Type definition of the FFF Flavored Frontmatter.

## Installation

> pls confirm the version you need before installing, or always keep the latest version.

```bash
pnpm add fff-flavored-frontmatter # pnpm
# yarn add fff-flavored-frontmatter # yarn
# npm i fff-flavored-frontmatter # npm
```

## Usage

###### Types

```ts
// Node
import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
// import type { FFFBase, FFFExtra } from 'fff-flavored-frontmatter'
// import type { FFFImage, FFFAudio, FFFVideo, FFFAuthor } from 'fff-flavored-frontmatter'

// Deno
// import type { FFFFlavoredFrontmatter } from 'https://deno.land/x/fff/mod.ts'
```

###### Utils

```ts
import { type FFFTransformPreset, transform } from 'fff-flavored-frontmatter'

const preset: FFFTransformPreset = {
  created: 'date',
  flags: ({ draft }) => (draft ? ['draft'] : []),
}

const fm = transform({
  date: '2023-02-23',
  draft: true,
}, [preset])

// {
//   date: '2023-02-23',
//   created: '2023-02-23',
//   draft: true,
//   flags: ['draft']
// }
console.log(fm)
```

> Go to [References](https://fff.js.org/references/fff-flavored-frontmatter.html) to see the list of utilities.
