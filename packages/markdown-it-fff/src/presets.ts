import * as presets from '../../remark-fff/src/presets'
import type { MarkdownItFFFPreset } from './index'

/**
 * @alpha
 * @see {@link https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-frontmatter}
 */
const vue: MarkdownItFFFPreset = {
  summary: 'excerpt',
}

export default {
  ...presets,
  vue,
}
