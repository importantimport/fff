import type { FFFAudio, FFFImage, FFFVideo } from '../../types.ts'
import type { FFFTransformPreset } from '../transform.ts'

/**
 * Stict Preset Options
 * @public
 */
export interface StrictPresetOptions {
  categories?: boolean
  lang?: 'array' | 'string'
  media?: {
    array?: boolean
    type?: 'object' | 'string'
  }
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
 * Strict - FFF Transform Preset
 * @beta
 */
export const strict = (strict: StrictPresetOptions): FFFTransformPreset => ({
  ...strictMedia(strict),
  lang: ({ lang }) => strict.lang === 'array'
    ? (typeof lang === 'string'
        ? [lang]
        : lang)
    : (typeof lang === 'object'
        ? lang[0]
        : lang),
  tags: ({ categories, tags }) => strict.categories ? tags : [...(tags ?? []), ...(categories ?? [])],
})
