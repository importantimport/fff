import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/** @beta */
export type NuxtThemeAlpine = {
  author?: {
    avatarUrl?: string
    link?: string
    name?: string
  }
  cover?: string
  date?: string
}

/**
 * Alpine - FFF Transform Preset
 * @beta
 * @see {@link https://github.com/nuxt-themes/alpine/blob/main/.starters/default/content/articles/1.get-started.md?plain=1}
 */
export const nuxtThemeAlpine: FFFTransformPreset<FFFFlavoredFrontmatter & NuxtThemeAlpine> = {
  authors: ({ author }) => author
    ? [{
        avatar: author.avatarUrl,
        name: author.name,
        url: author.link,
      }]
    : undefined,
  created: 'date',
  image: 'cover',
}

/**
 * Alpine - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://github.com/nuxt-themes/alpine/blob/main/.starters/default/content/articles/1.get-started.md?plain=1}
 */
export const nuxtThemeAlpineReverse: FFFTransformPreset<FFFFlavoredFrontmatter & NuxtThemeAlpine> = {
  author: ({ authors }) => authors
    ? {
        avatarUrl: authors[0].avatar,
        link: authors[0].url,
        name: authors[0].name,
      }
    : undefined,
  cover: 'image',
  date: 'created',
}
