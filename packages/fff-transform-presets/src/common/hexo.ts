import type { FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * Hexo - FFF Transform Preset
 * @beta
 * @see {@link https://hexo.io/docs/front-matter.html}
 */
export const hexo: FFFTransformPreset = {
  /** @see {@link https://hexo.io/docs/front-matter.html#Categories-amp-Tags} */
  categories: ({ categories }) => [...new Set(categories?.flat())],
  created: 'date',
  flags: ({ comments, disableNunjucks, flags }) => [
    ...(flags ?? []),
    ...(comments === false ? ['disable-comments'] : []),
    ...(disableNunjucks === true ? ['disable-nunjunks'] : []),
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
