import { strict, transform } from 'fff-flavored-frontmatter'
import type { Transformer } from 'unified'

import * as autofill from './autofill'
import type { Post, RemarkFFFOptions } from './lib/types'
import * as presets from './presets'

export const remarkFFF
  = (
    // eslint-disable-next-line unicorn/no-object-as-default-parameter
    options: RemarkFFFOptions = {
      presets: ['hugo', 'legacy'],
      target: 'mdsvex',
    },
  ): Transformer =>
    (_tree, file) => {
    // make TS happy
      const post: Post = file as unknown as Post
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
          ...options.presets.map(preset =>
            typeof preset === 'object' ? preset : presets[preset],
          ),
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
export * from './presets'
export { strict, transform as transformFm } from 'fff-flavored-frontmatter'
export default remarkFFF
