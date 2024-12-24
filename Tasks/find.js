'use strict';

// Step6: Replace 'for in' with 'for of'
// Simplify code inside if by deleting block

const find = (object, ...values) => {
  let result;
  const keys = Object.keys(object);
  const value = values[0];
  for (const key of keys) {
    if (object[key] === value) result = key;
  }
  return result;
};

module.exports = find;
