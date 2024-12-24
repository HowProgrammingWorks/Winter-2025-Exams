'use strict';

// Step6: Use Object.values() directly instead of Object.keys()

const countValues = (object) => {
  let sum = 0;
  const values = Object.values(object);
  for (const value of values) {
    if (typeof value === 'number') sum += value;
  };
  return sum;
};

module.exports = countValues;
