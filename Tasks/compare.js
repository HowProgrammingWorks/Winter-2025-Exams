'use strict';


// Refactor following solution
// Compare two dictionaries

const compare = (firstValues, secondValues) => {
  const keys1 = Object.keys(firstValues);
  const keys2 = Object.keys(secondValues);

  if (keys1.length !== keys2.length) return false;
  
  for (let i=0; i < keys1.length; i++) {
    const key = keys1[i];
    if (key !== keys2[i] || firstValues[key] !== secondValues[key]) {
    return false;
    }
  }

  return true;
};

module.exports = compare;
