import { transform } from 'fff-flavored-frontmatter'
import { describe, expect, it } from 'vitest'

import { hexo } from '../../src/index'

describe('remark-fff', () => {
  // https://github.com/hexojs/hexo-theme-unit-test/blob/master/source/_posts/gallery-post.md
  it('gallery-post', () => {
    let fm: Record<string, unknown> = {
      categories: [
        [
          'Sports',
          'Baseball',
        ],
        [
          'MLB',
          'American League',
          'Boston Red Sox',
        ],
        [
          'MLB',
          'American League',
          'New York Yankees',
        ],
        'Rivalries',
      ],
      date: '2013-12-25 00:16:18',
      photos: [
        '/assets/wallpaper-2572384.jpg',
        '/assets/wallpaper-2311325.jpg',
        '/assets/wallpaper-878514.jpg',
        'https://via.placeholder.com/350x150.jpg',
      ],
      title: 'Gallery Post',
    }
    fm = transform(fm, [hexo])
    expect(fm.categories).toEqual([
      'Sports',
      'Baseball',
      'MLB',
      'American League',
      'Boston Red Sox',
      'New York Yankees',
      'Rivalries',
    ])
    expect(fm.created).toEqual('2013-12-25 00:16:18')
    expect(fm.images).toEqual([
      '/assets/wallpaper-2572384.jpg',
      '/assets/wallpaper-2311325.jpg',
      '/assets/wallpaper-878514.jpg',
      'https://via.placeholder.com/350x150.jpg',
    ])
  })
})
