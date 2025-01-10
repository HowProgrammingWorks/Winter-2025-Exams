// Refactor following solution
// Filter array by type name

// Step 1. Add 'use strict'
// Step 2. Use pretier
// Step 3. Improved readability
// Step 4. Avoid mutating the original array

'use strict';

const Filter = (array, type) => {
  return array.filter((item) => typeof item === type);
};

module.exports = Filter;
