import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { FFFPreset } from './lib/types'

/**
 * @alpha
 */
export const legacy: FFFPreset = {
  images: ({ image }) => image && (Array.isArray(image) ? image : [image]),
  in_reply_to: ({ in_reply_to }) =>
    in_reply_to && Array.isArray(in_reply_to) ? in_reply_to[0] : in_reply_to,
}

/**
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-hugo/index.js}
 */
export const hugo: FFFPreset = {
  image: ({ image, images }) =>
    image
      ? image
      : images && (!Array.isArray(images) || images.length === 1)
      ? images
      : undefined,
  images: ({ images }) => (Array.isArray(images) ? images : undefined),
  tags: 'category',
  bookmark_of: 'bookmarkOf',
  like_of: 'likeOf',
  repost_of: 'repostOf',
  in_reply_to: 'inReplyTo',
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    Array.from(
      new Set([
        ...(flags ?? []),
        ...(draft ? ['draft'] : []),
        ...(visibility ? [visibility] : []),
      ])
    ),
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
  }) => [...(tags ?? []), ...Array.from(new Set((categories ?? []).flat()))],
}

/**
 * @alpha
 * @see {@link https://jekyllrb.com/docs/front-matter/}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-jekyll/index.js}
 */
export const jekyll: FFFPreset = {
  summary: 'excerpt',
  created: 'date',
  image: ({ photo }) => (Array.isArray(photo) ? undefined : photo),
  images: ({ photo }) => (Array.isArray(photo) ? photo : undefined),
  bookmark_of: 'bookmark-of',
  like_of: 'like-of',
  repost_of: 'repost-of',
  in_reply_to: 'in-reply-to',
  tags: ({
    tags,
    category,
    categories,
  }: {
    tags?: FFFFlavoredFrontmatter['tags']
    category?: string[]
    categories?: string[]
  }) =>
    Array.from(
      new Set([...(tags ?? []), ...(category ?? []), ...(categories ?? [])])
    ),
  flags: ({
    flags,
    draft,
    visibility,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
    visibility?: 'public' | 'unlisted' | 'private'
  }) =>
    Array.from(
      new Set([
        ...(flags ?? []),
        ...(draft ? ['draft'] : []),
        ...(visibility ? [visibility] : []),
      ])
    ),
}

/** @see {@link https://www.getzola.org/documentation/content/page/#front-matter} */
export const zola: FFFPreset = {
  summary: 'description',
  created: 'date',
  flags: ({
    flags,
    draft,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
  }) => Array.from(new Set([...flags, ...(draft ? ['draft'] : [])])),
}

/**
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 * since nuxt content is similar to zola, it is straightforward to use
 */
export const nuxt: FFFPreset = zola
