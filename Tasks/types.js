// Refactor following solution
// Count types in an array

//Step 2
//Remove unnecessary expressions
//Add dynamic type addition

'use strict';

const countTypes = (s) => {
  let types = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const i of s) {
    const type = typeof i;

    if (types[type]) {
      types[type]++;
    } else {
      types[type] = 1;
    }
  }

  return types;
};

module.exports = countTypes;
