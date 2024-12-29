'use strict';

// Step6: Avoid changing the original object in function

const takeKeys = (object, ...keysToTake) => {
  const result = {};
  for (const key of keysToTake) {
    if (key in object) {
      result[key] = object[key];
    }
  };
  return result;
};

module.exports = takeKeys;
