// Sum all numbers from an array

'use strict';

const sum = (array) => {
  let sumValue = 0;
  for (const element of array) {
    if (typeof element === 'number') sumValue += element;
  }
  return sumValue;
};

module.exports = sum;
