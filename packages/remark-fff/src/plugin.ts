import type { Plugin, Transformer } from 'unified'

import { strict, transform } from 'fff-flavored-frontmatter'

import type { RemarkFFFOptions } from './types'

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
      let targets: string[] | undefined

      // Compatible with old target parameters before 1.2.
      // TODO: remove in 1.3
      switch (options.target) {
        case 'mdsvex': {
          targets = ['fm']
          break
        }
        case 'astro': {
          targets = ['astro', 'frontmatter']
          break
        }
        case 'nuxt': {
          targets = undefined
          break
        }
        default: {
          targets = options.target
        }
      }

      let input = file.data as Record<string, unknown>
      if (targets) {
        for (const target of targets) {
          try {
            input = input[target] as Record<string, unknown>
          }
          catch {
            input = {}
          }
        }
      }

      const output = transform(
        input,
        [
          ...options.presets,
          ...(options.strict ? [strict(options.strict)] : []),
        ],
      )

      file.data = targets
        ? {
            ...file.data,
            ...targets.reduceRight((output, key) => ({ [key]: output }), output),
          }
        : output
    }
