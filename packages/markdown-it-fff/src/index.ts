/* eslint-disable unicorn/prevent-abbreviations */
import type MarkdownIt from 'markdown-it'

import { strict, transform } from 'fff-flavored-frontmatter'

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
  options = { presets: [], target: 'mdit-vue' },
) => {
  const render = md.renderer.render.bind(md.renderer)
  md.renderer.render = (t, o, env: MarkdownItEnv) => {
    const fm = transform(
      options.target === 'lume'
        // Lume
        ? env.data as Record<string, unknown>
        // `@mdit-vue/plugin-frontmatter`
        : {
          ...env.frontmatter,
          excerpt: env.frontmatter?.excerpt ?? env.excerpt,
          title: env.frontmatter?.title ?? env.title,
        },
      [
        ...options.presets,
        ...(options.strict ? [strict(options.strict)] : []),
      ],
    )

    switch (options.target) {
      case 'mdit-vue': {
        env.frontmatter = fm
        break
      }
      case 'lume': {
        env.data = fm
        break
      }
      default: {
        env.frontmatter = fm
      }
    }

    return render(t, o, env)
  }
}

export type { FFFPluginOptions } from './lib/types'
export default fffPlugin
/* eslint-enable unicorn/prevent-abbreviations */
