import type { MarkdownItFFFPreset } from './index'

/** Remark FFF Presets */
export * from '../../remark-fff/src/presets'

/**
 * @alpha
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
export const vue: MarkdownItFFFPreset = {
  summary: 'excerpt',
}
