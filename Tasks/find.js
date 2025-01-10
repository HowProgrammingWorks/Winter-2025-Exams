// Refactor following solution
// Find key by value

'use strict'

const find = (object, ...rest) => {
  const value = rest[0];

  return Object.entries(object).find(([, objValue]) => objValue === value)?.[0];  
};

module.exports = find;
