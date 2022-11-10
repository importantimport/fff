import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter/fff'
import { version } from '../package.json'
import TOML from '@iarna/toml'
import YAML from 'yaml'

export type IndiekitPresetFFFOptions = {
  /**
   * Front matter format to use.
   * @defaultValue `yaml`
   */
  format?: 'json' | 'toml' | 'yaml'
}

export default class FFFPreset {
  id: string
  meta: ImportMeta
  name: string
  options: IndiekitPresetFFFOptions

  constructor(options = {}) {
    this.id = 'fff'
    this.meta = import.meta
    this.name = `FFF ${version} preset`
    this.options = { format: 'yaml', ...options }
  }

  get info() {
    return {
      name: 'FFF Flavored Frontmatter' + version,
    }
  }

  get prompts() {
    return [
      {
        type: 'select',
        name: 'format',
        message: 'Which front matter format are you using?',
        choices: [
          {
            title: 'JSON',
            value: 'json',
          },
          {
            title: 'TOML',
            value: 'toml',
          },
          {
            title: 'YAML',
            value: 'yaml',
          },
        ],
        initial: 2,
      },
    ]
  }

  /**
   * Get front matter
   * @param properties - Post data variables
   * @returns Front matter in chosen format
   */
  private frontMatter(properties: any) {
    switch (this.options.format) {
      case 'json':
        return `${JSON.stringify(properties, null, 2)}\n`
      case 'toml':
        return `+++\n${TOML.stringify(properties)}+++\n`
      default:
        return `---\n${YAML.stringify(properties, { lineWidth: 0 })}---\n`
    }
  }

  /**
   * Post types
   * @returns defaults to Urara compatible paths
   */
  get postTypes() {
    return [
      {
        type: 'article',
        name: 'Article',
        post: {
          path: 'urara/articles/{slug}/+page.md',
          url: 'articles/{slug}',
        },
        media: {
          path: 'urara/articles/{filename}',
          url: 'articles/{filename}',
        },
      },
      {
        type: 'note',
        name: 'Note',
        post: {
          path: 'urara/notes/{slug}/+page.md',
          url: 'notes/{slug}',
        },
      },
      {
        type: 'photo',
        name: 'Photo',
        post: {
          path: 'urara/photos/{slug}/+page.md',
          url: 'photos/{slug}',
        },
        media: {
          path: 'urara/photos/{filename}',
          url: 'photos/{filename}',
        },
      },
      {
        type: 'video',
        name: 'Video',
        post: {
          path: 'urara/videos/{slug}/+page.md',
          url: 'videos/{slug}',
        },
        media: {
          path: 'urara/videos/{filename}',
          url: 'videos/{filename}',
        },
      },
      {
        type: 'audio',
        name: 'Audio',
        post: {
          path: 'urara/audio/{slug}/+page.md',
          url: 'audio/{slug}',
        },
        media: {
          path: 'urara/audio/{filename}',
          url: 'audio/{filename}',
        },
      },
      {
        type: 'bookmark',
        name: 'Bookmark',
        post: {
          path: 'urara/bookmarks/{slug}/+page.md',
          url: 'bookmarks/{slug}',
        },
      },
      {
        type: 'checkin',
        name: 'Checkin',
        post: {
          path: 'urara/checkins/{slug}/+page.md',
          url: 'checkins/{slug}',
        },
      },
      {
        type: 'event',
        name: 'Event',
        post: {
          path: 'urara/events/{slug}/+page.md',
          url: 'events/{slug}',
        },
      },
      {
        type: 'rsvp',
        name: 'Reply with RSVP',
        post: {
          path: 'urara/replies/{slug}/+page.md',
          url: 'replies/{slug}',
        },
      },
      {
        type: 'reply',
        name: 'Reply',
        post: {
          path: 'urara/replies/{slug}/+page.md',
          url: 'replies/{slug}',
        },
      },
      {
        type: 'repost',
        name: 'Repost',
        post: {
          path: 'urara/reposts/{slug}/+page.md',
          url: 'reposts/{slug}',
        },
      },
      {
        type: 'like',
        name: 'Like',
        post: {
          path: 'urara/likes/{slug}/+page.md',
          url: 'likes/{slug}',
        },
      },
    ]
  }

  /**
   * Post template
   * @param properties - Post data variables
   * @returns Rendered template
   */
  public postTemplate(properties: any) {
    return (
      this.frontMatter({
        title: properties.name,
        summary: properties.summary,
        published: properties.published,
        tags: properties.category,
        image: properties.photo,
        audio: properties.audio,
        video: properties.video,
        bookmark_of: properties['bookmark_of'],
        like_of: properties['like-of'],
        repost_of: properties['repost-of'],
        in_reply_to: properties['in-reply-to'],
        location: properties.location,
        flags: [
          ...(properties.draft ? ['draft'] : []),
          ...(properties.visibility ? [properties.visibility] : []),
        ],
        start: properties.start,
        end: properties.end,
        rsvp: properties.rsvp,
        checkin: properties.checkin,
        mp_syndicate_to: properties['mp-syndicate-to'],
      } as FFFFlavoredFrontmatter) +
      `${
        properties.content.text ??
        properties.content.html ??
        properties.content ??
        ''
      }\n`
    )
  }

  public init(Indiekit: any) {
    Indiekit.addPreset(this)
  }
}
