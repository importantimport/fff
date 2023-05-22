import { strict, transform } from 'fff-flavored-frontmatter'
import type MarkdownIt from 'markdown-it'

// eslint-disable-next-line unicorn/prevent-abbreviations
import type { FFFPluginOptions, MarkdownItEnv } from './lib/types'
import * as presets from './presets'

export const fffPlugin: MarkdownIt.PluginWithOptions<FFFPluginOptions> = (
  md,
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  options = { presets: ['hugo', 'vue'] },
) => {
  const render = md.renderer.render.bind(md.renderer)
  // eslint-disable-next-line unicorn/prevent-abbreviations
  md.renderer.render = (t, o, env: MarkdownItEnv) => {
    env.frontmatter = transform(
      {
        ...env.frontmatter,
        excerpt: env.frontmatter.excerpt ?? env.excerpt,
        title: env.frontmatter.title ?? env.title,
      },
      [
        ...options.presets.map(preset =>
          typeof preset === 'object' ? preset : presets[preset],
        ),
        ...(options.strict ? [strict(options.strict)] : []),
      ],
    )
    return render(t, o, env)
  }
}

export default fffPlugin
