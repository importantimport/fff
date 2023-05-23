import type { FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * Jekyll - FFF Transform Preset
 * @beta
 * @see {@link https://jekyllrb.com/docs/front-matter/}
 */
export const jekyll: FFFTransformPreset = {
  categories: ({
    category,
    categories,
  }: {
    category?: string
    categories?: string | string[]
  }) =>
    [...new Set([
      category,
      ...(categories
        ? (typeof categories === 'string'
          ? categories.split(' ')
          : categories)
        : [])])]
      .filter(tag => tag !== undefined),
  created: 'date',
  tags: ({ tags }: {
    tags?: string | string[]
  }) => typeof tags === 'string'
    ? tags.split(' ')
    : tags,
}

/**
 * Jekyll - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://jekyllrb.com/docs/front-matter/}
 */
export const jekyllReverse: FFFTransformPresetReverse = {
  date: 'created',
}
