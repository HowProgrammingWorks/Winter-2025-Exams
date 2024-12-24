'use strict';

// Step6: Replace 'forEach' with 'for'
// 'for' is faster than 'forEach', has more appropriate semantics in this case

const except = (inputObject, ...exceptedKeys) => {
  const result = {};
  const keys = Object.keys(inputObject);
  for (const key of keys) {
    if (!exceptedKeys.includes(key)) {
      result[key] = inputObject[key];
    }
  };
  return result;
};

module.exports = except;
