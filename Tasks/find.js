// Refactor following solution
// Find key by value

// Step 1. Add 'use strict'
// Step 2. Use pretier
// Step 3. Variable declaration
// Step 4. Removed unnecessary operations
// Step 5. Simplified logic
// Step 6. Proper function parameters

'use strict';

const find = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = find;
