import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/**
 * Hugo - FFF Transform Preset
 * @beta
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-hugo/index.js}
 */
export const hugo: FFFTransformPreset = {
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
