import type { ParsedArgs } from 'minimist'

declare global {
  type Argv = ParsedArgs & {}

  type Options = {
    collections: string[]
    object_media: boolean
    media_folder: string
    public_folder: string
    folder: string
    path: string
    slug: string
    filter: boolean
  }
}
