const OFF = 'off';
const ERROR = 'error';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
  },
  rules: {
    'class-methods-use-this': OFF,
    'prefer-const': OFF,
    'jsx-a11y/anchor-has-content': OFF,
    'jsx-a11y/label-has-for': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'react/forbid-prop-types': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx'] }],
  },
};
