// Step 3
// Simplify the filter by pushing elements with correct type

'use strict';

const filter = (array, typeName) => {
  const filteredArray = [];
  for (const element of array) {
    if (typeof element === typeName) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = filter;
