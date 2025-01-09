// Refactor following solution
// Return an remove without listed values

// Step 5. rewrite function's body to functional style

'use strict';

const skip = (arr, ...remove) =>
  arr.filter((element) => !remove.includes(element));

module.exports = skip;
