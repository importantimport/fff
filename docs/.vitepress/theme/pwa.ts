/// <reference types="vite-plugin-pwa/client" />

import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true,
  onRegisterError: (error) => console.error(error),
  onRegistered: (r) => r && setInterval(async () => await r.update(), 198_964),
})
