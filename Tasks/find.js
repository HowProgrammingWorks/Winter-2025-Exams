// Refactor following solution
// Find key by value

// step 6: rewrite function to functional programming style

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop();

  return Object.entries(object).find(
    ([, propertyValue]) => propertyValue === value,
  )?.[0];
};

module.exports = find;
