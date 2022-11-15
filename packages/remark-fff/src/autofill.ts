import type { RemarkFFFPreset } from './index'
import { execFileSync } from 'node:child_process'
import { statSync } from 'node:fs'
import { EOL } from 'node:os'

export const path = {
  urara: (path: string) => path.replace('/src/routes/', '/urara/'),
} as const

/** @alpha */
export const fs = (path: string): RemarkFFFPreset => {
  const { ctime, mtime } = statSync(path)
  return {
    created: ({ created }) => created ?? ctime,
    updated: ({ updated }) => updated ?? mtime,
  }
}

/**
 * @alpha
 * @author Jordan Webb <jordan@jordemort.dev>
 * @see {@link https://github.com/jordemort/jordemort.github.io/blob/main/src/plugins/repodates.mjs}
 */
export const git = (path: string): RemarkFFFPreset => ({
  created: ({ created }) =>
    created ??
    execFileSync(
      'git',
      ['log', '--diff-filter=A', '--follow', '--format=%ai', '--', path],
      { encoding: 'utf8' }
    )
      .trim()
      .split(EOL)
      .pop(),
  updated: ({ updated }) =>
    updated ??
    execFileSync('git', ['log', '-1', '--pretty=format:%ai', '--', path], {
      encoding: 'utf8',
    }).trim(),
})
