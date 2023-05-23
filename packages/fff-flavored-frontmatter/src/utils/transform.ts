import type { FFFFlavoredFrontmatter } from '../types'

/**
 * FFF Flavor Transform Preset Value
 * @public
 */
export type FFFTransformPresetValue = string | ((fm: FFFFlavoredFrontmatter & { [key: string]: unknown }) => unknown)

/**
 * Flavor Transform Preset
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#fff-transform-preset}
 */
export type FFFTransformPreset = {
  [key in keyof FFFFlavoredFrontmatter]: FFFTransformPresetValue
}

/**
 * Flavor Transform Preset (Reverse)
 * @public
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#reverse}
 */
export type FFFTransformPresetReverse = {
  [key: string]: FFFTransformPresetValue
}

/**
 * Flavor Transform Function
 * @public
 * @param fm - Input Frontmatter
 * @param presets - FFFTransformPreset Array
 * @returns - FFF Flavored Frontmatter
 * @see {@link https://fff.js.org/concepts/flavor-transform.html#transform-function}
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
