// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const uniqueCollection = new Set();
  data.map((element, index) => {
    if (uniqueCollection.has(element)) {
      delete data[index];
    } else {
      uniqueCollection.add(element);
    }
  });
  return data.filter (x => typeof x === 'number');
};

module.exports = distinct;
