// Sum all number values in dict

// Step 3
// Use "arr.values" traversal instead of "arr.keys" traversal

'use strict'

const count = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  values.forEach((value) => {
    if (typeof value === 'number') sum += value;
  });
  return sum;
};

module.exports = count;
