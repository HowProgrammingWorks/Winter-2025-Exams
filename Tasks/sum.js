// Refactor following solution
// Sum all numbers from an array

// Step 4: prefer const over let, added let

'use strict';

const sum = (arr) => {
  let res = 0;
  for (const elem of arr) {
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
