---
title: 'Flags'
---

# Flags

flags is an array that allows you to add additional functionality without adding variable names.

```yaml
draft: true
visibility: 'unlisted'

# equal
flags:
  - draft
  - unlised
```

What content it supports is entirely up to the developer, but the following are some recommended:

## [Post Status](https://indieweb.org/Micropub-extensions#Post_Status)

Consistent with Micropub Extensions.

```yaml
flags:
  - published # The post is published, or when the published date is in the future.
  - draft # The post is a draft, and should not be shown in lists.
```

## [Visibility](https://indieweb.org/Micropub-extensions#Visibility)

Consistent with Micropub Extensions.

```yaml
flags:
  - public
  - unlisted
  - private
```