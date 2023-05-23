import type { FFFFlavoredFrontmatter, FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * Nuxt Content - FFF Transform Preset
 * @beta
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 */
export const nuxt: FFFTransformPreset = {
  flags: ({
    flags,
    draft,
  }: {
    flags?: FFFFlavoredFrontmatter['flags']
    draft?: boolean
  }) => [...new Set([...(flags ?? []), ...(draft ? ['draft'] : [])])],
  summary: 'description',
}

/**
 * Nuxt Content - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 */
export const nuxtReverse: FFFTransformPresetReverse = {
  description: 'summary',
  draft: ({ flags }) => flags?.includes('draft'),
}
