import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

export interface MarkdownItEnv {
  /** `@mdit-vue/plugin-frontmatter` renderExcerpt */
  excerpt?: string
  /** `@mdit-vue/plugin-frontmatter` frontmatter */
  frontmatter?: FFFFlavoredFrontmatter & Record<string, unknown>
  /** `@mdit-vue/plugin-title` */
  title?: string
}

/**
 * Markdown It FFF Plugin Options.
 * @public
 */
export interface FFFPluginOptions {
  presets: FFFTransformPreset[]
  strict?: StrictPresetOptions
}

export type { FFFTransformPreset } from 'fff-flavored-frontmatter'
