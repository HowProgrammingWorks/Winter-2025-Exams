// Step 5
// Use `sum` as variable instead of array

'use strict';

const sumNums = function (array) {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'number') {
      sum += element;
    }
  }
  return sum;
};

module.exports = sumNums;
