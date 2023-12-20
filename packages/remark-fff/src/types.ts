import type {
  FFFFlavoredFrontmatter,
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
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: 'astro' | 'mdsvex' | 'nuxt' | (string & {})
}

/**
 * Internal Post Data Type.
 * @internal
 */
export type _Post =
  | /** MDsveX */ {
      data: {
        astro: {
          frontmatter: FFFFlavoredFrontmatter & Record<string, unknown>
        }
        fm: never
      }
      filename: never
      path: string
    }
  | /** Astro */ {
      data: {
        astro: never
        fm: FFFFlavoredFrontmatter & Record<string, unknown>
      }
      filename: string
      path: never
    }
