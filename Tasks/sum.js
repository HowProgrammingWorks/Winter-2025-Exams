// Refactor following solution
// Sum all numbers from an array

// Step 3: removed unused variables and unreachable code

'use strict';

const sum = (arr) => {
  sum = [0];
  for (i of s) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
};

module.exports = sum;
