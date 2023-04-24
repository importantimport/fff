import { outro, confirm, isCancel, cancel, text, note } from '@clack/prompts'
import color from 'picocolors'
import { access, constants, mkdir, writeFile } from 'node:fs/promises'
import { parse } from 'node:path'
import { stringify } from 'yaml'
import { version } from '../package.json'
import { config } from './lib/netlify-cms/config'
import { fillOptions } from './lib/netlify-cms/options'
import * as presets from './lib/netlify-cms/presets'

export const netlifyCMS = async (argv: Argv) => {
  argv = {
    ...argv,
    ...presets[argv.preset]?.argv,
  }

  const path =
    argv['config-path'] ??
    (await text({
      message: 'Where should we create your Netlify CMS config?',
      placeholder: './public/admin/config.yml',
      validate: (value) => {
        if (!value) return 'Please enter a path.'
        if (value[0] !== '.') return 'Please enter a relative path.'
      },
    }))

  if (isCancel(path)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  await access(path, constants.F_OK)
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

  const options = await fillOptions(presets[argv.preset]?.options)

  if (options.path.includes('{{type}}')) {
    options.filter = false
  } else {
    const filter = await confirm({
      message: 'Do you want to enable post type filtering?',
      // '\nWhen not using the {{type}} folder,\nit will correctly categorize posts;\nhowever, it will cause posts that do not have a type value set to not be displayed.\nhttps://fff.js.org'
    })
    if (isCancel(filter)) {
      cancel('Operation cancelled')
      return process.exit(0)
    }
    options.filter = filter
  }

  await mkdir(parse(path).dir, { recursive: true })
    .then(
      async () =>
        await writeFile(
          path,
          /** @see {@link https://github.com/decaporg/decap-cms/issues/1342} */
          stringify(await config(options as Options), {
            aliasDuplicateObjects: false,
          })
        )
    )
    .catch(console.error)

  note(`FFF Flavored Frontmatter\nVersion ${version}`)
  outro("You're all set! ")
}
