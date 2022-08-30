import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { Plugin, Transformer } from 'unified'
import * as presets from './presets'

export type RemarkFFFOptions = {
  target: 'mdsvex' | 'astro'
  presets: (string | RemarkFFFPreset)[]
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

export type RemarkFFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: string | ((fm: Frontmatter) => unknown)
}

type Frontmatter = FFFFlavoredFrontmatter & {
  [key: string]: unknown
}

type File = {
  data: {
    fm?: Frontmatter
    astro?: {
      frontmatter?: Frontmatter
    }
  }
}

const remarkFFF: Plugin =
  (
    options: RemarkFFFOptions = { presets: ['hugo'], target: 'mdsvex' }
  ): Transformer =>
  (_tree, file: File) => {
    let fm = {
      ...(options.target === 'mdsvex'
        ? file.data.fm
        : file.data.astro!.frontmatter),
    }
    ;[
      ...options.presets,
      ...(options.strict ? [presets['strict'](options.strict)] : []),
    ].forEach((preset) =>
      Object.entries(
        preset instanceof Object ? preset : (presets[preset] as RemarkFFFPreset)
      ).forEach(
        ([output, input]) =>
          (fm = {
            ...fm,
            [output]:
              input instanceof Function ? input(fm) : fm[input] ?? fm[output],
          })
      )
    )
    if (options.target === 'mdsvex') file.data.fm = fm
    else if (options.target === 'astro') file.data.astro!.frontmatter = fm
  }

export default remarkFFF
