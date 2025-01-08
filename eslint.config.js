'use strict';

const eslintConfig = require('eslint-config-metarhia');
const rules = {
  'no-undef': 'warn',
  'linebreak-style': 'off',
  quotes: 'off',
  'comma-dangle': 'off',
  'eol-last': 'off',
  'consistent-return': 'off',
};
module.exports = [...eslintConfig, { rules }];
