import type { ParsedArgs } from 'minimist'

declare global {
  type Argv = ParsedArgs & {}

  type Options = {
    collections: string[]
    object_media: boolean
    // filter: boolean
  }
}
