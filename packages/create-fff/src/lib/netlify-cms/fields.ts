export const type = (type: string) => ({
  default: type,
  label: 'Post Type',
  name: 'type',
  widget: 'hidden',
})

export const common = [
  {
    label: 'Created on',
    name: 'created',
    widget: 'datetime',
  },
  {
    label: 'Updated on',
    name: 'updated',
    widget: 'datetime',
  },
  {
    label: 'Published on',
    name: 'published',
    widget: 'datetime',
  },
  {
    label: 'Tags',
    name: 'tags',
    widget: 'list',
  },
  {
    label: 'Flags',
    name: 'flags',
    widget: 'list',
  },
]

export const title = {
  label: 'Title',
  name: 'title',
  widget: 'string',
}

export const summary = {
  label: 'Summary',
  name: 'summary',
  widget: 'text',
}

export const featured = {
  label: 'Featured Image',
  name: 'image',
  widget: 'image',
}

export const image = ({
  featured,
  object_media,
}: {
  featured: boolean
  object_media: boolean
}) => ({
  label: featured ? 'Featured Image' : 'Photo',
  name: 'image',
  ...(object_media
    ? {
      fields: [
        {
          allow_multiple: false,
          label: 'Source',
          name: 'src',
          widget: 'image',
        },
        {
          label: 'Alternate Text',
          name: 'alt',
          widget: 'string',
        },
        {
          label: 'Figure Caption',
          name: 'figcaption',
          widget: 'string',
        },
      ],
      max: 1,
      widget: 'list',
    }
    : { allow_multiple: false, widget: 'image' }),
})

export const content = {
  label: 'Content',
  name: 'body',
  widget: 'markdown',
}
