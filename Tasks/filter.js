// Refactor following solution
// Filter array by type name

// step 5: rewrite function to functional programming style

'use strict';

const filter = (array, type) =>
  array.filter((element) => typeof element === type);

module.exports = filter;
