import { describe, expect, it } from 'vitest'

import * as index from '../src'
import { fffPlugin } from '../src/plugin'

describe('markdown-it-fff exports', () => {
  it('.default', () => {
    expect(index.default).toEqual(fffPlugin)
  })
  it('.fffPlugin', () => {
    expect(index.fffPlugin).toEqual(fffPlugin)
  })
})
