// Filter array by type name

// Step 3
// Don't mutate incoming parameters

'use strict';

const filter = (array, type) => {
  let newArray = [];
  for (const index in array) {
    if (typeof array[index] === type) {
      newArray.push(array[index]);
    }
  }
  return newArray;
};

module.exports = filter;