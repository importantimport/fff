import * as presets from '../../remark-fff/src/presets'
import type { MarkdownItFFFPreset } from './index'

const vue: MarkdownItFFFPreset = {
  summary: 'excerpt',
}

export default {
  ...presets,
  vue,
}
