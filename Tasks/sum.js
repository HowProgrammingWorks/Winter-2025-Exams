// Step 1
// Add 'use strict' and variable declarations
// Delete the variable `k`, which is used for the function

'use strict';

const sum = function (s = () => {}) {
  let sum = [0];
  let k = 5;
  for (const i of s) {
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
  sum.push(sum.length - 1);
};

module.exports = sum;
