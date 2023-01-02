import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import { describe, expect, it } from 'vitest'
import { VFile } from 'vfile'
import { remark } from 'remark'
import remarkFrontmatter from 'remark-frontmatter'
import remarkFFF from '../src'

describe('remark-fff', () => {
  it('mdsvex-hugo', () => {
    const { processSync } = remark().use(remarkFrontmatter).use(remarkFFF)
    const file = new VFile({
      data: {
        fm: {
          images: 'https://fff.js.org/glowing_star.svg',
          draft: true,
          visibility: 'unlisted',
        },
      },
    })
    const { fm } = processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
    expect(fm.flags).toEqual(['draft', 'unlisted'])
  })
  it('astro-hexo', () => {
    const { processSync } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        target: 'astro',
        presets: ['hexo'],
      })
    const file = new VFile({
      data: {
        astro: {
          frontmatter: {
            date: '2023-01-01',
            excerpt: 'lorem ipsum',
            categories: ['foo', 'bar', 'baz'],
            tags: ['fooo', 'baar', 'baaz'],
          },
        },
      },
    })
    const { frontmatter: fm } = processSync(file).data.astro as {
      frontmatter: FFFFlavoredFrontmatter
    }
    expect(fm.created).toEqual('2023-01-01')
    expect(fm.summary).toEqual('lorem ipsum')
    expect(fm.tags).toEqual(['fooo', 'baar', 'baaz', 'foo', 'bar', 'baz'])
  })
})
