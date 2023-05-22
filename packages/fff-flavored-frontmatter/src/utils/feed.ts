import type { FFFFlavoredFrontmatter } from '../types'

/**
 * Post Type Discovery
 * @see {@link https://ptd.spec.indieweb.org/}
 * @see {@link https://indieweb.org/posts#Types_of_Posts}
 * @param fm FFF Flavored Frontmatter
 * @returns lower case post type string
 */
export const typeDiscovery = (fm: FFFFlavoredFrontmatter): string => {
  // TODO: Event, Checkin, Reply with RSVP
  if (
    fm.rsvp
    && ['yes', 'no', 'maybe', 'interested'].includes(fm.rsvp.toLowerCase())
  )
    return 'rsvp'
  else if (fm.bookmark_of && new URL(fm.bookmark_of))
    return 'bookmark'
  else if (fm.repost_of && new URL(fm.repost_of))
    return 'repost'
  else if (fm.like_of && new URL(fm.like_of))
    return 'like'
  else if (
    fm.in_reply_to
    && new URL(Array.isArray(fm.in_reply_to) ? fm.in_reply_to[0] : fm.in_reply_to)
  )
    return 'reply'
  else if (fm.video)
    return 'video'
  else if (fm.audio)
    return 'audio'
  else if (fm.title)
    return 'article'
  else if (fm.images)
    return 'photo'
  else return 'note'
}

/**
 * From FFF to JSON Feed Item (Version 1.1)
 * @alpha
 * @see {@link https://jsonfeed.org/version/1.1}
 * @param fm FFF Flavored Frontmatter
 * @returns JSON Feed Item Object (without content / id / url)
 */
export const toJSONFeedItem = (fm: FFFFlavoredFrontmatter): {} => ({
  /**
   * JSON Feed IndieWeb Extension
   * @see {@link https://indieweb.org/JSON_Feed#IndieWeb_Extension}
   */
  _indieweb: {
    'type': typeDiscovery(fm),
    'syndication': fm.syndication,
    'bookmark-of': fm.bookmark_of,
    'in-reply-to': fm.in_reply_to,
    'like-of': fm.like_of,
    'repost-of': fm.repost_of,
  },
  authors: fm.authors,
  date_modified: fm.updated,
  date_published: fm.published ?? fm.created,
  image: fm.images
    ? (typeof fm.images[0] === 'string'
      ? fm.images[0]
      : fm.images[0].src)
    : undefined,
  language: fm.lang,
  summary: fm.summary,
  tags: fm.tags,
  title: fm.title,
  // TODO: https://www.jsonfeed.org/version/1.1/#attachments-a-name-attachments-a
  // TODO: https://www.jsonfeed.org/podcasting/
})

// /**
//  * From FFF to JF2 Feed Child (Editor's Draft 09 February 2019)
//  * @alpha
//  * @see {@link https://jf2.spec.indieweb.org/#jf2feed}
//  * @param fm FFF Flavored Frontmatter
//  * @returns JF2 Feed Child Object (without content / uid / url)
//  */
// export const toJF2FeedChild = (fm: FFFFlavoredFrontmatter): {} => ({
//   type: 'entry',
//   name: fm.title,
//   published: fm.published ?? fm.created,
//   updated: fm.updated,
//   category: fm.tags,
//   photo: !fm.title && fm.image,
//   featured: fm.title && fm.image,
//   author: fm.authors && {
//     type: 'card',
//     name: fm.authors[0].name,
//     photo: fm.authors[0].avatar,
//     url: fm.authors[0].url,
//   },
// })
