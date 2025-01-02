// Refactor following solution
// Return an array without duplicates
'use strict';

const removeDuplicates = (data) => {
  const seenElements = new Set();
  return data.filter(element => {
    if (typeof element !== 'number') return false;
    if (seenElements.has(element)) {
      return false;
    } else {
      seenElements.add(element);
      return true;
    }
  });
};


module.exports = removeDuplicates;

