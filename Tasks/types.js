'use strict';

// Step4: Prefer arrow function instead of 'function' expression

const countTypes = (array) => {
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
