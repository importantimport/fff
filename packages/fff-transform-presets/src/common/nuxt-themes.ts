import type { FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

type AlpineAuthor = {
  name?: string
  avatarUrl?: string
  link?: string
}

/**
 * Alpine - FFF Transform Preset
 * @beta
 * @see {@link https://github.com/nuxt-themes/alpine/blob/main/.starters/default/content/articles/1.get-started.md?plain=1}
 */
export const nuxtThemeAlpine: FFFTransformPreset<{ author?: AlpineAuthor }> = {
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
export const nuxtThemeAlpineReverse: FFFTransformPresetReverse = {
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
