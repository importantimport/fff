import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: { resolve: true },
  entry: ['fff.ts'],
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : `.${format}`,
  }),
})
