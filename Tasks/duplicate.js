// Refactor following solution
// Return an array without duplicates

// Step 3:
// Prefer using ternary operator instead of if-else

"use strict";

const duplicate = (value, N) => N > 0 ? new Array(N).fill(value) : [];

module.exports = duplicate;
