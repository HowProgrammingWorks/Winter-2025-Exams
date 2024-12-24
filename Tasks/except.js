'use strict';

// Step4: Get rid of 'dead code' and unreachable code

const except = (inputObject, ...exceptedKeys) => {
  const keys = Object.keys(inputObject);
  keys.forEach((key) => {
    if (exceptedKeys.includes(key)) {
      delete inputObject[key];
      return;
    }
  });
  return inputObject;
};

module.exports = except;
