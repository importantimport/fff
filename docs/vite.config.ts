import type { Plugin } from 'vite'
import { defineConfig, resolveConfig } from 'vite'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'

const RebuildPWA = (): Plugin => ({
  // @ts-ignore
  name: 'rebuild-pwa',
  closeBundle: async () => {
    const config = await resolveConfig({}, 'build', 'production')
    const pwaPlugin: VitePluginPWAAPI = config.plugins.find(
      // @ts-ignore
      (i) => i.name === 'vite-plugin-pwa'
      // @ts-ignore
    )?.api
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
            sizes: '48x48 96x96 128x128 144x144 150x150 192x192 256x256 384x384 512x512 1024x1024',
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
