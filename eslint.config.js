// export { default } from '@importantimport/eslint-config'
import { createFullConfig } from '@importantimport/eslint-config'

// import ii from '@importantimport/eslint-config'

// export default [
//   ...ii,
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parserOptions: {
//         project: ['./tsconfig.json', './tsconfig.node.json'],
//       },
//     },
//   },
// ]
export default await createFullConfig({ ts: true }, {
  rules: {
    'n/no-extraneous-import': 'off',
    'n/no-process-exit': 'off',
    'unicorn/no-process-exit': 'off',
  },
})
