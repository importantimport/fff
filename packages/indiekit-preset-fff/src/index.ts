import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter/fff'
import { version } from '../package.json'
import { postTypes } from './post-types'
import TOML from '@iarna/toml'
import YAML from 'yaml'

export type IndiekitPresetFFFOptions = {
  /**
   * Front matter format to use.
   * @defaultValue `yaml`
   */
  format?: 'json' | 'toml' | 'yaml'
  /**
   * Post types.
   * @defaultValue `urara`
   */
  types?: 'urara'
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
    this.options = { format: 'yaml', types: 'urara', ...options }
  }

  get info() {
    return {
      name: 'FFF Flavored Frontmatter ' + version,
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
    return postTypes[this.options.types]
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
        image: Array.isArray(properties.photo) ? undefined : properties.photo,
        images: Array.isArray(properties.photo) ? properties.photo : undefined,
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
        syndication: properties.syndication,
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
