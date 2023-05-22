import type {
  FFFFlavoredFrontmatter,
  FFFPreset,
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

export type FFFPluginOptions = {
  presets: (string | FFFPreset)[]
  strict?: StrictPresetOptions
}

export { type FFFPreset } from 'fff-flavored-frontmatter'
