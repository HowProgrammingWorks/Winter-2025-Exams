// Refactor following solution
// Count types in an array

// Step 4
// Add condition

'use strict';

const countTypes = (arr) => {
  const typesCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const item of arr) {
    const itemType = typeof item;
    if (typesCounts.hasOwnProperty(itemType)) {
      typesCounts[itemType]++;
    }
  }
  return typesCounts;
};

module.exports = countTypes;
