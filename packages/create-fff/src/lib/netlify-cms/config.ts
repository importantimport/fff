import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import * as collections from './collections'

export const config = async (options: Options) => ({
  backend: {
    branch:
      await promisify(exec)('git branch --show-current').then(response => response.stdout.trim())
      ?? 'main',
    name: 'git-gateway',
  },
  collections: options.collections.map(collection =>
    collections[collection](options),
  ),
  media_folder: options.media_folder,
  public_folder: options.public_folder,
})
