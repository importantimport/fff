import type { FFFPluginOptions, MarkdownItEnv } from './lib/types'
import type MarkdownIt from 'markdown-it'
import * as presets from './presets'
import { transform } from '../../remark-fff/src/lib/transform'

export const fffPlugin: MarkdownIt.PluginWithOptions<FFFPluginOptions> = (
  md,
  options = { presets: ['hugo', 'vue'] }
) => {
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (t, o, env: MarkdownItEnv) => {
    env.frontmatter = transform(
      {
        ...env.frontmatter,
        title: env.frontmatter.title ?? env.title,
        excerpt: env.frontmatter.excerpt ?? env.excerpt,
      },
      [
        ...options.presets.map((preset) =>
          preset instanceof Object ? preset : presets[preset]
        ),
        ...(options.strict ? [presets['strict'](options.strict)] : []),
      ]
    )
    return render(t, o, env)
  }
}

export default fffPlugin
