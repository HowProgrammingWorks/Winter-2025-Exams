'use strict';

// Step6: Prefer arrow function instead of 'function' expression

const zipTwoArrays = (firstArray, secondArray) => {
  const result = [];
  const length = Math.min(firstArray.length, secondArray.length);
  for (let index = 0; index < length; index++) {
    const pair = [firstArray[index], secondArray[index]];
    result.push(pair);
  }
  return result;
};

module.exports = zipTwoArrays;
