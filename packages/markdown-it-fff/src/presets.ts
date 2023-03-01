import type { FFFPreset } from './index'

/** Remark FFF Presets */
export * from '../../remark-fff/src/presets'

/**
 * @alpha
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
export const vue: FFFPreset = {
  summary: 'excerpt',
}
