import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { Plugin, Transformer } from 'unified'
import * as presets from './presets'

export type RemarkFFFOptions = {
  presets: (string | RemarkFFFPreset)[]
  target: 'mdsvex' | 'astro'
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
    options.presets.forEach((preset) =>
      (preset instanceof Object ? preset : presets[preset]).forEach(
        ({ output, input }) =>
          input instanceof Object
            ? (fm = { ...fm, [output]: input(fm) })
            : (fm = { ...fm, [output]: fm[input] })
      )
    )
    switch (options.target) {
      case 'mdsvex':
        file.data.fm = fm
        break
      case 'astro':
        file.data.astro!.frontmatter = fm
        break
    }
  }

export default remarkFFF
