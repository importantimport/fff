// deno-fmt-ignore-file fuck the semicolons

/** Object Image */
export type FFFImage = Partial<HTMLImageElement> & {
  source?: Partial<HTMLSourceElement>[]
  figcaption?: string
}

/** Object Audio */
export type FFFAudio = Partial<HTMLAudioElement> & {
  source?: Partial<HTMLSourceElement>[]
}

/** Object Video */
export type FFFVideo = Partial<HTMLVideoElement> & {
  source?: Partial<HTMLSourceElement>[]
}

/** Author */
export type FFFAuthor = {
  /** the author's name. */
  name?: string
  /** the URL of a site owned by the author. */
  url?: string
  /** the URL for an image for the author. */
  avatar?: string
}

/** Base Variables */
export type FFFBase = {
  /** the title of article, non-article posts may omit titles. */
  title?: string
  /** plain text sentence or two describing the post. */
  summary?: string
  /** the created date of the post. */
  created?: string
  /** the updated date of the post. */
  updated?: string
  /** the published date of the post. */
  published?: string
  /** the featured image for article, or image for "photo" / "multi-photo" posts. */
  image?: string | FFFImage | string[] | FFFImage[]
  /** the main audio for "audio" post. */
  audio?: string | FFFAudio
  /** the main video for "video" post. */
  video?: string | FFFVideo
  /** tags array, any plain text values you want. */
  tags?: string[]
  /** flags array, any plain text values you want. */
  flags?: string[]
}

/** Extra Variables */
export type FFFExtra = {
  /** specifies one or more post authors. */
  authors?: FFFAuthor[]
  /** the primary language for the post. */
  lang?: string
  /** location the post was posted from. */
  location?: string
  /** indicates this post is a bookmark of another URL. */
  bookmark_of?: string
  /** the URL which the post is considered a "like" (favorite, star) of. */
  like_of?: string
  /** the URL which the post is considered a "repost" of. */
  repost_of?: string
  /** URL(s) which the post is considered reply to. */
  in_reply_to?: string | string[]
  /** URL(s) of syndicated copies of this post. */
  syndication?: string | string[]
  /** the URL of the venue/location h-card which the h-entry is considered a "checkin" of. */
  checkin?: string
  /** a reply to an event that says whether the sender is attending. */
  rsvp?: 'yes' | 'no' | 'maybe' | 'interested'
  /** datetime the event starts. */
  start?: string
  /** datetime the event ends. */
  end?: string
}

/** FFF Flavored Frontmatter */
export type FFFFlavoredFrontmatter = FFFBase & FFFExtra
