import type { FFFFlavoredFrontmatter } from '../types'
import { strict } from './presets'
import { postTypeDiscovery } from './ptd'
import { transform } from './transform'

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
