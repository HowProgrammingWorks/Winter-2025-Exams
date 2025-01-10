// Refactor following solution
// Sum all number values in dict

//Step 6
//Add empty lines between blocks

'use strict';

const count = (obj) => {
  let sum = 0;
  const values = Object.values(obj);

  for (const value of values) {
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

module.exports = count;
