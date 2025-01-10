// Refactor following solution
// Count types in an array

//Step 4
//Implement without predefined types
//but add them later, to pass the tests

'use strict';

const countTypes = (arr) => {
  const types = {};

  for (const item of arr) {
    const type = typeof item;

    if (types[type]) {
      types[type]++;
    } else {
      types[type] = 1;
    }
  }

  // Initialize missing types (number, string, boolean) with 0 if not present
  const necessaryTypes = ['number', 'string', 'boolean'];
  
  for (const type of necessaryTypes) {
    if (types[type] === undefined) {
      types[type] = 0;
    }
  };

  return types;
};

module.exports = countTypes;
