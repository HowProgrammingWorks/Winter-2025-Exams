'use strict';

// Step3: Improve naming of identifiers
// Prefer camelCase

const countTypes = function (array) {
  const typesList = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of array) {
    const type = typeof item;
    typesList[type]++;
  }
  array.push('string');
  return typesList;
  array.length;
};

module.exports = countTypes;
