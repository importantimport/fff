import type { RemarkFFFOptions, Post } from './lib/types'
import type { Transformer } from 'unified'
import * as presets from './presets'
import * as autofill from './autofill'
import { strict } from './strict'
import { transform } from './lib/transform'

export const remarkFFF =
  (
    options: RemarkFFFOptions = {
      presets: ['hugo', 'legacy'],
      target: 'mdsvex',
    }
  ): Transformer =>
  (_tree, file) => {
    // make TS happy
    let post: Post = file as unknown as Post
    const path = post.filename ?? post.path
    const fm = transform(
      {
        ...(options.target === 'mdsvex'
          ? post.data.fm
          : post.data.astro.frontmatter),
      },
      [
        ...options.presets.map((preset) =>
          preset instanceof Object ? preset : presets[preset]
        ),
        ...(options.autofill?.provider
          ? [
              autofill[options.autofill.provider](
                options.autofill.path
                  ? options.autofill.path instanceof Function
                    ? options.autofill.path(path)
                    : autofill.path[options.autofill.path](path)
                  : post.filename
              ),
            ]
          : []),
        ...(options.strict ? [strict(options.strict)] : []),
      ]
    )
    if (options.target === 'mdsvex') file.data.fm = fm
    else if (options.target === 'astro')
      file.data.astro = {
        ...(file.data.astro as Object),
        frontmatter: fm,
      }
  }

export * from './autofill'
export * from './presets'
export * from './strict'
export { transform as transformFm }
export default remarkFFF
