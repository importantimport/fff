import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/** @alpha */
// eslint-disable-next-line unicorn/prevent-abbreviations
export type HugoThemePaperMod = {
  /** To show multiple Authors */
  author?: string | string[]
  /** To set site description */
  description?: string
  /** Link or path of image for opengraph, twitter-cards */
  images?: string
}

/**
 * Hugo Theme PaperMod - FFF Transform Preset
 * @alpha
 * @see {@link https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-variables/}
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export const hugoThemePaperMod: FFFTransformPreset<FFFFlavoredFrontmatter & HugoThemePaperMod> = {
  authors: ({ author }) => Array.isArray(author) ? author.map(name => ({ name })) : [{ name: author }],
  image: 'images',
  summary: 'description',
}

/**
 * Hugo Theme PaperMod - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://adityatelange.github.io/hugo-PaperMod/posts/papermod/papermod-variables/}
 */
// eslint-disable-next-line unicorn/prevent-abbreviations
export const hugoThemePaperModReverse: FFFTransformPreset<FFFFlavoredFrontmatter & HugoThemePaperMod> = {
  author: ({ authors }) => authors?.map(({ name }) => name),
  description: 'summary',
  images: 'image',
}
