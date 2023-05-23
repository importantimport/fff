/* eslint-disable unicorn/prevent-abbreviations */
import { strict, transform } from 'fff-flavored-frontmatter'
import type MarkdownIt from 'markdown-it'

import type { FFFPluginOptions, MarkdownItEnv } from './lib/types'

/**
 * markdown-it plugin for auto-conversion other frontmatter variable formats to {@link https://fff.js.org | FFF Flavored Frontmatter}.
 * @param md - MarkdownIt
 * @param options - FFF Flavor Transform Presets & Strict Options
 * @public
 */
export const fffPlugin: MarkdownIt.PluginWithOptions<FFFPluginOptions> = (
  md,
  // eslint-disable-next-line unicorn/no-object-as-default-parameter
  options = { presets: [] },
) => {
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (t, o, env: MarkdownItEnv) => {
    env.frontmatter = transform(
      {
        ...env.frontmatter,
        excerpt: env.frontmatter?.excerpt ?? env.excerpt,
        title: env.frontmatter?.title ?? env.title,
      },
      [
        ...options.presets,
        ...(options.strict ? [strict(options.strict)] : []),
      ],
    )
    return render(t, o, env)
  }
}

export type { FFFPluginOptions } from './lib/types'
export default fffPlugin
/* eslint-enable unicorn/prevent-abbreviations */
