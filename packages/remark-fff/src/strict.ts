import type { FFFAudio, FFFImage, FFFVideo } from 'fff-flavored-frontmatter'
import type { RemarkFFFPreset, RemarkFFFOptions } from './index'

const mediaTransform = (
  options: RemarkFFFOptions['strict']['media'],
  media: string | (FFFImage | FFFAudio | FFFVideo)
) =>
  typeof media === 'string'
    ? options.type === 'object'
      ? { src: media }
      : media
    : options.type === 'string'
    ? media?.src
    : media

/** @alpha */
export const strict = (
  strict: RemarkFFFOptions['strict']
): RemarkFFFPreset => ({
  image: ({ image, images }) =>
    mediaTransform(
      strict.media,
      strict.media.array ? image : image ?? images?.[0]
    ),
  images: ({ image, images }) =>
    [...(images ?? []), ...(strict.media.array ? [image] : [])].map(
      (image: string | FFFImage) => mediaTransform(strict.media, image)
    ),
  audio: ({ audio }) => mediaTransform(strict.media, audio),
  video: ({ video }) => mediaTransform(strict.media, video),
})
