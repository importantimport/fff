import type { FFFAudio, FFFImage, FFFVideo } from '../../types.ts'
import type { FFFTransformPreset } from '../transform.ts'

/**
 * Stict Preset Options
 * @public
 */
export interface StrictPresetOptions {
  /**
   * transform {@link https://fff.js.org/version/1.2.html#categories | categories} and {@link https://fff.js.org/version/1.2.html#tags | tags}.
   * @defaultValue `undefined`
   * - `true` - merge tags into categories (tags unchanged)
   * - `false` - merge categories into tags (categories unchanged)
   * - `undefined` - do not transform tags and categories
   */
  categories?: boolean
  /**
   * transform {@link https://fff.js.org/version/1.2.html#draft | draft} and {@link https://fff.js.org/concepts/flags.html#post-status | draft flags}.
   * @defaultValue `undefined`
   * - `true` - merge draft flags into draft (flags unchanged)
   * - `false` - merge draft into draft flags (draft unchanged)
   * - `undefined` - do not transform draft and draft flags
   */
  draft?: boolean
  media?: {
    array?: boolean
    type?: 'object' | 'string'
  }
  /**
   * transform {@link https://fff.js.org/version/1.2.html#visibility | visibility} and {@link https://fff.js.org/concepts/flags.html#visibility | visibility flags}.
   * @defaultValue `undefined`
   * - `true` - merge visibility flags into visibility (flags unchanged)
   * - `false` - merge visibility into visibility flags (visibility unchanged)
   * - `undefined` - do not transform visibility and visibility flags
   */
  visibility?: boolean
}

/** @internal */
const strictMediaTransform = (
  options: StrictPresetOptions['media'],
  media?: (FFFAudio | FFFImage | FFFVideo) | string,
  alt?: string,
) =>
  typeof media === 'string'
    ? (options?.type === 'object'
        ? { alt, src: media }
        : media)
    : (options?.type === 'string'
        ? media?.src
        : media)

/**
 * Strict - FFF Transform Preset (Media Only)
 * @alpha
 */
export const strictMedia = ({ media: options }: StrictPresetOptions = {}): FFFTransformPreset => ({
  alt: ({ alt, image, images }) => alt ?? (options?.type === 'string' && (image || images)) ? ((image ?? images?.[0]) as FFFImage).alt : undefined,
  audio: ({ audio }) => strictMediaTransform(options, audio),
  image: ({ alt, image, images }) =>
    strictMediaTransform(
      options,
      options?.array ? image : image ?? images?.[0],
      alt,
    ),
  images: ({ alt, image, images }) =>
    [...(images ?? []), ...(options?.array ? [image] : [])].map(
      (image?: FFFImage | string, index?: number) => strictMediaTransform(options, image, index === 0 ? alt : undefined),
    ),
  video: ({ video }) => strictMediaTransform(options, video),
})

/**
 * Strict - FFF Transform Preset (Categories/Tags Only)
 * @alpha
 */
export const strictCategories = ({ categories: options }: StrictPresetOptions = {}): FFFTransformPreset => ({
  categories: ({ categories, tags }) => options === true ? [...(categories ?? []), ...(tags ?? [])] : categories,
  tags: ({ categories, tags }) => options === false ? [...(tags ?? []), ...(categories ?? [])] : tags,
})

export const strictDraft = ({ draft: options }: StrictPresetOptions = {}): FFFTransformPreset => ({
  draft: ({ draft, flags }) => draft ?? options === true ? flags?.includes('draft') : undefined,
  flags: ({ draft, flags }) => (options === false && draft) ? [...(flags ?? []), 'draft'] : flags,
})

export const strictVisibility = ({ visibility: options }: StrictPresetOptions = {}): FFFTransformPreset => ({
  flags: ({ flags, visibility }) => (options === false && visibility) ? [...(flags ?? []), visibility] : flags,
  visibility: ({ flags, visibility }) => visibility ?? options === true ? flags?.find(flag => ['private', 'public', 'unlisted'].includes(flag)) : undefined,
})

/**
 * Strict - FFF Transform Preset
 * @beta
 */
export const strict = (options: StrictPresetOptions): FFFTransformPreset => ({
  ...strictCategories(options),
  ...strictDraft(options),
  ...strictMedia(options),
  ...strictVisibility(options),
})
