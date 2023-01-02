import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import { describe, expect, it } from 'vitest'
import { VFile } from 'vfile'
import { remark } from 'remark'
import remarkFrontmatter from 'remark-frontmatter'
import remarkFFF from '../src'

describe('markdown-it-fff', () => {
  it('mdsvex-hugo', () => {
    const { processSync } = remark().use(remarkFrontmatter).use(remarkFFF)
    const file = new VFile()
    file.data = {
      fm: {
        images: 'https://fff.js.org/glowing_star.svg',
        draft: true,
        visibility: 'unlisted',
      },
    }
    const {
      data: { fm },
    } = processSync(file)
    expect((fm as FFFFlavoredFrontmatter).image).toEqual(
      'https://fff.js.org/glowing_star.svg'
    )
    expect((fm as FFFFlavoredFrontmatter).flags).toEqual(['draft', 'unlisted'])
  })
  it('astro-hexo', () => {
    const { processSync } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        target: 'astro',
        presets: ['hexo'],
      })
    const file = new VFile()
    file.data = {
      astro: {
        frontmatter: {
          date: '2023-01-01',
          excerpt: 'lorem ipsum',
          categories: ['foo', 'bar', 'baz'],
          tags: ['fooo', 'baar', 'baaz'],
        },
      },
    }
    const {
      data: { astro },
    } = processSync(file)
    expect(
      (astro as { frontmatter: FFFFlavoredFrontmatter }).frontmatter.created
    ).toEqual('2023-01-01')
    expect(
      (astro as { frontmatter: FFFFlavoredFrontmatter }).frontmatter.summary
    ).toEqual('lorem ipsum')
    expect(
      (astro as { frontmatter: FFFFlavoredFrontmatter }).frontmatter.tags
    ).toEqual(['fooo', 'baar', 'baaz', 'foo', 'bar', 'baz'])
  })
})
