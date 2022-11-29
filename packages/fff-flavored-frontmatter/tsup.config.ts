import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['fff.ts'],
  dts: { resolve: true },
  clean: true,
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : `.${format}`,
  }),
})
