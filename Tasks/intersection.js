// Refactor following solution
// Find an intersection of two dictionaries

// Step 1. Add 'use strict'
// Step 2. Use pretier
// Step 3. Improved readability
// Step 4. Improved naming
// Step 5. Removed unnecessary blocks
// Step 6. Simplified logic

'use strict';

const intersection = (object1, object2) => {
  const result = {};

  for (const key of Object.keys(object1)) {
    if (object1[key] === object2[key]) {
      result[key] = object1[key];
    }
  }

  return result;
};

module.exports = intersection;
