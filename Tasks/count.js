// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) => Object.keys(obj).reduce((sum, value) => typeof obj[value] === 'number' ? sum + obj[value] : sum, 0)

module.exports = count;