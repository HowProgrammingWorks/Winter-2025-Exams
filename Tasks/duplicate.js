// Refactor following solution
// Return an array without duplicates

'use strict';

const duplicate = (value, count) => Array(count > 0 ? count : 0).fill(value);

module.exports = duplicate;
