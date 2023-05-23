import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/**
 * Jekyll - FFF Transform Preset
 * @beta
 * @see {@link https://jekyllrb.com/docs/front-matter/}
 * @see {@link https://github.com/getindiekit/indiekit/blob/main/packages/preset-jekyll/index.js}
 */
export const jekyll: FFFTransformPreset = {
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
