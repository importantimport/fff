/* eslint-disable unicorn/prevent-abbreviations */
import { readFileSync } from 'node:fs'

import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { hugo, mditVue } from 'fff-transform-presets'
import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'

import { fffPlugin } from '../src/index'
import type { MarkdownItEnv } from '../src/lib/types'

describe('markdown-it-fff', () => {
  const md = MarkdownIt()
    .use(frontmatterPlugin, {
      grayMatterOptions: {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      },
    })
    .use(fffPlugin, {
      presets: [hugo, mditVue],
    })
  it('basic', () => {
    const src = readFileSync('test/fixture/basic.md').toString()
    const env: MarkdownItEnv = {}
    md.render(src, env)
    expect(env.frontmatter?.title).toEqual('foobar')
    expect(env.frontmatter?.created).toEqual(new Date('2022-11-22'))
    expect(env.frontmatter?.summary).toEqual(
      '<p>Everything above <strong>more</strong> comment will be extracted as excerpt.</p>\n',
    )
  })
})
/* eslint-enable unicorn/prevent-abbreviations */
