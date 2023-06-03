# FFF Flavored Frontmatter

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
