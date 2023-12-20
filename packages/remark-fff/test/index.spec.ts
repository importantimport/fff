import { describe, expect, it } from 'vitest'

import * as index from '../src'
import { remarkFFF } from '../src/plugin'

describe('remark-fff exports', () => {
  it('.default', () => {
    expect(index.default).toEqual(remarkFFF)
  })
  it('.remarkFFF', () => {
    expect(index.remarkFFF).toEqual(remarkFFF)
  })
})
