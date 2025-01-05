// Step 7
// Improve names of identifiers

'use strict';

const findLongest = (array) => {
  if (!array.length) return null;
  let result = array[0];
  for (const element of array) {
    if (element.length > result.length) {
      result = element;
    }
  }
  return result;
};

module.exports = findLongest;
