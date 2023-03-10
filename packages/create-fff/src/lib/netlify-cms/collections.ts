import * as fields from './fields'

type Collection<T = {}> = (options: Options & T) => Object

const common: Collection<{ type: string }> = ({ type }) => ({
  create: true,
  extension: 'md',
  format: 'yaml-frontmatter',
  // TODO: folder
  // TODO: path
  // TODO: slug
  // TODO: media_folder
  // TODO: public_folder
  // TODO: filter by type
})

export const article: Collection = (options) => ({
  name: 'article',
  label: 'Articles',
  label_singular: 'Article',
  ...common({ ...options, type: 'article' }),
  fields: [
    ...fields['common'],
    fields['type']('article'),
    fields['title'],
    fields['summary'],
    fields['image']({ featured: true, object_media: options.object_media }),
    fields['content'],
  ],
})

export const note: Collection = (options) => ({
  name: 'note',
  label: 'Notes',
  label_singular: 'Note',
  ...common({ ...options, type: 'note' }),
  fields: [
    ...fields['common'],
    fields['type']('note'),
    fields['summary'],
    fields['content'],
  ],
})

export const photo: Collection = (options) => ({
  name: 'photo',
  label: 'Photos',
  label_singular: 'Photo',
  ...common({ ...options, type: 'photo' }),
  fields: [
    ...fields['common'],
    fields['type']('photo'),
    fields['summary'],
    fields['image']({ featured: false, object_media: options.object_media }),
    fields['content']
  ],
})
