'use strict';

// Step6: Improve naming of identifiers

const countTypes = (array) => {
  const result = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of array) {
    const type = typeof item;
    result[type]++;
  }
  return result;
};

module.exports = countTypes;
