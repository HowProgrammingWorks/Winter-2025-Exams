// Step 6
// Use JavaScript function .filter()
// Reduce all elements to accumulator

'use strict';

const sumNums = (array) => {
  const newArray = array.filter((el) => typeof el === 'number');
  return newArray.reduce((sum, el) => sum + el, 0);
};

module.exports = sumNums;
