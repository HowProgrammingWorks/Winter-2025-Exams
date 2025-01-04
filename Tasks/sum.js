// Sum all numbers from an array

'use strict';

const sum = (array) => {
  const nums = array.filter((element) => typeof element === 'number');
  return nums.reduce((acc, num) => (acc += num), 0);
};

module.exports = sum;
