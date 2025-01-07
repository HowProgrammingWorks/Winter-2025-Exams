"use strict";

const eslintConfig = require("eslint-config-metarhia");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...eslintConfig,
  {
    rules: {
      "no-undef": "warn",
      "linebreak-style": "off",
      "quotes": "off",
      "comma-dangle": "off",
      "eol-last": "off"
    }
  }
];"use strict";

const eslintConfig = require("eslint-config-metarhia");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...eslintConfig,
  {
    rules: {
      "no-undef": "warn",
      "linebreak-style": "off",
      "quotes": "off",
      "comma-dangle": "off",
      "eol-last": "off"
    }
  }
];