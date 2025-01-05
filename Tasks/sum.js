// Step 4
// Delete the `length` condition
// Delete the `type` declaration

'use strict';

const sumNums = function (array) {
  let sum = [0];
  for (const element of array) {
    if (typeof element === 'number') {
      const new_Sum = sum[sum.length - 1] + element;
      sum.push(new_Sum);
    }
  }
  return sum[sum.length - 1];
};

module.exports = sumNums;
