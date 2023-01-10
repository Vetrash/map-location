module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  root: true,
  rules: {
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prefer-stateless-function': 'off',
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-console': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'react/no-unknown-property': 'off',
    'linebreak-style': 'off',
    'no-continue': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  ignorePatterns: ['build/', 'dist/', 'docs/', 'server/', 'node_modules/'],
};
