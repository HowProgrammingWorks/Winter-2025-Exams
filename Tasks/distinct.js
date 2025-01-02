// Refactor following solution
// Return an array without duplicates
'use strict';

removeDuplicates = (data) => {
  seenElements = new Set();
  index = 0;
  data.forEach((element) => {
    if (seenElements.has(element)) {
      delete data[index];
    } else {
      seenElements.add(element);
    }
    index++;
  });
  return data.filter
  (x => typeof x === 'number');
};

module.exports = removeDuplicates;

