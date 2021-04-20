module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'require-jsdoc': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'max-len': [2, {'code': 100, 'tabWidth': 4, 'ignoreUrls': true}],
  },
};
