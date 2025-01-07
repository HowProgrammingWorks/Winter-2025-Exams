// Refactor following solution
// Sum all numbers from an array

// step 5: rename variables

'use strict';

const sum = (array) => {
  let res = 0;

  for (const elem of array) {
    const type = typeof elem;
    if (type === 'number') {
      if (array.length > 0) {
        const newSum = array[array.length - 1] + elem;
        array.push(newSum);
      }
    }
  }
  return array[array.length - 1];
};

module.exports = sum;
