// Step 4
// Improve iteration
// Use Object.values method instead of Object.keys
// Replace .forEach method for for...of method

'use strict';

const sumNums = (obj) => {
  let sum = 0;
  const values = Object.values(obj);
  for (const element of values) {
    if (typeof element === 'number') sum += element;
  }
  return sum;
};

module.exports = sumNums;
