---
title: 'Implementation'
---

# Implementation

All projects known to implement or partially implement FFF are listed here.

- [Urara](https://github.com/importantimport/urara) - Sweet, Powerful, IndieWeb-Compatible SvelteKit Blog Starter.
- [Gumori](https://github.com/importantimport/gumori) - Minimal Stylesheets, IndieWeb-Compatible Astro Blog Starter.
  - [Gumori You](https://github.com/importantimport/gumori-you) - Bringing Material Design 3 to the Astro Blog.

Add yours is also welcome! You can decide for yourself which variables you want to be compatible with (and expand on them)

> But pls don't have variables that are close in function but named differently: e.g. `lastmod` and `updated`.

## Badges

If your project is already FFF compatible,
you can use the badge from [shields.io](https://shields.io) to illustrate this.

<script setup>
  import { version } from '../package.json'
</script>

<ul>
  <li><img :src="`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${version}-yellow?style=plastic`" alt="plastic"></li>
  <li><img :src="`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${version}-yellow?style=flat`" alt="flat"></li>
  <li><img :src="`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${version}-yellow?style=flat-square`" alt="flat-square"></li>
  <li><img :src="`https://img.shields.io/badge/%F0%9F%8C%9F%20F%20F%20F-${version}-yellow?style=for-the-badge`" alt="for-the-badge"></li>
</ul>

Replace `#badge-here` with one of the image links above for use in Markdown:

> Don't forget to note the version!

```md
[![fff](#badge-here)](https://fff.js.org)
```