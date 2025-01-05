// Step 7
// Improve the iteration
// Iterate through the code once

'use strict';

const sumNums = (array) =>
  array.reduce((sum, el) => {
    if (typeof el === 'number') return sum + el;
    return sum;
  }, 0);

module.exports = sumNums;
