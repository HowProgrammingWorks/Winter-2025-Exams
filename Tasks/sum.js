// Refactor following solution
// Sum all numbers from an array

// step 4: add const declarations

'use strict';

const sum = (array) => {
  let res = 0;

  for (const i of s) {
    const t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  return sum[sum.length - 1];
};

module.exports = sum;
