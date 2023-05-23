import type { FFFTransformPreset, FFFTransformPresetReverse } from 'fff-flavored-frontmatter'

/**
 * `@mdit-vue/plugin-frontmatter` - FFF Transform Preset
 * @beta
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
export const mditVue: FFFTransformPreset = {
  summary: 'excerpt',
}

/**
 * `@mdit-vue/plugin-frontmatter` - FFF Transform Preset (Reverse)
 * @alpha
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
export const mditVueReverse: FFFTransformPresetReverse = {
  excerpt: 'summary',
}
