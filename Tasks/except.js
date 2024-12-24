'use strict';

// Step5: Avoid changing the original object in function

const except = (inputObject, ...exceptedKeys) => {
  const result = {};
  const keys = Object.keys(inputObject);
  keys.forEach((key) => {
    if (!exceptedKeys.includes(key)) {
      result[key] = inputObject[key];
    }
  });
  return result;
};

module.exports = except;
