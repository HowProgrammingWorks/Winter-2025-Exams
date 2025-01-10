// Refactor following solution
// Compare two dictionaries

// Step 8:
// Use single quotes

'use strict';

const SEPARATOR = '-';

const compare = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.join(SEPARATOR) !== keys2.join(SEPARATOR)) return false;

  for (const key of keys1) {
    if (object1[key] !== object2[key]) return false;
  }

  return true;
};

module.exports = compare;
