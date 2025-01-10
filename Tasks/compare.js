// Refactor following solution
// Compare two dictionaries
'use strict';
const compare = (firstValues, secondValues) => {

  const firstKeys = Object.keys(firstValues);
  const secondKeys = Object.keys(secondValues);
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  for (const key of firstKeys) {
    if (firstKeys.indexOf(key) !== secondKeys.indexOf(key) || firstValues[key] !== secondValues[key]) {
      return false;
    }
  }
  return true;
};

module.exports = compare;
