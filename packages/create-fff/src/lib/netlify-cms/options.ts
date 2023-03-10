import { group, cancel, multiselect, confirm, text } from '@clack/prompts'

export const options: Options = await group(
  {
    collections: () =>
      multiselect({
        required: true,
        message: 'Choose the type of post you want:',
        options: [
          { value: 'article', label: 'Article' },
          { value: 'note', label: 'Note' },
          { value: 'photo', label: 'Photo' },
        ],
        initialValues: ['article'],
        cursorAt: 'note',
      }),
    object_media: () =>
      confirm({
        message: 'Do you want to use Object Media?',
        initialValue: false,
      }),
    media_folder: () =>
      text({
        message: 'media_folder',
        placeholder: 'public/uploads',
        validate: (value) => !value && 'Please enter a path.',
      }),
    public_folder: () =>
      text({
        message: 'public_folder',
        placeholder: '/uploads',
        validate: (value) => !value && 'Please enter a path.',
      }),
    folder: () =>
      text({
        message: 'Where do you want to use as the posts root?',
        placeholder: 'src/posts',
        validate: (value) => !value && 'Please enter a path.',
      }),
    path: () =>
      text({
        message: 'path',
        placeholder: '{{type}}/{{slug}}/index',
        initialValue: '{{type}}/{{slug}}/index',
        validate: (value) => !value && 'Please enter a path.',
      }),
    slug: () =>
      text({
        message: 'slug',
        placeholder: '{{type}}/{{slug}}',
        initialValue: '{{type}}/{{slug}}',
        validate: (value) => !value && 'Please enter a path.',
      }),
    // filter: () =>
    //   confirm({
    //     message:
    //       'Do you want to enable post type filtering?',
    //       // '\nWhen not using the {{type}} folder,\nit will correctly categorize posts;\nhowever, it will cause posts that do not have a type value set to not be displayed.\nhttps://fff.js.org'
    //   }),
  },
  {
    onCancel: () => {
      cancel('Operation cancelled.')
      process.exit(0)
    },
  }
)
