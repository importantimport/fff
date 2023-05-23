import type { FFFFlavoredFrontmatter } from '../types'

/**
 * FFF Flavor Transform Preset Value
 * @public
 */
export type FFFPresetValue = string | ((fm: FFFFlavoredFrontmatter & { [key: string]: unknown }) => unknown)

/**
 * Flavor Transform Preset
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#fffpreset}
 */
export type FFFPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFPresetValue
}

/**
 * Flavor Transform Preset (Reverse)
 * @beta
 */
export type FFFPresetReverse = {
  [key: string]: FFFPresetValue
}

/**
 * Flavor Transform
 * @public
 * @param fm - Input Frontmatter
 * @param presets - FFFPreset Array
 * @returns - FFF Flavored Frontmatter
 * @see {@link https://fff.js.org/concepts/flavor-transform.html}
 */
export const transform = (
  fm: FFFFlavoredFrontmatter & { [key: string]: unknown },
  presets: (FFFPreset | FFFPresetReverse)[],
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
