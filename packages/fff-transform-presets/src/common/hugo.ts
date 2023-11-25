import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/**
 * Hugo - FFF Transform Preset
 * @beta
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 */
export const hugo: FFFTransformPreset = {
  // TODO: images, videos
  flags: ({
    draft,
    flags,
  }: {
    draft?: boolean
    flags?: FFFFlavoredFrontmatter['flags']
  }) =>
    [...new Set([
      ...(flags ?? []),
      ...(draft ? ['draft'] : []),
    ])],
  published: 'publishDate',
  tags: ({ keywords, tags }: {
    keywords?: string[]
    tags?: FFFFlavoredFrontmatter['tags'],
  }) =>
    [...new Set([
      ...(tags ?? []),
      ...(keywords ?? []),
    ])],
  updated: 'lastmod',
}

/**
 * Hugo - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 */
export const hugoReverse: FFFTransformPreset = {
  // TODO: images, videos
  draft: ({ flags }) => flags?.includes('draft'),
  keywords: 'tags',
  lastmod: 'updated',
  publishDate: 'published',
}
