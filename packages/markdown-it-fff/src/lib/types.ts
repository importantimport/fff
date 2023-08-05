import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

// eslint-disable-next-line unicorn/prevent-abbreviations
export interface MarkdownItEnv {
  /** {@link https://lume.land | Lume} frontmatter & data */
  data?: FFFFlavoredFrontmatter & Record<string, unknown>
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
  /** @defaultValue `mdit-vue` */
  target: 'lume' | 'mdit-vue'
}

export { type FFFTransformPreset } from 'fff-flavored-frontmatter'
