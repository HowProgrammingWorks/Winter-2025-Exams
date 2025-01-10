// Refactor following solution
// Return an array without duplicates

// Step 5:
// Use single quotes

'use strict';

const duplicate = (value, n) => n > 0 ? new Array(n).fill(value) : [];

module.exports = duplicate;
