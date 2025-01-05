// Step 2
// Change the name of the function to camelCase

'use strict';

const splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const len = array.length;
  array = array.slice(index, len);
  return [begin, array];
};

module.exports = splitArray;
