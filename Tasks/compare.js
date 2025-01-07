// Refactor following solution
// Compare two dictionaries

// Step 1. Add 'use strict'
// Step 2. Better naming
// Step 3. Use pretier
// Step 4. Removed unnecessary parameters
// Step 5. Simplified logic

'use strict';

const compare = (firstValues, secondValues) => {
  const keysFirst = Object.keys(firstValues);
  const keysSecond = Object.keys(secondValues);

  if (keysFirst.length !== keysSecond.length) return false;
  if (!keysFirst.every((key, index) => key === keysSecond[index])) return false;

  return keysFirst.every((key) => firstValues[key] === secondValues[key]);
};

module.exports = compare;
