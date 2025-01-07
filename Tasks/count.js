// Refactor following solution
// Sum all number values in dict

//Step 2
//Remove unneeded parenthesis, brackets and braces

'use strict';

count = (obj) => {
  sum = 0;
  keys = Object.keys(obj);
  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });

  return sum;
};

module.exports = count;
