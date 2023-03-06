import { outro, confirm, isCancel, cancel, text, note } from '@clack/prompts'
import color from 'picocolors'
import fs from 'node:fs/promises'
import { parse } from 'node:path'
import { stringify } from 'yaml'
import { version } from '../package.json'
import { config } from './lib/netlify-cms/config'

export const netlifyCMS = async () => {
  const path = await text({
    message: 'Where should we create your Netlify CMS config?',
    placeholder: './public/admin/config.yml',
    validate: (value) => {
      if (!value) return 'Please enter a path.'
      if (value[0] !== '.') return 'Please enter a relative path.'
    },
  })

  if (isCancel(path)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  await fs
    .access(path, fs.constants.F_OK)
    .then(async () => {
      const check = await confirm({
        message: color.yellow(
          `${path} already has files. Do you want to continue?`
        ),
      })
      if (isCancel(check) || check === false) {
        cancel('Operation cancelled')
        return process.exit(0)
      }
    })
    .catch(() => {})

  const { options } = await import('./lib/netlify-cms/options')

  await fs
    .mkdir(parse(path).dir, { recursive: true })
    .then(
      async () =>
        await fs.writeFile(
          path,
          /** @see {@link https://github.com/decaporg/decap-cms/issues/1342} */
          stringify(await config(options), { aliasDuplicateObjects: false })
        )
    )
    .catch(console.error)

  note(`FFF Flavored Frontmatter\nVersion ${version}`)
  outro("You're all set! ")
}
