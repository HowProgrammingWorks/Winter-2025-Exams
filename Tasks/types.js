// Refactor following solution
// Count types in an array

//Step 3
//Improve naming

'use strict';

const countTypes = (arr) => {
  let types = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of arr) {
    const type = typeof item;

    if (types[type]) {
      types[type]++;
    } else {
      types[type] = 1;
    }
  }

  return types;
};

module.exports = countTypes;
