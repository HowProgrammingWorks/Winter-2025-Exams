// Refactor following solution
// Return an array without duplicates

'use strict'

const distinct = (data) => {
  const uniqueCollection = new Set();
  let index = 0;
  data.forEach((element) => {
    if (uniqueCollection.has(element)) {
      delete data[index];
    } else {
      uniqueCollection.add(element);
    }
    index++;
  });
  return data.filter (x => typeof x === 'number');
};

module.exports = distinct;
