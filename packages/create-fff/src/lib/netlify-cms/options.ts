import { group, cancel, multiselect, confirm } from '@clack/prompts'

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
