'use strict';

const init = require('eslint-config-metarhia');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
    ...init,
    {
        files: ['**/*.js'],
        rules: {
            'no-unused-vars': 'warn',
        },
    },
];
