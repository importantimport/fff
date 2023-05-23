import type {
  FFFFlavoredFrontmatter,
  FFFTransformPreset,
  FFFTransformPresetReverse,
  StrictPresetOptions,
} from 'fff-flavored-frontmatter'

export type {
  FFFTransformPreset,
  FFFTransformPresetValue,
} from 'fff-flavored-frontmatter'

export type RemarkFFFOptions = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  target: 'mdsvex' | 'astro' | 'nuxt' | (string & {})
  presets: (string | FFFTransformPreset | FFFTransformPresetReverse)[]
  autofill?: {
    provider: 'fs' | 'git'
    path?: string | ((path: string) => string)
  }
  strict?: StrictPresetOptions
}

export type Post =
  | /** MDsveX */ {
      filename: string
      path: never
      data: {
        fm: FFFFlavoredFrontmatter & { [key: string]: unknown}
        astro: never
      }
    }
  | /** Astro */ {
      filename: never
      path: string
      data: {
        fm: never
        astro: {
          frontmatter: FFFFlavoredFrontmatter & { [key: string]: unknown}
        }
      }
    }
