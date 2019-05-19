
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'plugin:import/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-webpack-loader-syntax': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'security/detect-object-injection': 'warn',
    'valid-jsdoc': 2,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
  },
  plugins: ['import', 'prettier', 'security'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      }
    },
  },
};
