import { outro, confirm, isCancel, cancel, text, note } from '@clack/prompts'
import { yellow } from 'picocolors'
import { access, constants, mkdir, writeFile } from 'node:fs/promises'
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

  await access(path, constants.F_OK)
    .then(async () => {
      const check = await confirm({
        message: yellow(
          `${path} already has files. Do you want to continue?`
        ),
      })
      if (isCancel(check) || check === false) {
        cancel('Operation cancelled')
        return process.exit(0)
      }
    })
    .catch(() => {})

  let { options } = await import('./lib/netlify-cms/options')

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

  // console.log(JSON.stringify(await config(options as Options), null, 2))

  await mkdir(parse(path).dir, { recursive: true })
    .then(
      async () =>
        await writeFile(
          path,
          /** @see {@link https://github.com/decaporg/decap-cms/issues/1342} */
          stringify(await config(options as Options), { aliasDuplicateObjects: false })
        )
    )
    .catch(console.error)

  note(`FFF Flavored Frontmatter\nVersion ${version}`)
  outro("You're all set! ")
}
