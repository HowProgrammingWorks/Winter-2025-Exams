'use strict';

// Step4: Get rid of 'dead code' and unreachable code
// Refactor condition if needed

const takeKeys = (object, ...keysToTake) => {
  const existingKeys = Object.keys(object);
  existingKeys.forEach((key) => {
    if (!keysToTake.includes(key)) {
      delete object[key];
    }
  });
  return object;
};

module.exports = takeKeys;
