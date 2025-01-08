'use strict';


// Refactor following solution
// Compare two dictionaries

let compare = (first_values,second_values) => {
  const keyA = Object.keys(first_values);
  const keyB = Object.keys(second_values);
  if (keyA.length !== keyB.length) return false;
  for (let i=0; i < keyA.length; i++) {
    const key = keyA[i];
    if (key !== keyB[i] || first_values[key] !== second_values[key]) return false;
  }

  return true;
};

module.exports = compare;
