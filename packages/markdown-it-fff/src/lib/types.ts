import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  FFFTransformPresetReverse,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

import * as presets from '../presets'

// eslint-disable-next-line unicorn/prevent-abbreviations
export type MarkdownItEnv = {
  /** `@mdit-vue/plugin-title` */
  title?: string
  /** `@mdit-vue/plugin-frontmatter` renderExcerpt */
  excerpt?: string
  /** `@mdit-vue/plugin-frontmatter` frontmatter */
  frontmatter?: FFFFlavoredFrontmatter & { [key: string]: unknown }
}

/**
 * Markdown It FFF Plugin Options.
 * @public
 */
export type FFFPluginOptions = {
  presets: (keyof typeof presets | FFFTransformPreset | FFFTransformPresetReverse)[]
  strict?: StrictPresetOptions
}

export { type FFFTransformPreset } from 'fff-flavored-frontmatter'
