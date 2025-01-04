// Sum all numbers from an array

'use strict';

const sum = (array) => {
  const sumArr = [0];
  for (const element of array) {
    const type = typeof element;
    if (type === 'number') {
      if (sumArr.length > 0) {
        const newSum = sumArr[sumArr.length - 1] + element;
        sumArr.push(newSum);
      }
    }
  }
  return sumArr[sumArr.length - 1];
};

module.exports = sum;
