// Refactor following solution
// Sum all number values in dict

//Step 5
//Move expression to block for better readability
//Use Object.values instead of Object.keys

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
