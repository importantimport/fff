import * as fields from './fields'

type Collection<T = object> = (options: Options & T) => object

const common: Collection<{ type: string }> = options => ({
  create: true,
  extension: 'md',
  // TODO: media_folder
  // TODO: public_folder
  filter: options.filter
    ? {
        field: 'type',
        value: options.type,
      }
    : undefined,

  folder: options.folder,

  format: 'yaml-frontmatter',

  path: options.path.replace('{{type}}', options.type),

  slug: options.slug.replace('{{type}}', options.type),
})

export const article: Collection = options => ({
  label: 'Articles',
  label_singular: 'Article',
  name: 'article',
  ...common({ ...options, type: 'article' }),
  fields: [
    ...fields.common,
    fields.type('article'),
    fields.title,
    fields.summary,
    fields.image({ featured: true, object_media: options.object_media }),
    fields.content,
  ],
})

export const note: Collection = options => ({
  label: 'Notes',
  label_singular: 'Note',
  name: 'note',
  ...common({ ...options, type: 'note' }),
  fields: [
    ...fields.common,
    fields.type('note'),
    fields.summary,
    fields.content,
  ],
})

export const photo: Collection = options => ({
  label: 'Photos',
  label_singular: 'Photo',
  name: 'photo',
  ...common({ ...options, type: 'photo' }),
  fields: [
    ...fields.common,
    fields.type('photo'),
    fields.summary,
    fields.image({ featured: false, object_media: options.object_media }),
    fields.content,
  ],
})
