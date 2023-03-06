import type { Options } from './options'
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
  ...common({ ...options, type: 'article' }),
  name: 'article',
  label: 'Articles',
  label_singular: 'Article',
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
  ...common({ ...options, type: 'note' }),
  name: 'note',
  label: 'Notes',
  label_singular: 'Note',
  fields: [
    ...fields['common'],
    fields['type']('note'),
    fields['summary'],
    fields['content'],
  ],
})

export const photo: Collection = (options) => ({
  ...common({ ...options, type: 'photo' }),
  name: 'photo',
  label: 'Photos',
  label_singular: 'Photo',
  fields: [
    ...fields['common'],
    fields['type']('photo'),
    fields['summary'],
    fields['image']({ featured: false, object_media: options.object_media }),
    fields['content']
  ],
})
