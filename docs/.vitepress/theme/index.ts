// eslint-disable-next-line import/named
import { inBrowser } from 'vitepress'

import './custom.css'

if (inBrowser)
  import('./pwa')

export { default } from 'vitepress/theme'
