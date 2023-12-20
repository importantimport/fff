/* eslint-disable unicorn/prevent-abbreviations */
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { hexo, mditVue } from 'fff-transform-presets'
import MarkdownIt from 'markdown-it'
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

import type { MarkdownItEnv } from '../src/types'

import { fffPlugin } from '../src/index'

describe('markdown-it-fff', () => {
  const md = MarkdownIt()
    .use(frontmatterPlugin, {
      grayMatterOptions: {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      },
    })
    .use(fffPlugin, {
      presets: [hexo, mditVue],
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
