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

    expect(bookmarkOfOutput._indieweb.type).toEqual('bookmark')
    expect(bookmarkOfOutput._indieweb?.['bookmark-of']).toEqual(example)

    const inReplyTo: FFFFlavoredFrontmatter = {
      in_reply_to: example,
    }
    const inReplyToOutput = toJSONFeedItem(inReplyTo)

    expect(inReplyToOutput._indieweb.type).toEqual('reply')
    expect(inReplyToOutput._indieweb?.['in-reply-to']).toEqual(example)

    const likeOf: FFFFlavoredFrontmatter = {
      like_of: example,
    }
    const likeOfOutput = toJSONFeedItem(likeOf)

    expect(likeOfOutput._indieweb.type).toEqual('like')
    expect(likeOfOutput._indieweb?.['like-of']).toEqual(example)

    const repostOf: FFFFlavoredFrontmatter = {
      repost_of: example,
    }
    const repostOfOutput = toJSONFeedItem(repostOf)

    expect(repostOfOutput._indieweb.type).toEqual('repost')
    expect(repostOfOutput._indieweb?.['repost-of']).toEqual(example)
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

    expect(output._hatsu.about).toEqual('https://github.com/importantimport/hatsu/issues/1')
    expect(output._hatsu.banner_image).toEqual('https://example.com/foo.png')
    expect(output.content_html).toEqual('Custom Item Test')
    expect(output.id).toEqual('http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html')
    expect(output.url).toEqual('http://jsonfeed.micro.blog/2020/08/07/json-feed-version.html')
  })

  it('json feed extension', () => {
    const input: FFFFlavoredFrontmatter & Record<string, unknown> = {
      _hatsu: { about: 'https://github.com/importantimport/hatsu/issues/1' },
      _indieweb: { hello: 'world' },
    }
    const output = toJSONFeedItem(input)

    expect(output._hatsu?.about).toEqual('https://github.com/importantimport/hatsu/issues/1')
    expect(output._indieweb.hello).toEqual('world')
  })

  it('override _indieweb', () => {
    const input: FFFFlavoredFrontmatter & Record<string, unknown> = {
      _indieweb: {
        b: 'b',
        syndication: 'https://fff.js.org/b',
        type: 'rsvp',
      },
      syndication: 'https://fff.js.org/a',
    }
    const output = toJSONFeedItem(input, {
      _indieweb: {
        c: 'c',
        syndication: 'https://fff.js.org/c',
        type: 'article',
      },
    })

    expect((output._indieweb as Record<string, string>).b).toEqual('b')
    expect(output._indieweb.c).toEqual('c')
    expect(output._indieweb.syndication).toEqual('https://fff.js.org/c')
    expect(output._indieweb.type).toEqual('article')
  })
})
