import * as collections from './collections'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'

export const config = async (options: Options) => ({
  backend: {
    name: 'git-gateway',
    branch:
      (await promisify(exec)('git branch --show-current')).stdout.trim() ??
      'main',
  },
  media_folder: options.media_folder,
  public_folder: options.public_folder,
  collections: options.collections.map((collection) =>
    collections[collection](options)
  ),
})
