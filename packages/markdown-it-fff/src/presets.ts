import type { FFFTransformPreset } from './lib/types'

/** Remark FFF Presets */
export * from '../../remark-fff/src/presets'

/**
 * @alpha
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
export const vue: FFFTransformPreset = {
  summary: 'excerpt',
}
