import type { FFFFlavoredFrontmatter } from '../types'

export type FFFPresetValue = string | ((fm: FFFFlavoredFrontmatter & { [key: string]: unknown }) => unknown)

export type FFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFPresetValue
}

export const transform = (
  fm: FFFFlavoredFrontmatter & { [key: string]: unknown },
  presets: FFFPreset[],
): FFFFlavoredFrontmatter & { [key: string]: unknown } => {
  for (const preset of presets) {
    for (const [output, input] of Object.entries<FFFPresetValue>(preset)) {
      (fm = {
        ...fm,
        [output]:
            typeof input === 'function' ? input(fm) : fm[input] ?? fm[output],
      })
    }
  }

  return fm
}
