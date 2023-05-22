import type { Frontmatter, FFFPreset, FFFPresetValue } from './types'

export const transform = (
  fm: Frontmatter,
  presets: FFFPreset[]
): Frontmatter => {
  presets.forEach((preset) =>
    Object.entries<FFFPresetValue>(preset).forEach(
      ([output, input]) =>
        (fm = {
          ...fm,
          [output]:
            input instanceof Function ? input(fm) : fm[input] ?? fm[output],
        })
    )
  )
  return fm
}
