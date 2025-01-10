// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const array = data;

  return array.filter((item, index) => array.indexOf(item) === index);
};

module.exports = distinct;