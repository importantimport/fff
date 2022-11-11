export const postTypes = {
  urara: [
    {
      type: 'article',
      name: 'Article',
      post: {
        path: 'urara/articles/{slug}/+page.md',
        url: 'articles/{slug}',
      },
      media: {
        path: 'urara/articles/{filename}',
        url: 'articles/{filename}',
      },
    },
    {
      type: 'note',
      name: 'Note',
      post: {
        path: 'urara/notes/{slug}/+page.md',
        url: 'notes/{slug}',
      },
    },
    {
      type: 'photo',
      name: 'Photo',
      post: {
        path: 'urara/photos/{slug}/+page.md',
        url: 'photos/{slug}',
      },
      media: {
        path: 'urara/photos/{filename}',
        url: 'photos/{filename}',
      },
    },
    {
      type: 'video',
      name: 'Video',
      post: {
        path: 'urara/videos/{slug}/+page.md',
        url: 'videos/{slug}',
      },
      media: {
        path: 'urara/videos/{filename}',
        url: 'videos/{filename}',
      },
    },
    {
      type: 'audio',
      name: 'Audio',
      post: {
        path: 'urara/audio/{slug}/+page.md',
        url: 'audio/{slug}',
      },
      media: {
        path: 'urara/audio/{filename}',
        url: 'audio/{filename}',
      },
    },
    {
      type: 'bookmark',
      name: 'Bookmark',
      post: {
        path: 'urara/bookmarks/{slug}/+page.md',
        url: 'bookmarks/{slug}',
      },
    },
    {
      type: 'checkin',
      name: 'Checkin',
      post: {
        path: 'urara/checkins/{slug}/+page.md',
        url: 'checkins/{slug}',
      },
    },
    {
      type: 'event',
      name: 'Event',
      post: {
        path: 'urara/events/{slug}/+page.md',
        url: 'events/{slug}',
      },
    },
    {
      type: 'rsvp',
      name: 'Reply with RSVP',
      post: {
        path: 'urara/replies/{slug}/+page.md',
        url: 'replies/{slug}',
      },
    },
    {
      type: 'reply',
      name: 'Reply',
      post: {
        path: 'urara/replies/{slug}/+page.md',
        url: 'replies/{slug}',
      },
    },
    {
      type: 'repost',
      name: 'Repost',
      post: {
        path: 'urara/reposts/{slug}/+page.md',
        url: 'reposts/{slug}',
      },
    },
    {
      type: 'like',
      name: 'Like',
      post: {
        path: 'urara/likes/{slug}/+page.md',
        url: 'likes/{slug}',
      },
    },
  ],
}
