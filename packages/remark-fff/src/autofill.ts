import { statSync } from 'node:fs'

export const path = {
  urara: (path: string) =>
    new URL(`./urara${path.split('/src/routes')[1]}`, import.meta.url),
}

/** @alpha */
export const fs = (path: string) => {
  const { ctime, mtime } = statSync(path)
  return {
    created: ({ created }) => created ?? ctime,
    updated: ({ updated }) => updated ?? mtime,
  }
}
