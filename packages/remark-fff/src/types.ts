import type {
  FFFTransformPreset,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

/**
 * Remark FFF Plugin Options.
 * @public
 */
export interface RemarkFFFOptions {
  presets: FFFTransformPreset[]
  strict?: StrictPresetOptions
  /**
   * Replacement target for Remark FFF.
   * @example
   * ```ts
   * // astro: file.data.astro.frontmatter
   * const target = ['astro', 'frontmatter'] // file.data['astro']['frontmatter']
   * // mdsvex: file.data.fm
   * const target = ['fm'] // file.data['fm']
   * // nuxt: file.data
   * const target = undefined // file.data
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  target?: 'astro' | 'mdsvex' | 'nuxt' | string[]
}
