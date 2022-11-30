import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { Processor, TransformCallback } from 'unified'
import type { Node } from 'unist'
import * as presets from './presets'
import * as autofill from './autofill'
import { strict } from './strict'

type RemarkFFFPresetValue = string | ((fm: Frontmatter) => unknown)

export type RemarkFFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: RemarkFFFPresetValue
}

export type RemarkFFFOptions = {
  target: 'mdsvex' | 'astro'
  presets: (string | RemarkFFFPreset)[]
  autofill?: {
    provider: 'fs' | 'git'
    path?: string | ((path: string) => string)
  }
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

type Transformer<Input extends Node = Node, Output extends Node = Input> = (
  node: Input,
  file: File,
  next: TransformCallback<Output>
) => Promise<Output | undefined | void> | Output | Error | undefined | void

type Plugin<
  PluginParameters extends any[] = any[],
  Input = Node,
  Output = Input
> = (
  this: Input extends Node
    ? Output extends Node
      ? // This is a transform, so define `Input` as the current tree.
        Processor<void, Input>
      : // Compiler.
        Processor<void, Input, Input, Output>
    : Output extends Node
    ? // Parser.
      Processor<Output, Output>
    : // No clue.
      Processor,
  ...settings: PluginParameters
) => // If both `Input` and `Output` are `Node`, expect an optional `Transformer`.
Input extends Node
  ? Output extends Node
    ? Transformer<Input, Output> | void
    : void
  : void

type Frontmatter = FFFFlavoredFrontmatter & {
  [key: string]: unknown
}

type File =
  | /** MDsveX */ {
      filename: string
      path: never
      data: {
        fm: Frontmatter
        astro: never
      }
    }
  | /** Astro */ {
      filename: never
      path: string
      data: {
        fm: never
        astro: {
          frontmatter: Frontmatter
        }
      }
    }

const remarkFFF: Plugin<[RemarkFFFOptions]> =
  (options = { presets: ['hugo', 'legacy'], target: 'mdsvex' }) =>
  (_tree, file) => {
    const path = file.filename ?? file.path
    let fm = {
      ...(options.target === 'mdsvex'
        ? file.data.fm
        : file.data.astro.frontmatter),
    }
    ;[
      ...options.presets,
      ...(options.autofill?.provider
        ? [
            autofill[options.autofill.provider](
              options.autofill.path
                ? options.autofill.path instanceof Function
                  ? options.autofill.path(path)
                  : autofill.path[options.autofill.path](path)
                : file.filename
            ),
          ]
        : []),
      ...(options.strict ? [strict(options.strict)] : []),
    ].forEach((preset: string | RemarkFFFPreset) =>
      Object.entries<RemarkFFFPresetValue>(
        preset instanceof Object ? preset : presets[preset]
      ).forEach(
        ([output, input]) =>
          (fm = {
            ...fm,
            [output]:
              input instanceof Function ? input(fm) : fm[input] ?? fm[output],
          })
      )
    )
    if (options.target === 'mdsvex') file.data.fm = fm
    else if (options.target === 'astro') file.data.astro!.frontmatter = fm
  }

export default remarkFFF
