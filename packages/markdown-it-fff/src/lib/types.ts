import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  FFFTransformPresetReverse,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

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
  presets: (string | FFFTransformPreset | FFFTransformPresetReverse)[]
  strict?: StrictPresetOptions
}

export { type FFFTransformPreset } from 'fff-flavored-frontmatter'
