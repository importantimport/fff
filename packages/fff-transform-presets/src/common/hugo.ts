import type { FFFFlavoredFrontmatter, FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * Hugo - FFF Transform Preset
 * @beta
 * @see {@link https://gohugo.io/content-management/front-matter/#predefined}
 */
export const hugo: FFFTransformPreset = {
  // TODO: images, videos
  flags: ({
    flags,
    draft,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
  }) =>
    [...new Set([
      ...(flags ?? []),
      ...(draft ? ['draft'] : []),
    ])],
  published: 'publishDate',
  tags: ({ tags, keywords }: {
    tags?: FFFFlavoredFrontmatter['tags'],
    keywords?: string[]
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
export const hugoReverse: FFFTransformPresetReverse = {
  // TODO: images, videos
  draft: ({ flags }) => flags?.includes('draft'),
  keywords: 'tags',
  lastmod: 'updated',
  publishDate: 'published',
}
