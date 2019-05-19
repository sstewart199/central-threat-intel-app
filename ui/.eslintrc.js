
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
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
    'jsx-a11y/label-has-for': 1,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-one-expression-per-line': 0,
    'react/no-string-refs': 0,
    'react/require-default-props': 1,
    'react-hooks/rules-of-hooks' : 'error',
    'react-hooks/exhaustive-deps' : 0,
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
  plugins: ['import', 'react', 'prettier', 'security', 'react-hooks'],
  settings: {
    'import/ignore': ['.scss$'],
    'import/resolver': {
      node: {
        paths: ['src', 'pages'],
      }
    },
  },
};
