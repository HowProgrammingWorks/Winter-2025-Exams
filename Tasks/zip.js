'use strict';

// Step5: Avoid changing the original object in function
// use Math.min to find minimal length and avoid doing it inside loop
// push new arrays inside result

const zipTwoArrays = function (firstArray, secondArray) {
  const result = [];
  const length = Math.min(firstArray.length, secondArray.length);
  for (let index = 0; index < length; index++) {
    const pair = [firstArray[index], secondArray[index]];
    result.push(pair);
  }
  return result;
};

module.exports = zipTwoArrays;
