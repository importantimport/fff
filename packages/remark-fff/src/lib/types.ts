import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'

export type Frontmatter = FFFFlavoredFrontmatter & {
  [key: string]: unknown
}

export type FFFPresetValue = string | ((fm: Frontmatter) => unknown)

export type FFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFPresetValue
}

export type RemarkFFFOptions = {
  target: 'mdsvex' | 'astro'
  presets: (string | FFFPreset)[]
  autofill?: {
    provider: 'fs' | 'git'
    path?: string | ((path: string) => string)
  }
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

export type Post =
  | /** MDsveX */ {
      filename: string
      path: never
      data: {
        fm: Frontmatter
        astro: never
      }
    }
  | /** Astro */ {
      filename: never
      path: string
      data: {
        fm: never
        astro: {
          frontmatter: Frontmatter
        }
      }
    }