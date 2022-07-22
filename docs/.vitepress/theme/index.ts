import { inBrowser } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

if (inBrowser) import('./pwa')

export default DefaultTheme
