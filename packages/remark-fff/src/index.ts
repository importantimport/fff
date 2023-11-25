import type { Transformer } from 'unified'

import { strict, transform } from 'fff-flavored-frontmatter'

import type { _Post, RemarkFFFOptions } from './lib/types'

import * as autofill from './autofill'

/**
 * Remark plugin for auto-conversion other frontmatter variable formats to {@link https://fff.js.org | FFF Flavored Frontmatter}.
 * @param options - Target, FFF Flavor Transform Presets, Autofill and Strict Options
 * @returns FFF Flavored Frontmatter
 * @public
 */
export const remarkFFF
  = (
    // eslint-disable-next-line unicorn/no-object-as-default-parameter
    options: RemarkFFFOptions = {
      presets: [],
      target: 'mdsvex',
    },
  ): Transformer =>
    (_tree, file) => {
    // make TS happy
      const post: _Post = file as unknown as _Post
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const path = post.filename ?? post.path
      const fm = transform(
        {
          /* eslint-disable unicorn/no-nested-ternary */
          ...(options.target === 'mdsvex'
            ? post.data.fm
            : (options.target === 'astro'
                ? post.data.astro.frontmatter
                : (options.target === 'nuxt'
                    ? post.data
                    : post.data))),
          /* eslint-enable unicorn/no-nested-ternary */
        },
        [
          ...options.presets,
          ...(options.autofill?.provider
            ? [
                autofill[options.autofill.provider](
                  options.autofill.path
                    ? (typeof options.autofill.path === 'function'
                        ? options.autofill.path(path)
                        : autofill.path[options.autofill.path](path))
                    : post.filename,
                ),
              ]
            : []),
          ...(options.strict ? [strict(options.strict)] : []),
        ],
      )
      switch (options.target) {
        case 'mdsvex': {
          file.data.fm = fm
          break
        }
        case 'astro': {
          file.data.astro = {
            ...file.data.astro as object,
            frontmatter: fm,
          }
          break
        }
        case 'nuxt': {
          file.data = fm
          break
        }
        default: { file.data = fm }
      }
    }

export * from './autofill'
export * from './lib/types'
export default remarkFFF
