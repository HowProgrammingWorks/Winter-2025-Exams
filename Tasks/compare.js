// Refactor following solution
// Compare two dictionaries
'use strict';
const compare = (firstValues, secondValues) => {

  let firstKeys = Object.keys(firstValues);
  let secondKeys = Object.keys(secondValues);
  if (firstKeys.length !== secondKeys.length) {
    return false;
  }
  for (const key of firstKeys) {
    if (secondKeys.indexOf(key) === -1 || firstValues[key] !== secondValues[key]) {
      return false;
    }
  }
  return true;
};

module.exports = compare;
