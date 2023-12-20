import type { Plugin, Transformer } from 'unified'

import { strict, transform } from 'fff-flavored-frontmatter'

import type { _Post, RemarkFFFOptions } from './types'

/**
 * Remark plugin for auto-conversion other frontmatter variable formats to {@link https://fff.js.org | FFF Flavored Frontmatter}.
 * @param options - Target, FFF Flavor Transform Presets, Autofill and Strict Options
 * @returns FFF Flavored Frontmatter
 * @public
 */
export const remarkFFF: Plugin<[RemarkFFFOptions]>
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
      const fm = transform(
        {
          ...(options.target === 'mdsvex'
            ? post.data.fm
            : (options.target === 'astro'
                ? post.data.astro.frontmatter
                // eslint-disable-next-line unicorn/no-nested-ternary
                : (options.target === 'nuxt'
                    ? post.data
                    : post.data))),
        },
        [
          ...options.presets,
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
