import type { FFFFlavoredFrontmatter } from '../types'
import { strict } from './presets'
import { transform } from './transform'

/**
 * Supported Post Type
 * @beta
 * @see {@link https://ptd.spec.indieweb.org/#algorithm}
 * @see {@link https://indieweb.org/posts#Types_of_Posts}
 */
export type postType = 'event' | 'rsvp' | 'repost' | 'like' | 'bookmark' | 'reply' | 'video' | 'audio' | 'article' | 'photo' | 'note'

/**
 * Post Type Discovery
 * @beta
 * @param fm - FFF Flavored Frontmatter
 * @returns lower case post type
 * @see {@link https://ptd.spec.indieweb.org/#algorithm}
 * @see {@link https://indieweb.org/posts#Types_of_Posts}
 */
export const postTypeDiscovery = (fm: FFFFlavoredFrontmatter): postType => {
  // TODO: Checkin, Reply with RSVP
  /** may be modified in the future */
  if (fm.flags?.includes('event'))
    return 'event'
  else if (
    fm.rsvp
    && ['yes', 'no', 'maybe', 'interested'].includes(fm.rsvp.toLowerCase())
  )
    return 'rsvp'
  else if (fm.repost_of && new URL(fm.repost_of))
    return 'repost'
  else if (fm.like_of && new URL(fm.like_of))
    return 'like'
  else if (fm.bookmark_of && new URL(fm.bookmark_of))
    return 'bookmark'
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
 * @beta
 * @param fm - FFF Flavored Frontmatter
 * @returns - JSON Feed Item Object (without content / id / url)
 * @see {@link https://jsonfeed.org/version/1.1}
 */
export const toJSONFeedItem = (fm: FFFFlavoredFrontmatter): object => {
  fm = transform(fm, [strict({
    media: {
      array: false,
      type: 'string',
    },
  })])
  return {
    /**
     * JSON Feed IndieWeb Extension
     * @see {@link https://indieweb.org/JSON_Feed#IndieWeb_Extension}
     */
    _indieweb: {
      'bookmark-of': fm.bookmark_of,
      'in-reply-to': fm.in_reply_to,
      'like-of': fm.like_of,
      'repost-of': fm.repost_of,
      'syndication': fm.syndication,
      'type': postTypeDiscovery(fm),
    },
    authors: fm.authors,
    date_modified: fm.updated,
    date_published: fm.published ?? fm.created,
    image: fm.image,
    language: fm.lang?.[0] ?? fm.lang,
    summary: fm.summary,
    tags: [
      ...(fm.tags ?? []),
      ...(fm.categories ?? []),
    ],
    title: fm.title,
    // TODO: https://www.jsonfeed.org/version/1.1/#attachments-a-name-attachments-a
    // TODO: https://www.jsonfeed.org/podcasting/
  }
}

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
