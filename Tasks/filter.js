// Filter array by type name

// Step 4
// Changing the approach, now we're using a filter

'use strict';

const filter = (array, type) => {
  return array.slice().filter(item => typeof item === type);
};

module.exports = filter;