// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const uniqueCollection = new Set(data);
  return [...uniqueCollection]
};

module.exports = distinct;
