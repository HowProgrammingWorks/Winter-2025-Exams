// Step 3
// Use another variable to not mutate the original array

'use strict';

const splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  const end = array.slice(index, len);
  return [begin, end];
};

module.exports = splitArray;
