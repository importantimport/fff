export const postTypes = {
  urara: [
    {
      media: {
        path: 'urara/articles/{filename}',
        url: 'articles/{filename}',
      },
      name: 'Article',
      post: {
        path: 'urara/articles/{slug}/+page.md',
        url: 'articles/{slug}',
      },
      type: 'article',
    },
    {
      name: 'Note',
      post: {
        path: 'urara/notes/{slug}/+page.md',
        url: 'notes/{slug}',
      },
      type: 'note',
    },
    {
      media: {
        path: 'urara/photos/{filename}',
        url: 'photos/{filename}',
      },
      name: 'Photo',
      post: {
        path: 'urara/photos/{slug}/+page.md',
        url: 'photos/{slug}',
      },
      type: 'photo',
    },
    {
      media: {
        path: 'urara/videos/{filename}',
        url: 'videos/{filename}',
      },
      name: 'Video',
      post: {
        path: 'urara/videos/{slug}/+page.md',
        url: 'videos/{slug}',
      },
      type: 'video',
    },
    {
      media: {
        path: 'urara/audio/{filename}',
        url: 'audio/{filename}',
      },
      name: 'Audio',
      post: {
        path: 'urara/audio/{slug}/+page.md',
        url: 'audio/{slug}',
      },
      type: 'audio',
    },
    {
      name: 'Bookmark',
      post: {
        path: 'urara/bookmarks/{slug}/+page.md',
        url: 'bookmarks/{slug}',
      },
      type: 'bookmark',
    },
    {
      name: 'Checkin',
      post: {
        path: 'urara/checkins/{slug}/+page.md',
        url: 'checkins/{slug}',
      },
      type: 'checkin',
    },
    {
      name: 'Event',
      post: {
        path: 'urara/events/{slug}/+page.md',
        url: 'events/{slug}',
      },
      type: 'event',
    },
    {
      name: 'Reply with RSVP',
      post: {
        path: 'urara/replies/{slug}/+page.md',
        url: 'replies/{slug}',
      },
      type: 'rsvp',
    },
    {
      name: 'Reply',
      post: {
        path: 'urara/replies/{slug}/+page.md',
        url: 'replies/{slug}',
      },
      type: 'reply',
    },
    {
      name: 'Repost',
      post: {
        path: 'urara/reposts/{slug}/+page.md',
        url: 'reposts/{slug}',
      },
      type: 'repost',
    },
    {
      name: 'Like',
      post: {
        path: 'urara/likes/{slug}/+page.md',
        url: 'likes/{slug}',
      },
      type: 'like',
    },
  ],
}
