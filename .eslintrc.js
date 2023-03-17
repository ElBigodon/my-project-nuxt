module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    indent: ['error', 2, { ArrayExpression: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'default']
      }
    ],
    'vue/no-undef-properties': ['error'],
    'no-tabs': 'off'
  },
  ignorePatterns: ['**.d.ts', 'plugins/**/*.{js,ts}']
};
