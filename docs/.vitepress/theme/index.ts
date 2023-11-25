// eslint-disable-next-line import/named
import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'

import './custom.css'

if (inBrowser)
  import('./pwa')

// eslint-disable-next-line unicorn/prefer-export-from
export default DefaultTheme
