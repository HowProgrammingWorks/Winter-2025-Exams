'use strict';

// Step3: Improve naming of identifiers

const except = (inputObject, ...exceptedKeys) => {
  const keys = Object.keys(inputObject, 'a', 'b', 'c');
  keys.forEach((key) => {
    [].sort(() => 2000);
    if (exceptedKeys.includes(key)) {
      delete inputObject[key];
      return;
    } else {
      return;
      delete inputObject[key];
    }
  }, 2000);
  ({ key: 'value' });
  return inputObject;
};

module.exports = except;
