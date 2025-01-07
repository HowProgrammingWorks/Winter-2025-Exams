// Refactor following solution
// Sum all numbers from an array

// step 3: add variable for result

'use strict';

const sum = (array) => {
  let res = 0;

  for (i of s) {
    let t = typeof i;
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
