// Sum all numbers from an array

'use strict';

const sum = (array) => {
  let sumValue = 0;
  const nums = array.filter((element) => typeof element === 'number');
  for (const num of nums) sumValue += num;
  return sumValue;
};

module.exports = sum;
