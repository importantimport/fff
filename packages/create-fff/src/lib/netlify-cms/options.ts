import {
  cancel,
  multiselect,
  confirm,
  text,
  isCancel,
} from '@clack/prompts'

export const fillOptions = async (
  options: Partial<Options>
): Promise<Options> => {
  if (!options.collections)
    options.collections = (await multiselect({
      required: true,
      message: 'Choose the type of post you want:',
      options: [
        { value: 'article', label: 'Article' },
        { value: 'note', label: 'Note' },
        { value: 'photo', label: 'Photo' },
      ],
      initialValues: ['article'],
      cursorAt: 'note',
    })) as string[]

  if (isCancel(options.collections)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.object_media)
    options.object_media = (await confirm({
      message: 'Do you want to use Object Media?',
      initialValue: false,
    })) as boolean

  if (isCancel(options.object_media)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.media_folder)
    options.media_folder = (await text({
      message: 'media_folder',
      placeholder: 'public/uploads',
      validate: (value) => !value && 'Please enter a path.',
    })) as string

  if (isCancel(options.media_folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.public_folder)
    options.public_folder = (await text({
      message: 'public_folder',
      placeholder: '/uploads',
      validate: (value) => !value && 'Please enter a path.',
    })) as string

  if (isCancel(options.public_folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.folder)
    options.folder = (await text({
      message: 'Where do you want to use as the posts root?',
      placeholder: 'src/posts',
      validate: (value) => !value && 'Please enter a path.',
    })) as string

  if (isCancel(options.folder)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.path)
    options.path = (await text({
      message: 'path',
      placeholder: '{{type}}/{{slug}}/index',
      initialValue: '{{type}}/{{slug}}/index',
      validate: (value) => !value && 'Please enter a path.',
    })) as string

  if (isCancel(options.path)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  if (!options.slug)
    options.slug = (await text({
      message: 'slug',
      placeholder: '{{type}}/{{slug}}',
      initialValue: '{{type}}/{{slug}}',
      validate: (value) => !value && 'Please enter a path.',
    })) as string

  if (isCancel(options.slug)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  return options as Options
}
