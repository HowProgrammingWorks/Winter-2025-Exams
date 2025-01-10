// Refactor following solution
// Return an array without duplicates

// Step 4:
// Rename argument

"use strict";

const duplicate = (value, n) => n > 0 ? new Array(n).fill(value) : [];

module.exports = duplicate;
