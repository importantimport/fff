import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import { frontmatterPlugin } from '@mdit-vue/plugin-frontmatter'
import { fffPlugin, type MarkdownItEnv } from '../src/index'

describe('markdown-it-fff', () => {
  const md = MarkdownIt()
    .use(frontmatterPlugin, {
      grayMatterOptions: {
        excerpt: true,
        excerpt_separator: '<!-- more -->',
      },
    })
    .use(fffPlugin, {
      presets: ['hexo', 'vue'],
    })
  it(`basic`, () => {
    const src = readFileSync('test/fixture/basic.md').toString()
    const env: MarkdownItEnv = {}
    md.render(src, env)
    expect(env.frontmatter.title).toEqual('foobar')
    expect(env.frontmatter.created).toEqual(new Date('2022-11-22'))
    expect(env.frontmatter.summary).toEqual(
      '<p>Everything above <strong>more</strong> comment will be extracted as excerpt.</p>\n'
    )
  })
})
