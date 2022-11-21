import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type MarkdownIt from 'markdown-it'
import * as presets from './presets'

type Frontmatter = FFFFlavoredFrontmatter & {
  [key: string]: unknown
}

type MarkdownItEnv = {
  /** `@mdit-vue/plugin-title` */
  title?: string
  /** `@mdit-vue/plugin-frontmatter` renderExcerpt */
  excerpt?: string
  /** `@mdit-vue/plugin-frontmatter` frontmatter */
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
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (t, o, env: MarkdownItEnv) => {
    let fm = {
      ...env.frontmatter,
      title: env.frontmatter.title ?? env.title,
      excerpt: env.frontmatter.excerpt ?? env.excerpt,
    }

    ;[
      ...options.presets,
      ...(options.strict ? [presets['strict'](options.strict)] : []),
    ].forEach((preset: string | MarkdownItFFFPreset) =>
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

    env.frontmatter = fm

    return render(t, o, env)
  }
}
