import type { FFFFlavoredFrontmatter } from '../types'

/**
 * FFF Flavor Transform Preset Value
 * @public
 */
export type FFFTransformPresetValue = string | ((fm: FFFFlavoredFrontmatter & { [key: string]: unknown }) => unknown)

/**
 * Flavor Transform Preset
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#ffftransformpreset}
 */
export type FFFTransformPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFTransformPresetValue
}

/**
 * Flavor Transform Preset (Reverse)
 * @beta
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#ffftransformpresetreverse}
 */
export type FFFTransformPresetReverse = {
  [key: string]: FFFTransformPresetValue
}

/**
 * Flavor Transform
 * @public
 * @param fm - Input Frontmatter
 * @param presets - FFFTransformPreset Array
 * @returns - FFF Flavored Frontmatter
 * @see {@link https://fff.js.org/concepts/flavor-transform.html}
 */
export const transform = (
  fm: FFFFlavoredFrontmatter & { [key: string]: unknown },
  presets: (FFFTransformPreset | FFFTransformPresetReverse)[],
): FFFFlavoredFrontmatter & { [key: string]: unknown } => {
  for (const preset of presets) {
    for (const [output, input] of Object.entries<FFFTransformPresetValue>(preset)) {
      (fm = {
        ...fm,
        [output]:
            typeof input === 'function' ? input(fm) : fm[input] ?? fm[output],
      })
    }
  }
  return fm
}
