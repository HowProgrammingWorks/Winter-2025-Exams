// Refactor following solution
// Return an array without duplicates

'use strict';

const duplicate = (value, count) => new Array(count > 0 ? count : 0).fill(value);

module.exports = duplicate;
