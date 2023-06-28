/// <reference lib="dom" />

/**
 * Object Image
 * @public
 */
export interface FFFImage extends Partial<HTMLImageElement> {
  sources?: Partial<HTMLSourceElement>[]
  figcaption?: string
}

/**
 * Object Audio
 * @public
 */
export interface FFFAudio extends Partial<HTMLAudioElement> {
  sources?: Partial<HTMLSourceElement>[]
}

/**
 * Object Video
 * @public
 */
export interface FFFVideo extends Partial<HTMLVideoElement> {
  sources?: Partial<HTMLSourceElement>[]
}

/**
 * Author
 * @public
 */
export interface FFFAuthor {
  /** the author's name. */
  name?: string
  /** the URL of a site owned by the author. */
  url?: string
  /** the URL for an image for the author. */
  avatar?: string
}

/**
 * Base Variables
 * @public
 */
export interface FFFBase {
  /** the title of article, non-article posts may omit titles. */
  title?: string
  /** plain text sentence or two describing the post. */
  summary?: string
  /** tags array, any plain text values you want. */
  tags?: string[]
  /** categories array, any plain text values you want. */
  categories?: string[]
  /** flags array, any plain text values you want. */
  flags?: string[]
}

/**
 * DateTime Vaeriables
 * @public
 */
export interface FFFDateTime {
  /** the created date of the post. */
  created?: string | number
  /** the updated date of the post. */
  updated?: string | number
  /** the published date of the post. */
  published?: string | number
  /** datetime the event starts. */
  start?: string | number
  /** datetime the event ends. */
  end?: string | number
}

/**
 * Media Variables
 * @public
 */
export interface FFFMedia {
  /** the main image for article or photo post. */
  image?: string | FFFImage
  /** the image for multi-photo post. */
  images?: string[] | FFFImage[]
  /** the main audio for audio post. */
  audio?: string | FFFAudio
  /** the main video for video post. */
  video?: string | FFFVideo
  /** image alternate text. */
  alt?: string
}

/**
 * Mention Variables
 * @public
 */
export interface FFFMention {
  /** indicates this post is a bookmark of another URL. */
  bookmark_of?: string
  /** the URL which the post is considered a "like" (favorite, star) of. */
  like_of?: string
  /** the URL which the post is considered a "repost" of. */
  repost_of?: string
  /** URL which the post is considered reply to. */
  in_reply_to?: string
}

/**
 * Extra Variables
 * @public
 */
export interface FFFExtra {
  /** specifies one or more post authors. */
  authors?: FFFAuthor[]
  /** the primary language for the post. */
  lang?: string | string[]
  /** location the post was posted from. */
  location?: string
  /** URL(s) of syndicated copies of this post. */
  syndication?: string | string[]
  /** the URL of the venue/location h-card which the h-entry is considered a "checkin" of. */
  checkin?: string
  /** a reply to an event that says whether the sender is attending. */
  rsvp?: 'yes' | 'no' | 'maybe' | 'interested'
}

/**
 * Type definition of the {@link https://fff.js.org | FFF Flavored Frontmatter}.
 * @public
 */
export type FFFFlavoredFrontmatter = FFFBase &
  FFFDateTime &
  FFFMedia &
  FFFMention &
  FFFExtra
