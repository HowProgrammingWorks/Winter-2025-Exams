// Refactor following solution
// Copy all values from dict except listed

// Step 1. Add 'use strict'
// Step 2. Use pretier
// Step 3. Changed keys
// Step 4. Removed unnecessary operations
// Step 5. Simplified logic

'use strict';

const EXCEPT = (incomingValues, ...excludedKeys) => {
  const result = {};

  for (const key of Object.keys(incomingValues)) {
    if (!excludedKeys.includes(key)) {
      result[key] = incomingValues[key];
    }
  }

  return result;
};

module.exports = EXCEPT;
