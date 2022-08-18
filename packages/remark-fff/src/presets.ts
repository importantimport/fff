import type { RemarkFFFPreset } from './index'

export const hugo: RemarkFFFPreset = {
  image: 'images',
  tags: 'category',
  bookmark_of: 'bookmarkOf',
  like_of: 'likeOf',
  repost_of: 'repostOf',
  in_reply_to: 'inReplyTo',
  flags: (fm) => [
    ...(fm.draft ? ['draft'] : []),
    ...(fm.visibility ? [fm.visibility] : []),
  ],
}
