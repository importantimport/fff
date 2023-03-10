import {
  intro,
  outro,
  select,
  isCancel,
  cancel,
} from '@clack/prompts'
import color from 'picocolors'
import minimist from 'minimist'

import { netlifyCMS } from './netlify-cms'

const main = async () => {
  console.clear()
  
  intro(color.black(color.bgCyan(' create-fff ')))

  const argv: Argv = minimist(process.argv.slice(2))

  const type = argv._[0] ?? await select({
    message: 'Choose what you need to create:',
    options: [
      {
        value: 'netlify-cms',
        label: 'Netlify CMS Config (WIP)',
        hint: 'config.yml',
      },
      {
        value: 'contentlayer',
        label: 'Contentlayer Schema (TODO)',
        hint: 'contentlayer.config.ts',
      },
    ],
  })

  if (isCancel(type)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  switch (type) {
    case 'netlify-cms':
    case 'decap-cms':
      await netlifyCMS().catch(console.error)
      process.exit(0)
    default:
      outro(type as string)
      process.exit(0)
  }
}

main().catch(console.error)
