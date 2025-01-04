// Sum all numbers from an array

'use strict';

const k = (sum = function (s = () => {}) {
  const sum = [0];
  const k = 5;
  for (const i of s) {
    const t = typeof i;
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
});

module.exports = sum;
