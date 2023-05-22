import type { ParsedArgs } from 'minimist'

declare global {
  type Argv = ParsedArgs & {
    // common
    preset?: string

    // netlify-cms
    'config-path'?: string
  }

  type Options = {
    collections: string[]
    object_media: boolean
    media_folder: string
    public_folder: string
    folder: string
    path: string
    slug: string
    filter: boolean
    // collection_media_folder: string
    // collection_public_folder: string
  }

  type Preset = {
    argv?: Partial<Argv>
    options?: Partial<Options>
  }
}
