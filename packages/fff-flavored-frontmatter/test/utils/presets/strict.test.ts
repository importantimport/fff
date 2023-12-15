import { describe, expect, it } from 'vitest'

import { type FFFFlavoredFrontmatter, strict, transform } from '../../../src'

describe('fff-flavored-frontmatter strict preset', () => {
  it('basic', () => {
    const input: FFFFlavoredFrontmatter = {
      created: '2023-12-12',
      title: 'Hello World!',
    }
    const output = transform(input, [
      strict({
        categories: false,
        media: {
          array: false,
          type: 'string',
        },
      }),
    ])

    expect(output.created).toEqual('2023-12-12')
  })

  it('categories', () => {
    const input: FFFFlavoredFrontmatter = {
      categories: ['baz', 'qux'],
      created: '2023-12-12',
      tags: ['foo', 'bar'],
      title: 'Categories Test',
    }
    const output = transform(input, [
      strict({ categories: false }),
    ])

    // expect(output.categories).toBeUndefined()
    expect(output.tags).toEqual(['foo', 'bar', 'baz', 'qux'])
  })
})
