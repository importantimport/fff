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

const strictMediaTransform = (
  options: StrictPresetOptions['media'],
  media?: (FFFAudio | FFFImage | FFFVideo) | string,
) =>
  typeof media === 'string'
    ? (options?.type === 'object'
        ? { src: media }
        : media)
    : (options?.type === 'string'
        ? media?.src
        : media)

/**
 * Strict - FFF Transform Preset
 * @beta
 */
export const strict = (strict: StrictPresetOptions): FFFTransformPreset => ({
  alt: ({ alt, image, images }) => alt ?? strict.media?.type === 'string' ? ((image ?? images?.[0]) as FFFImage).alt : undefined,
  audio: ({ audio }) => strictMediaTransform(strict.media, audio),
  image: ({ image, images }) =>
    strictMediaTransform(
      strict.media,
      strict.media?.array ? image : image ?? images?.[0],
    ),
  images: ({ image, images }) =>
    [...(images ?? []), ...(strict.media?.array ? [image] : [])].map(
      (image?: FFFImage | string) => strictMediaTransform(strict.media, image),
    ),
  lang: ({ lang }) => strict.lang === 'array'
    ? (typeof lang === 'string'
        ? [lang]
        : lang)
    : (typeof lang === 'object'
        ? lang[0]
        : lang),
  tags: ({ categories, tags }) => strict.categories ? tags : [...(tags ?? []), ...(categories ?? [])],
  video: ({ video }) => strictMediaTransform(strict.media, video),
})
