import type { FFFFlavoredFrontmatter } from '../types.ts'

/**
 * Supported Post Type
 * @beta
 * @see {@link https://ptd.spec.indieweb.org/#algorithm}
 * @see {@link https://indieweb.org/posts#Types_of_Posts}
 */
export type PostType = 'article' | 'audio' | 'bookmark' | 'event' | 'like' | 'note' | 'photo' | 'reply' | 'repost' | 'rsvp' | 'video'

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
export const postTypeDiscovery = (fm: FFFFlavoredFrontmatter): PostType => {
  // TODO: Checkin, Reply with RSVP
  /** may be modified in the future */
  if (fm.flags?.includes('event'))
    return 'event'
  else if (
    fm.rsvp
    && ['interested', 'maybe', 'no', 'yes'].includes(fm.rsvp.toLowerCase())
  )
    return 'rsvp'
  else if (fm.repost_of)
    return 'repost'
  else if (fm.like_of)
    return 'like'
  else if (fm.bookmark_of)
    return 'bookmark'
  else if (fm.in_reply_to)
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
