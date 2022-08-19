import type { Plugin } from 'vite'
import { defineConfig, resolveConfig } from 'vite'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'

const RebuildPWA = (): Plugin => ({
  name: 'rebuild-pwa',
  closeBundle: async () => {
    const config = await resolveConfig({}, 'build', 'production')
    const pwaPlugin: VitePluginPWAAPI = config.plugins.find(
      (i) => i.name === 'vite-plugin-pwa'
    )!.api
    if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled)
      await pwaPlugin.generateSW()
  },
})

export default defineConfig({
  plugins: [
    VitePWA({
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      includeManifestIcons: false,
      manifest: {
        id: '/',
        name: 'FFF Flavored Frontmatter',
        short_name: 'FFF',
        description: 'Yet Another Opinionated Frontmatter Variable Specs.',
        theme_color: '#fdd835',
        icons: [
          {
            src: 'glowing_star.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,js,html,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    RebuildPWA(),
  ],
})
