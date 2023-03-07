import type { Frontmatter, FFFPreset } from '../../../remark-fff/src/lib/types'

export type MarkdownItEnv = {
  /** `@mdit-vue/plugin-title` */
  title?: string
  /** `@mdit-vue/plugin-frontmatter` renderExcerpt */
  excerpt?: string
  /** `@mdit-vue/plugin-frontmatter` frontmatter */
  frontmatter?: Frontmatter
}

export type FFFPluginOptions = {
  presets: (string | FFFPreset)[]
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

export { FFFPreset }
