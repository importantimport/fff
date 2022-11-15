import type { RemarkFFFPreset } from './index'

export const hugo: RemarkFFFPreset = {
  image: 'images',
  tags: 'category',
  bookmark_of: 'bookmarkOf',
  like_of: 'likeOf',
  repost_of: 'repostOf',
  in_reply_to: 'inReplyTo',
  flags: ({ flags, draft, visibility }) =>
    Array.from(
      new Set([
        ...(flags ?? []),
        ...(draft ? ['draft'] : []),
        ...(visibility ? [visibility] : []),
      ])
    ),
}

export const hexo: RemarkFFFPreset = {
  created: 'date',
  summary: 'excerpt',
  tags: ({
    tags,
    categories,
  }: {
    tags: string[]
    categories: (string | string[])[]
  }) => [...(tags ?? []), ...Array.from(new Set((categories ?? []).flat()))],
}

/** @alpha */
export const zola: RemarkFFFPreset = {
  summary: 'description',
  created: 'date',
  flags: ({ flags, draft }) =>
    Array.from(new Set([...flags, ...(draft ? ['draft'] : [])])),
}
