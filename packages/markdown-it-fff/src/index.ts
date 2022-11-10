import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type MarkdownIt from 'markdown-it'
import * as presets from './presets'

type Frontmatter = FFFFlavoredFrontmatter & {
  [key: string]: unknown
}

type MarkdownItEnv = {
  excerpt?: string
  frontmatter: Frontmatter
}

export type MarkdownItFFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: string | ((fm: Frontmatter) => unknown)
}

export type FFFPluginOptions = {
  presets: (string | MarkdownItFFFPreset)[]
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

export const fffPlugin: MarkdownIt.PluginWithOptions<FFFPluginOptions> = (
  md,
  options = { presets: ['hugo', 'vue'] }
) => {
  const render = md.render.bind(md)
  md.render = (src, env: MarkdownItEnv) => {
    let fm = {
      ...env.frontmatter,
      excerpt: env.excerpt,
    }

    ;[
      ...options.presets,
      ...(options.strict ? [presets['strict'](options.strict)] : []),
    ].forEach((preset: MarkdownItFFFPreset) =>
      Object.entries(
        preset instanceof Object ? preset : presets[preset]
      ).forEach(
        ([output, input]) =>
          (fm = {
            ...fm,
            [output]:
              input instanceof Function ? input(fm) : fm[input] ?? fm[output],
          })
      )
    )

    return render(src, {
      ...env,
      frontmatter: fm,
    })
  }
}
