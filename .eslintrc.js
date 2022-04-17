module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // Ignores redundant type definitions.
    'quotes': ['error', 'double'],
    // It is convenient to leave the argument information, so leave the definition even if it is unused.
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'args': 'none'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  'ignorePatterns': [
    'webpack.config.js',
    'config-overrides.js',
    'craco.config.js'
  ],
  settings: {
    'import/resolver': {
      node:
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
    }
  }
};
