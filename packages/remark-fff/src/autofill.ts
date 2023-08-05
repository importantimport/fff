import type { FFFTransformPreset } from 'fff-flavored-frontmatter'

import { execFileSync } from 'node:child_process'
import { statSync } from 'node:fs'
import { EOL } from 'node:os'

/**
 * Predefined path preset
 * @public
 */
export const path = {
  urara: (path: string) => path.replace('/src/routes/', '/urara/'),
} as const

/**
 * Auto-fill datetime from node:fs
 * @beta
 */
export const fs = (path: string): FFFTransformPreset => {
  const { ctime, mtime } = statSync(path)
  return {
    created: ({ created }) => created ?? ctime,
    updated: ({ updated }) => updated ?? mtime,
  }
}

/**
 * Auto-fill datetime from git
 * @beta
 * @remarks author: Jordan Webb
 * @see {@link https://github.com/jordemort/jordemort.github.io/blob/main/src/plugins/repodates.mjs}
 */
export const git = (path: string): FFFTransformPreset => ({
  created: ({ created }) =>
    created
    ?? execFileSync(
      'git',
      ['log', '--diff-filter=A', '--follow', '--format=%ai', '--', path],
      { encoding: 'utf8' },
    )
      .trim()
      .split(EOL)
      .pop(),
  updated: ({ updated }) =>
    updated
    ?? execFileSync('git', ['log', '-1', '--pretty=format:%ai', '--', path], {
      encoding: 'utf8',
    }).trim(),
})
