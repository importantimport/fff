export const urara: Preset = {
  argv: {
    'config-path': './urara/admin/config.yml',
  },
  options: {
    filter: true,
    folder: 'urara',
    media_folder: 'urara/uploads',
    path: '{{slug}}/+page',
    public_folder: '/uploads',
    slug: '{{slug}}',
  },
}
