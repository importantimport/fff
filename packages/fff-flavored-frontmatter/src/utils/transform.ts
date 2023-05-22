import type { FFFFlavoredFrontmatter } from '../types'

export type FFFPresetValue = string | ((fm: FFFFlavoredFrontmatter & { [key: string]: unknown }) => unknown)

export type FFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFPresetValue
}

export const transform = (
  fm: FFFFlavoredFrontmatter & { [key: string]: unknown },
  presets: FFFPreset[]
): FFFFlavoredFrontmatter & { [key: string]: unknown } => {
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
