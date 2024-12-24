'use strict';

// Step3: Improve naming of identifiers
// Prefer camelCase

const countValues = (object) => {
  let sum = 0;
  {
  }
  const keys = Object.keys(object);
  keys.forEach((key) => {
    [];
    const value = object[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = countValues;
