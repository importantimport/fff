import type { FFFFlavoredFrontmatter } from 'fff-flavored-frontmatter'
import type { Processor, TransformCallback } from 'unified'
import type { Node } from 'unist'
import * as presets from './presets'

export type RemarkFFFOptions = {
  target: 'mdsvex' | 'astro'
  presets: (string | RemarkFFFPreset)[]
  strict?: {
    media?: {
      type?: 'string' | 'object'
      array?: boolean
    }
  }
}

export type RemarkFFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: string | ((fm: Frontmatter) => unknown)
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

type File = {
  data:
    | {
        /** MDsveX */
        fm: Frontmatter
        astro: never
      }
    | {
        fm: never
        /** Astro */
        astro: {
          frontmatter: Frontmatter
        }
      }
}

const remarkFFF: Plugin<[RemarkFFFOptions]> =
  (options = { presets: ['hugo'], target: 'mdsvex' }) =>
  (_tree, file) => {
    let fm = {
      ...(options.target === 'mdsvex'
        ? file.data.fm
        : file.data.astro.frontmatter),
    }
    ;[
      ...options.presets,
      ...(options.strict ? [presets['strict'](options.strict)] : []),
    ].forEach((preset) =>
      Object.entries(
        preset instanceof Object ? preset : (presets[preset] as RemarkFFFPreset)
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
