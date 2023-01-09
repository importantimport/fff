import type { FFFFlavoredFrontmatter, FFFImage } from 'fff-flavored-frontmatter'
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

describe('remark-fff strict mode', () => {
  it('object => string, no-array', () => {
    const { processSync } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        target: 'mdsvex',
        presets: [],
        strict: {
          media: {
            type: 'string',
            array: false,
          },
        },
      })
    const file = new VFile({
      data: {
        fm: {
          images: [
            {
              src: 'https://fff.js.org/glowing_star.svg',
              alt: 'Glowing Star',
            },
          ],
        },
      },
    })
    const { fm } = processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
  })
  it('string => object, array', () => {
    const { processSync } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        target: 'mdsvex',
        presets: [],
        strict: {
          media: {
            type: 'object',
            array: true,
          },
        },
      })
    const file = new VFile({
      data: {
        fm: {
          image: 'https://fff.js.org/glowing_star.svg',
        },
      },
    })
    const { fm } = processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect((fm.images[0] as FFFImage).src).toEqual(
      'https://fff.js.org/glowing_star.svg'
    )
  })
  it('string => string, no-array', () => {
    const { processSync } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        target: 'mdsvex',
        presets: [],
        strict: {
          media: {
            type: 'string',
            array: false,
          },
        },
      })
    const file = new VFile({
      data: {
        fm: {
          images: ['https://fff.js.org/glowing_star.svg'],
        },
      },
    })
    const { fm } = processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
  })
})
