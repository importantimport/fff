import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'

import type { FFFPreset } from './lib/types'

/**
 * @alpha
 */
export const legacy: FFFPreset = {
  images: ({ image }) => image && (Array.isArray(image) ? image : [image]),
  in_reply_to: ({ in_reply_to }) =>
    (in_reply_to && Array.isArray(in_reply_to)) ? in_reply_to[0] : in_reply_to,
}

/**
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-hugo/index.js}
 */
export const hugo: FFFPreset = {
  bookmark_of: 'bookmarkOf',
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    [...new Set([
      ...(flags ?? []),
      ...(draft ? ['draft'] : []),
      ...(visibility ? [visibility] : []),
    ])],
  image: ({ image, images }) =>
    image || ((images && (!Array.isArray(images) || images.length === 1))
      ? images
      : undefined),
  images: ({ images }) => (Array.isArray(images) ? images : undefined),
  in_reply_to: 'inReplyTo',
  like_of: 'likeOf',
  repost_of: 'repostOf',
  tags: 'category',
}

/** @see {@link https://hexo.io/docs/front-matter.html} */
export const hexo: FFFPreset = {
  created: 'date',
  summary: 'excerpt',
  tags: ({
    tags,
    categories,
  }: {
    tags?: FFFFlavoredFrontmatter['tags']
    categories?: (string | string[])[]
  }) => [...(tags ?? []), ...new Set((categories ?? []).flat())],
}

/**
 * @alpha
 * @see {@link https://jekyllrb.com/docs/front-matter/}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-jekyll/index.js}
 */
export const jekyll: FFFPreset = {
  bookmark_of: 'bookmark-of',
  created: 'date',
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    [...new Set([
      ...(flags ?? []),
      ...(draft ? ['draft'] : []),
      ...(visibility ? [visibility] : []),
    ])],
  image: ({ photo }) => (Array.isArray(photo) ? undefined : photo),
  images: ({ photo }) => (Array.isArray(photo) ? photo : undefined),
  in_reply_to: 'in-reply-to',
  like_of: 'like-of',
  repost_of: 'repost-of',
  summary: 'excerpt',
  tags: ({
    tags,
    category,
    categories,
  }: {
    tags?: FFFFlavoredFrontmatter['tags']
    category?: string[]
    categories?: string[]
  }) =>
    [...new Set([...(tags ?? []), ...(category ?? []), ...(categories ?? [])])],
}

/** @see {@link https://www.getzola.org/documentation/content/page/#front-matter} */
export const zola: FFFPreset = {
  created: 'date',
  flags: ({
    flags,
    draft,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
  }) => [...new Set([...flags, ...(draft ? ['draft'] : [])])],
  summary: 'description',
}

/**
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 * since nuxt content is similar to zola, it is straightforward to use
 */
export const nuxt: FFFPreset = zola
