import {
  intro,
  outro,
  select,
  isCancel,
  cancel,
} from '@clack/prompts'
import color from 'picocolors'

import { netlifyCMS } from './netlify-cms'

const main = async () => {
  console.clear()
  
  intro(color.black(color.bgCyan(' create-fff ')))

  const type = await select({
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
      await netlifyCMS()
      process.exit(0)
    default:
      outro(type as string)
      process.exit(0)
  }
}

main().catch(console.error)
