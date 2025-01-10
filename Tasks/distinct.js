// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => [...new Set(data)];

module.exports = distinct;
