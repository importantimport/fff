import type { FFFFlavoredFrontmatter, FFFTransformPreset } from 'fff-flavored-frontmatter'

/**
 * Nuxt Content - FFF Transform Preset
 * @beta
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 */
export const nuxt: FFFTransformPreset = {
  flags: ({
    draft,
    flags,
  }: {
    draft?: boolean
    flags?: FFFFlavoredFrontmatter['flags']
  }) => [...new Set([...(flags ?? []), ...(draft ? ['draft'] : [])])],
  summary: 'description',
}

/**
 * Nuxt Content - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://content.nuxtjs.org/guide/writing/markdown/#front-matter}
 */
export const nuxtReverse: FFFTransformPreset = {
  description: 'summary',
  draft: ({ flags }) => flags?.includes('draft'),
}
