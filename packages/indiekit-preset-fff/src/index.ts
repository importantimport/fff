import TOML, { type JsonMap } from '@iarna/toml'
import { type FFFFlavoredFrontmatter, type StrictPresetOptions, strict, transform } from 'fff-flavored-frontmatter'
import YAML from 'yaml'

import { version } from '../package.json'
import { postTypes } from './post-types'

/**
 * Indiekit Preset FFF Options.
 * @public
 */
export interface IndiekitPresetFFFOptions {
  /**
   * Front matter format to use.
   * @defaultValue `yaml`
   */
  format: 'json' | 'toml' | 'yaml'
  strict?: StrictPresetOptions
  /**
   * Post types.
   * @defaultValue `urara`
   */
  types: 'urara'
}

/**
 * {@link https://fff.js.org | FFF Flavored Frontmatter} publication preset for Indiekit.
 * @public
 */
export default class IndiekitPresetFFF {
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

  /**
   * Get front matter
   * @param properties - Post data variables
   * @returns Front matter in chosen format
   */
  private frontMatter(properties: unknown) {
    switch (this.options.format) {
      case 'json': {
        return `${JSON.stringify(properties, undefined, 2)}\n`
      }
      case 'toml': {
        return `+++\n${TOML.stringify(properties as JsonMap)}+++\n`
      }
      default: {
        return `---\n${YAML.stringify(properties, { lineWidth: 0 })}---\n`
      }
    }
  }

  get info() {
    return {
      name: `FFF Flavored Frontmatter ${version}`,
    }
  }

  public init(Indiekit: { addPreset: (t: unknown) => void }) {
    Indiekit.addPreset(this)
  }

  /**
   * Post template
   * @param properties - Post data variables
   * @returns Rendered template
   */
  public postTemplate(properties: FFFFlavoredFrontmatter & Record<string, unknown>) {
    let fm = {
      audio: properties.audio,
      bookmark_of: properties['bookmark-of'],
      checkin: properties.checkin,
      end: properties.end,
      flags: [
        ...(properties['post-status'] === 'draft' ? ['draft'] : []),
        ...(properties.visibility ? [properties.visibility as string] : []),
      ],
      image: Array.isArray(properties.photo) ? undefined : properties.photo,
      images: Array.isArray(properties.photo) ? properties.photo : undefined,
      in_reply_to: properties['in-reply-to'],
      like_of: properties['like-of'],
      location: properties.location,
      mp_syndicate_to: properties['mp-syndicate-to'],
      published: properties.published,
      repost_of: properties['repost-of'],
      rsvp: properties.rsvp,
      start: properties.start,
      summary: properties.summary,
      syndication: properties.syndication,
      tags: properties.category,
      title: properties.name,
      video: properties.video,
      // TODO: references
    } as FFFFlavoredFrontmatter
    if (this.options.strict)
      fm = transform(fm, [strict(this.options.strict)])
    return (
      `${this.frontMatter(fm)}${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        typeof properties.content === 'object'
          ? (properties.content as { text?: string }).text ?? (properties.content as { html?: string }).html
          : properties.content ?? ''
      }\n`
    )
  }

  /**
   * Post types
   * @returns defaults to Urara compatible paths
   */
  get postTypes() {
    return postTypes[this.options.types]
  }

  get prompts() {
    return [
      {
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
        message: 'Which front matter format are you using?',
        name: 'format',
        type: 'select',
      },
    ]
  }
}

export type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
