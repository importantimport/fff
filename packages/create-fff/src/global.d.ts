import type { ParsedArgs } from 'minimist'

declare global {
  type Argv = ParsedArgs & {
    // netlify-cms
    'config-path'?: string

    // common
    preset?: string
  }

  type Options = {
    collections: string[]
    filter: boolean
    folder: string
    media_folder: string
    object_media: boolean
    path: string
    public_folder: string
    slug: string
    // collection_media_folder: string
    // collection_public_folder: string
  }

  type Preset = {
    argv?: Partial<Argv>
    options?: Partial<Options>
  }
}
