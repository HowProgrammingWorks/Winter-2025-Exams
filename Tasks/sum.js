// Refactor following solution
// Sum all numbers from an array

// Step 7. rewrited into imperative style using intermediate identifiers and if statement

'use strict';

const sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element === 'number') {
      total += element;
    }
  }
  return total;
};

module.exports = sum;
