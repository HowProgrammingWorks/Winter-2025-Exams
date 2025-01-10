// Refactor following solution
// Return an array without duplicates

// Step 1. Add 'use strict'
// Step 2. Better naming
// Step 3. Use pretier
// Step 4. Logic simplification

'use strict';

const distinct = (data) => {
  const uniqueValues = [];
  for (let i = 0; i < data.length; i++) {
    if (!uniqueValues.includes(data[i])) {
      uniqueValues.push(data[i]);
    }
  }
  return uniqueValues;
};

module.exports = distinct;
