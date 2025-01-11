// Refactor following solution
// Compare two dictionaries
"use strict";

const compare = (firstValues, secondValues) => {
  const a = Object.keys(firstValues);
  const b = Object.keys(secondValues);
  if (a.join("-") !== b.join("-")) return false;
  for (let key of a) {
    if (firstValues[key] !== secondValues[key]) {
      return false;
    }
  }
  return true;
};

module.exports = compare;
