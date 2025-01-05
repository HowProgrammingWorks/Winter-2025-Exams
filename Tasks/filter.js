// Step 4
// Rewrite function to functional programming style
// Improve the code by using JavaScript .filter() function

'use strict';

const filter = (array, typeName) =>
  array.filter((element) => typeof element === typeName);

module.exports = filter;
