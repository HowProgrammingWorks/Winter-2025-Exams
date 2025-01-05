// Step 3
// Improve the names of identifiers

'use strict';

const sumNums = function (array) {
  let sum = [0];
  for (const element of array) {
    let type = typeof element;
    if (type === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + element;
        sum.push(new_Sum);
      }
    }
  }
  return sum[sum.length - 1];
};

module.exports = sumNums;
