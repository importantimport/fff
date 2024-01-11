import type { FFFFlavoredFrontmatter } from '../types.ts'

import { strict } from './presets.ts'
import { type PostType, postTypeDiscovery } from './ptd.ts'
import { transform } from './transform.ts'

/**
 * Type validation for `toJSONFeedItem` function.
 * @beta
 * @see {@link https://jsonfeed.org/version/1.1/#items-a-name-items-a}
 */
/* eslint-disable perfectionist/sort-object-types */
export type JSONFeedItem = {
  [key: `_${string}`]: Record<string, unknown> | undefined
  [key: string]: unknown
  // _indieweb?: Partial<JSONFeedItemIndieWeb>
  id: string
  url?: string
  external_url?: string
  title?: FFFFlavoredFrontmatter['title']
  content_html?: string
  content_text?: string
  summary?: FFFFlavoredFrontmatter['summary']
  image?: string
  banner_image?: string
  date_published?: string
  date_modified?: string
  authors?: FFFFlavoredFrontmatter['authors']
  tags?: FFFFlavoredFrontmatter['tags']
  language?: FFFFlavoredFrontmatter['lang']
  attachments?: JSONFeedItemAttachment[]
}

/**
 * JSON Feed IndieWeb Extension.
 * @beta
 * @see {@link https://indieweb.org/JSON_Feed#IndieWeb_Extension}
 */
export type JSONFeedItemIndieWeb = {
  [key: string]: unknown
  type: PostType & (string & {})
  syndication?: FFFFlavoredFrontmatter['syndication']
  'bookmark-of'?: FFFFlavoredFrontmatter['bookmark_of']
  'in-reply-to'?: FFFFlavoredFrontmatter['in_reply_to']
  'like-of'?: FFFFlavoredFrontmatter['like_of']
  'repost-of'?: FFFFlavoredFrontmatter['repost_of']
}

/**
 * Type validation for `toJSONFeedItem` function.
 * @beta
 * @see {@link https://www.jsonfeed.org/version/1.1/#attachments-a-name-attachments-a}
 */
export type JSONFeedItemAttachment = {
  url: string
  mime_type: string
  title?: string
  size_in_bytes?: number
  duration_in_seconds?: number
}
/* eslint-enable perfectionist/sort-object-types */

/**
 * From FFF to JSON Feed Item (Version 1.1)
 * @beta
 * @param fm - FFF Flavored Frontmatter
 * @returns JSON Feed Item Object (without content_\{text,html\} / id / url)
 * @see {@link https://jsonfeed.org/version/1.1}
 */
export const toJSONFeedItem = <
  TInput extends Partial<JSONFeedItem> = Partial<JSONFeedItem>,
  TOutput extends TInput = TInput & { _indieweb: JSONFeedItemIndieWeb }
>(fm: FFFFlavoredFrontmatter & Record<string, unknown>, item?: TInput): TOutput => {
  fm = transform(fm as Record<string, unknown>, [strict({
    categories: false,
    media: {
      array: false,
      type: 'string',
    },
  })])
  return {
    ...item,
    /**
     * Treats keys starts with underscore as Custom JSON Feed Extensions
     * @see {@link https://www.jsonfeed.org/version/1.1/#extensions-a-name-extensions-a}
     */
    ...Object.fromEntries(
      Object.entries(fm)
        .filter(([key, value]) => key.startsWith('_') && typeof value === 'object'),
    ),
    _indieweb: {
      'bookmark-of': fm.bookmark_of,
      'in-reply-to': fm.in_reply_to,
      'like-of': fm.like_of,
      'repost-of': fm.repost_of,
      'syndication': fm.syndication,
      'type': postTypeDiscovery(fm),
      ...fm._indieweb as Partial<JSONFeedItemIndieWeb>,
      ...item?._indieweb as Partial<JSONFeedItemIndieWeb>,
    },
    authors: fm.authors,
    date_modified: fm.updated,
    date_published: fm.published ?? fm.created,
    image: fm.image,
    language: fm.lang,
    summary: fm.summary,
    tags: fm.tags,
    title: fm.title,
  } as JSONFeedItem as TOutput
}

/**
 * From FFF to JF2 Feed Child (Editor's Draft 09 February 2019)
 * @alpha
 * @param fm - FFF Flavored Frontmatter
 * @returns JF2 Feed Child Object (without content / uid / url)
 * @see {@link https://jf2.spec.indieweb.org/#jf2feed}
 */
export const toJF2FeedChild = (fm: FFFFlavoredFrontmatter, child?: object): object => {
  fm = transform(fm as Record<string, unknown>, [strict({
    categories: false,
    media: {
      array: false,
      type: 'string',
    },
  })])
  return {
    ...child,
    author: fm.authors && {
      name: fm.authors[0].name,
      photo: fm.authors[0].avatar,
      type: 'card',
      url: fm.authors[0].url,
    },
    category: fm.tags,
    featured: fm.title && fm.image,
    lang: fm.lang,
    name: fm.title,
    photo: fm.image,
    published: fm.published ?? fm.created,
    type: 'entry',
    updated: fm.updated,
  }
}
