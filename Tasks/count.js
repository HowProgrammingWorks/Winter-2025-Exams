// Refactor following solution
// Sum all number values in dict

// Step 1. Add 'use strict'
// Step 2. Use pretier and improve readability
// Step 3. Removed unnecessary constructs
// Step 4. Declared variables properly

'use strict';

const count = (obj) => {
  let sum = 0;

  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  }

  return sum;
};

module.exports = count;
