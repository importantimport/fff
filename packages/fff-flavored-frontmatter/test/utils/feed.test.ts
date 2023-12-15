import { describe, expect, it } from 'vitest'

import { type FFFFlavoredFrontmatter, toJSONFeedItem } from '../../src'

describe('fff-flavored-frontmatter feed util', () => {
  it('basic', () => {
    const input: FFFFlavoredFrontmatter = {
      published: '2020-08-07T11:44:36-05:00',
      title: 'JSON Feed version 1.1',
    }
    const output = toJSONFeedItem(input)

    expect(output.date_published).toEqual('2020-08-07T11:44:36-05:00')
  })

  it('complex', () => {
    const authors = [
      {
        name: 'John Doe',
        url: 'https://example.com',
      },
      {
        name: 'Jane Doe',
        url: 'https://example.com',
      },
    ]

    const created = new Date(0).toISOString()
    const published = new Date('1').toISOString()
    const updated = new Date().toISOString()

    const input: FFFFlavoredFrontmatter = {
      authors,
      categories: ['baz'],
      created,
      images: [{
        src: 'https://example.com/foo.png',
      }],
      lang: 'en-US',
      published,
      summary: 'toJSONFeedItem Complex Test',
      tags: ['foo', 'bar'],
      title: 'toJSONFeedItem Complex Test',
      updated,
    }
    const output = toJSONFeedItem(input)

    expect((output._indieweb as Record<string, string>).type).toEqual('article')
    expect(output.date_published).toEqual(published)
    expect(output.date_modified).toEqual(updated)
    expect(output.image).toEqual('https://example.com/foo.png')
    expect(output.authors).toEqual(authors)
    expect(output.language).toEqual('en-US')
    expect(output.tags).toEqual(['foo', 'bar', 'baz'])
  })

  it('indieweb', () => {
    const example = 'https://example.com'

    const bookmarkOf: FFFFlavoredFrontmatter = {
      bookmark_of: example,
    }
    const bookmarkOfOutput = toJSONFeedItem(bookmarkOf)

    expect((bookmarkOfOutput._indieweb as Record<string, string>).type).toEqual('bookmark')
    expect((bookmarkOfOutput._indieweb as Record<string, string>)['bookmark-of']).toEqual(example)

    const inReplyTo: FFFFlavoredFrontmatter = {
      in_reply_to: example,
    }
    const inReplyToOutput = toJSONFeedItem(inReplyTo)

    expect((inReplyToOutput._indieweb as Record<string, string>).type).toEqual('reply')
    expect((inReplyToOutput._indieweb as Record<string, string>)['in-reply-to']).toEqual(example)

    const likeOf: FFFFlavoredFrontmatter = {
      like_of: example,
    }
    const likeOfOutput = toJSONFeedItem(likeOf)

    expect((likeOfOutput._indieweb as Record<string, string>).type).toEqual('like')
    expect((likeOfOutput._indieweb as Record<string, string>)['like-of']).toEqual(example)

    const repostOf: FFFFlavoredFrontmatter = {
      repost_of: example,
    }
    const repostOfOutput = toJSONFeedItem(repostOf)

    expect((repostOfOutput._indieweb as Record<string, string>).type).toEqual('repost')
    expect((repostOfOutput._indieweb as Record<string, string>)['repost-of']).toEqual(example)
  })

  it('custom', () => {
    const input: FFFFlavoredFrontmatter = {
      published: '2020-08-07T11:44:36-05:00',
      title: 'JSON Feed version 1.1',
    }
    const output = toJSONFeedItem(input, {
      _hatsu: {
        about: 'https://github.com/importantimport/hatsu/issues/1',
        banner_image: 'https://example.com/foo.png',
      },
      content_html: 'Custom Item Test',
      id: 'http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html',
      url: 'http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html',
    })

    expect((output._hatsu as Record<string, string>).about).toEqual('https://github.com/importantimport/hatsu/issues/1')
    expect((output._hatsu as Record<string, string>).banner_image).toEqual('https://example.com/foo.png')
    expect(output.content_html).toEqual('Custom Item Test')
    expect(output.id).toEqual('http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html')
    expect(output.url).toEqual('http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html')
  })
})
