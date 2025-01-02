// Refactor following solution
// Return an array without duplicates
'use strict';

const removeDuplicates = (data) => {
  const seenElements = new Set();
  const uniqueData = [];
  data.forEach((element) => {
    if (!seenElements.has(element) && typeof element === 'number') {
      seenElements.add(element);
      uniqueData.push(element);
    }
  });
  return uniqueData;
};

module.exports = removeDuplicates;

