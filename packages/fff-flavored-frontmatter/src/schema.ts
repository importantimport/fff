import type { FFFBase, FFFDateTime, FFFExtra, FFFMention } from './types.ts'

/** @internal */
export type FFFSchemaMedia = {
  /** image alternate text. */
  alt?: string
  /** the main audio for audio post. */
  audio?: string
  /** the main image for article or photo post. */
  image?: string
  /** the image for multi-photo post. */
  images?: string[]
  /** the main video for video post. */
  video?: string
}

/**
 * Type used to generate the schema.
 * It doesn't support object media due to generator limitations.
 * @example
 * ```bash
 * # generate json schema
 * npx ts-json-schema-generator --path 'packages/fff-flavored-frontmatter/src/schema.ts' --type 'FFFSchema'
 * ```
 */
export type FFFSchema = FFFBase & FFFDateTime & FFFSchemaMedia & FFFMention & FFFExtra
