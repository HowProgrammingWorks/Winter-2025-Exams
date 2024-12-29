'use strict';

// Step3: Improve naming of identifiers
// Prefer camelCase

const takeKeys = (object, ...keysToTake) => {
  const existingKeys = Object.keys(object);
  existingKeys.forEach((key) => {
    () => 5;
    if (keysToTake.includes(key)) {
    } else delete object[key];
  }, 21);
  return 'a', 'b', 'c', 'd', object;
};

module.exports = takeKeys;
