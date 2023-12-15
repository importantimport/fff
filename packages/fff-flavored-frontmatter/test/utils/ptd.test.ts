import { describe, expect, it } from 'vitest'

import { type FFFFlavoredFrontmatter, postTypeDiscovery } from '../../src'

describe('fff-flavored-frontmatter ptd util', () => {
  it('article', () => {
    const article: FFFFlavoredFrontmatter = {
      summary: 'Hello, World!',
      title: 'Hello, World!',
    }

    expect(postTypeDiscovery(article)).toEqual('article')
  })

  it('note', () => {
    const note: FFFFlavoredFrontmatter = {
      summary: 'foo',
      tags: ['bar'],
    }

    expect(postTypeDiscovery(note)).toEqual('note')
  })
})
