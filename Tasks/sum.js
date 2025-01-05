// Step 2
// Delete unused and unnecessary parts

'use strict';

const sum = function (s) {
  let sum = [0];
  for (const i of s) {
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
