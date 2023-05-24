import type { FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * Hexo - FFF Transform Preset
 * @beta
 * @see {@link https://hexo.io/docs/front-matter.html}
 */
export const hexo: FFFTransformPreset = {
  created: 'date',
  flags: ({ flags, comments }) => [
    ...(flags ?? []),
    ...(comments === undefined ? [] : (comments ? ['enable-comments'] : ['disable-comments'])),
  ],
  images: 'photos',
  summary: 'excerpt',
}

/**
 * Hexo - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://hexo.io/docs/front-matter.html}
 */
export const hexoReverse: FFFTransformPresetReverse = {
  comments: ({ flags }) => flags?.some(flag => flag.endsWith('comments'))
    ? flags.includes('enable-comments')
    : undefined,
  date: 'created',
  excerpt: 'summary',
  photos: ({ images }) => images?.map(image => typeof image === 'string' ? image : image.src),
}
