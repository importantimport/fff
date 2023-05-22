#!/usr/bin/env node
import {
  cancel,
  confirm,
  isCancel,
  multiselect,
  text,
} from '@clack/prompts'

export const fillOptions = async (
  options: Partial<Options>,
): Promise<Options> => {
  if (!options.collections) {
    options.collections = (await multiselect({
      cursorAt: 'note',
      initialValues: ['article'],
      message: 'Choose the type of post you want:',
      options: [
        { label: 'Article', value: 'article' },
        { label: 'Note', value: 'note' },
        { label: 'Photo', value: 'photo' },
      ],
      required: true,
    })) as string[]
  }

  if (isCancel(options.collections)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.object_media) {
    options.object_media = (await confirm({
      initialValue: false,
      message: 'Do you want to use Object Media?',
    })) as boolean
  }

  if (isCancel(options.object_media)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.media_folder) {
    options.media_folder = (await text({
      message: 'media_folder',
      placeholder: 'public/uploads',
      validate: value => !value && 'Please enter a path.',
    })) as string
  }

  if (isCancel(options.media_folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.public_folder) {
    options.public_folder = (await text({
      message: 'public_folder',
      placeholder: '/uploads',
      validate: value => !value && 'Please enter a path.',
    })) as string
  }

  if (isCancel(options.public_folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.folder) {
    options.folder = (await text({
      message: 'Where do you want to use as the posts root?',
      placeholder: 'src/posts',
      validate: value => !value && 'Please enter a path.',
    })) as string
  }

  if (isCancel(options.folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.path) {
    options.path = (await text({
      initialValue: '{{type}}/{{slug}}/index',
      message: 'path',
      placeholder: '{{type}}/{{slug}}/index',
      validate: value => !value && 'Please enter a path.',
    })) as string
  }

  if (isCancel(options.path)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.slug) {
    options.slug = (await text({
      initialValue: '{{type}}/{{slug}}',
      message: 'slug',
      placeholder: '{{type}}/{{slug}}',
      validate: value => !value && 'Please enter a path.',
    })) as string
  }

  if (isCancel(options.slug)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  return options as Options
}
