import {
  cancel,
  intro,
  isCancel,
  outro,
  select,
} from '@clack/prompts'
import minimist from 'minimist'
import color from 'picocolors'

import { netlifyCMS } from './netlify-cms'

const main = async () => {
  // eslint-disable-next-line no-console
  console.clear()

  intro(color.black(color.bgCyan(' create-fff ')))

  const argv: Argv = minimist(process.argv.slice(2))

  const type = argv._[0] ?? await select({
    message: 'Choose what you need to create:',
    options: [
      {
        hint: 'config.yml',
        label: 'Netlify CMS Config (WIP)',
        value: 'netlify-cms',
      },
      {
        hint: 'contentlayer.config.ts',
        label: 'Contentlayer Schema (TODO)',
        value: 'contentlayer',
      },
    ],
  })

  if (isCancel(type)) {
    cancel('Operation cancelled')
    return process.exit(0)
  }

  /* eslint-disable no-fallthrough */
  switch (type) {
    case 'netlify-cms':
    case 'decap-cms': {
      await netlifyCMS(argv).catch(console.error)
      process.exit(0)
    }
    default: {
      outro(type as string)
      process.exit(0)
    }
  }
  /* eslint-enable no-fallthrough */
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch(console.error)
