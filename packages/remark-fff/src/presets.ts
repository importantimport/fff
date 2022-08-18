import type { Preset } from './index'

export const hugo: Preset = {
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
