const config = require('eslint-config-metarhia');

module.exports = [
    ...config,
    {
        rules: {
            'no-unused-vars': 'warn',
        },
    },
];