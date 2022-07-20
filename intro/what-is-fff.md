---
title: 'What is FFF?'
---

# What is FFF Flavored Frontmatter?

Yet Another Opinionated Frontmatter Variable Spec.

## Motivation

I'm working on several static blog generators (see [Implementation](/intro/implementation) for details),

so I'd like to design a FrontMatter Variable Specs to be shared between these projects.

## Why not just reuse the existing ones?

I'm not satisfied with the existing (Hexo, Hugo) FrontMatter Variable Specs, they are a bit cumbersome, e.g. `camelCase`.

FFF makes naming as concise and meaningful as possible, and proposes customizable arrays like `flags`.

## Naming Rules

Use `snake_case` because it is JSON friendly and not as prone to wrong input as `camelCase`, the specific naming is chosen between common static blog generators, [Microformats](https://microformats.org/wiki/microformats2), and [JSON Feed](https://www.jsonfeed.org/version/1.1/).