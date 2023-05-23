import type { FFFAudio, FFFImage, FFFVideo } from '../../types'
import type { FFFTransformPreset } from '../transform'

/**
 * Stict Preset Options
 * @public
 */
export type StrictPresetOptions = {
  media?: {
    type?: 'string' | 'object'
    array?: boolean
  }
}

const strictMediaTransform = (
  options: StrictPresetOptions['media'],
  media: string | (FFFImage | FFFAudio | FFFVideo),
) =>
  typeof media === 'string'
    ? (options.type === 'object'
      ? { src: media }
      : media)
    : (options.type === 'string'
      ? media?.src
      : media)

/**
 * Strict - FFF Transform Preset
 * @beta
 */
export const strict = (strict: {
  media?: {
    type?: 'string' | 'object'
    array?: boolean
  }
}): FFFTransformPreset => ({
  alt: ({ alt, image, images }) => alt ?? strict.media.type === 'string' ? ((image || images?.[0]) as FFFImage)?.alt : undefined,
  audio: ({ audio }) => strictMediaTransform(strict.media, audio),
  image: ({ image, images }) =>
    strictMediaTransform(
      strict.media,
      strict.media.array ? image : image ?? images?.[0],
    ),
  images: ({ image, images }) =>
    [...(images ?? []), ...(strict.media.array ? [image] : [])].map(
      (image: string | FFFImage) => strictMediaTransform(strict.media, image),
    ),
  video: ({ video }) => strictMediaTransform(strict.media, video),
})
