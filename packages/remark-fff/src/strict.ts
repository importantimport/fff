import type {
  FFFAudio,
  FFFFlavoredFrontmatter,
  FFFImage,
  FFFVideo,
} from 'fff-flavored-frontmatter'
import type { RemarkFFFPreset, RemarkFFFOptions } from './index'

/** @alpha */
export const strict = (strict: RemarkFFFOptions['strict']): RemarkFFFPreset => {
  const mediaTransform = (
    media:
      | FFFFlavoredFrontmatter['image']
      | FFFFlavoredFrontmatter['audio']
      | FFFFlavoredFrontmatter['video']
  ) => {
    let result = media
    if (result instanceof String && strict.media.type === 'object')
      result = { src: result } as FFFImage | FFFAudio | FFFVideo
    else if (result instanceof Object && strict.media.type === 'string')
      result = (result as FFFImage | FFFAudio | FFFVideo).src
    else if (result instanceof Array) {
      result = result.map((media: string | FFFImage) =>
        media instanceof String && strict.media.type === 'object'
          ? ({ src: result } as FFFImage | FFFAudio | FFFVideo)
          : media instanceof Object && strict.media.type === 'string'
          ? (media as FFFImage | FFFAudio | FFFVideo).src
          : media
      )
      if (strict.media.array === false) result = result[0]
    }
    return result
  }
  return {
    image: ({ image }) => mediaTransform(image),
    audio: ({ audio }) => mediaTransform(audio),
    video: ({ video }) => mediaTransform(video),
  }
}
