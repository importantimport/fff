import type { FFFFlavoredFrontmatter } from '../types'

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
 * @example
 * ```ts
 * import { postTypeDiscovery } from 'fff-flavored-frontmatter'
 *
 * const helloWorld = {
 *   title: 'Hello',
 *   summary: 'World!',
 * }
 *
 * const fooBar = {
 *   summary: 'foo',
 *   tags: ['bar'],
 * }
 *
 * // 'article'
 * console.log(postTypeDiscovery(helloWorld))
 * // 'note'
 * console.log(postTypeDiscovery(fooBar))
 * ```
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
