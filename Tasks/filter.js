'use strict';

// Step7: Rewrite into functional style with the help of .filter

const filterArray = (array, type) =>
  array.filter((item) => typeof item === type);

module.exports = filterArray;
