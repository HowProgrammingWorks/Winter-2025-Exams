// Sum all numbers from an array

'use strict';

const sum = (array) => {
  const sumArr = [0];
  for (const element of array) {
    if (typeof element === 'number') {
      const newSum = sumArr[sumArr.length - 1] + element;
      sumArr.push(newSum);
    }
  }
  return sumArr[sumArr.length - 1];
};

module.exports = sum;
