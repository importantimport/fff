export const urara: Preset = {
  argv: {
    'config-path': './urara/admin/config.yml',
  },
  options: {
    media_folder: 'urara/uploads',
    public_folder: '/uploads',
    folder: 'urara',
    path: '{{slug}}/+page',
    slug: '{{slug}}',
    filter: true,
  },
}
