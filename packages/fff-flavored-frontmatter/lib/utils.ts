import type { FFFFlavoredFrontmatter } from './types'

/**
 * Post Type Discovery
 * @see {@link https://ptd.spec.indieweb.org/}
 * @param fm FFF Flavored Frontmatter
 * @returns lower case post type string
 */
export const typeDiscovery = (fm: FFFFlavoredFrontmatter): string => {
  // TODO: Event, Checkin, Reply with RSVP
  if (
    fm.rsvp &&
    ['yes', 'no', 'maybe', 'interested'].includes(fm.rsvp.toLowerCase())
  )
    return 'rsvp'
  else if (fm.bookmark_of && new URL(fm.bookmark_of)) return 'bookmark'
  else if (fm.repost_of && new URL(fm.repost_of)) return 'repost'
  else if (fm.like_of && new URL(fm.like_of)) return 'like'
  else if (fm.in_reply_to && new URL(fm.in_reply_to[0] ?? fm.in_reply_to))
    return 'reply'
  else if (fm.video) return 'video'
  else if (fm.audio) return 'audio'
  else if (fm.title) return 'article'
  else if (fm.image) return 'photo'
  else return 'note'
}
