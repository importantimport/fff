import type { FFFFlavoredFrontmatter, FFFImage } from 'fff-flavored-frontmatter'

import { hexo, hugo } from 'fff-transform-presets'
import { remark } from 'remark'
// eslint-disable-next-line import/default
import remarkFrontmatter from 'remark-frontmatter'
import { VFile } from 'vfile'
import { describe, expect, it } from 'vitest'

import remarkFFF from '../src'

describe('remark-fff', () => {
  it('mdsvex-hugo', () => {
    const file = new VFile({
      data: {
        a: 'b',
        fm: {
          draft: true,
          images: 'https://fff.js.org/glowing_star.svg',
        },
      },
    })
    const { a, fm } = remark()
      .use(remarkFrontmatter).use(remarkFFF, {
        presets: [hugo],
        target: 'mdsvex',
      }).processSync(file).data as {
        a: string
        fm: FFFFlavoredFrontmatter
      }
    expect(a).toEqual('b')
    // expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
    expect(fm.flags).toEqual(['draft'])
  })
  it('astro-hexo', () => {
    const file = new VFile({
      data: {
        astro: {
          a: 'b',
          frontmatter: {
            categories: ['foo', 'bar', 'baz'],
            date: '2023-01-01',
            excerpt: 'lorem ipsum',
            tags: ['fooo', 'baar', 'baaz'],
          },
        },
      },
    })
    const { a, frontmatter: fm } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        presets: [hexo],
        target: 'astro',
      })
      .processSync(file).data.astro as {
        a: string
        frontmatter: FFFFlavoredFrontmatter
      }
    expect(a).toEqual('b')
    expect(fm.created).toEqual('2023-01-01')
    expect(fm.summary).toEqual('lorem ipsum')
    // expect(fm.tags).toEqual(['fooo', 'baar', 'baaz', 'foo', 'bar', 'baz'])
  })
})

describe('remark-fff strict mode', () => {
  it('object => string, no-array', () => {
    const file = new VFile({
      data: {
        fm: {
          images: [
            {
              alt: 'Glowing Star',
              src: 'https://fff.js.org/glowing_star.svg',
            },
          ],
        },
      },
    })
    const { fm } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        presets: [],
        strict: {
          media: {
            array: false,
            type: 'string',
          },
        },
        target: 'mdsvex',
      })
      .processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
  })
  it('string => object, array', () => {
    const file = new VFile({
      data: {
        fm: {
          image: 'https://fff.js.org/glowing_star.svg',
        },
      },
    })
    const { fm } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        presets: [],
        strict: {
          media: {
            array: true,
            type: 'object',
          },
        },
        target: 'mdsvex',
      })
      .processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect((fm.images?.[0] as FFFImage).src).toEqual(
      'https://fff.js.org/glowing_star.svg',
    )
  })
  it('string => string, no-array', () => {
    const file = new VFile({
      data: {
        fm: {
          images: ['https://fff.js.org/glowing_star.svg'],
        },
      },
    })
    const { fm } = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        presets: [],
        strict: {
          media: {
            array: false,
            type: 'string',
          },
        },
        target: 'mdsvex',
      })
      .processSync(file).data as { fm: FFFFlavoredFrontmatter }
    expect(fm.image).toEqual('https://fff.js.org/glowing_star.svg')
  })
  it('custom nested target', () => {
    const file = new VFile({
      data: {
        a: {
          b: {
            c: {
              d: {
                date: '2023-12-25',
              },
            },
          },
          e: {
            f: 'g',
          },
        },
      },
    })
    const data = remark()
      .use(remarkFrontmatter)
      .use(remarkFFF, {
        presets: [{ created: 'date' }],
        target: ['a', 'b', 'c', 'd'],
      })
      .processSync(file).data as {
        a: {
          b: { c: { d: FFFFlavoredFrontmatter } }
          e: { f: string }
        }
      }
    expect(data.a.b.c.d.created).toEqual('2023-12-25')
    expect(data.a.e.f).toEqual('g')
  })
})
