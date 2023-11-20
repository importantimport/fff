---
title: 'Implementing'
---

# Implementing

## Make Compatible

This document contains all historical versions of FFF. (see [changelog](/version/changelog.html) for details)

In general, you only need to consider compatibility with the latest version.

You can extend the functionality of FFF as much as you want, but can't intentionally create incompatibilities.

## Badges

If your project is already FFF compatible,
you can use the badge from [shields.io](https://shields.io) to illustrate this.

<script setup>
  import { version as pkgVersion } from '../../packages/fff-flavored-frontmatter/package.json'
  const version = pkgVersion.split('.').slice(0, 2).join('.')
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
