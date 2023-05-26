import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

import { path } from '../autofill'

/**
 * Remark FFF Plugin Options.
 * @public
 */
export type RemarkFFFOptions = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: 'mdsvex' | 'astro' | 'nuxt' | (string & {})
  presets: FFFTransformPreset[]
  autofill?: {
    provider: 'fs' | 'git'
    path?: keyof typeof path | ((path: string) => string)
  }
  strict?: StrictPresetOptions
}

/**
 * Internal Post Data Type.
 * @internal
 */
export type _Post =
  | /** MDsveX */ {
      filename: string
      path: never
      data: {
        fm: FFFFlavoredFrontmatter & Record<string, unknown>
        astro: never
      }
    }
  | /** Astro */ {
      filename: never
      path: string
      data: {
        fm: never
        astro: {
          frontmatter: FFFFlavoredFrontmatter & Record<string, unknown>
        }
      }
    }
