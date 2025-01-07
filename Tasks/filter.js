// Refactor following solution
// Filter array by type name

// step 4: optimize filter function logic without altering input array

'use strict';

const filter = (array, type) => {
  const result = [];

  for (const element of array) {
    if (typeof element === type) result.push(element);
  }

  return result;
};

module.exports = filter;
