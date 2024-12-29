'use strict';

// Step5: Replace 'forEach' with 'for'
// 'for' is faster than 'forEach', has more appropriate semantics in this case

const takeKeys = (object, ...keysToTake) => {
  const existingKeys = Object.keys(object);
  for (const key of existingKeys) {
    if (!keysToTake.includes(key)) {
      delete object[key];
    }
  };
  return object;
};

module.exports = takeKeys;
