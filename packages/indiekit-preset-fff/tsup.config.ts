import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: { resolve: true },
  clean: true,
  format: ['esm'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : `.${format}`,
  }),
})
