'use strict';

// Step7(optional): Rewrite code into functional style for better readability:
// Use methods like reduce, filter and others

const countValues = (object) =>
  Object.values(object)
    .filter((value) => typeof value === 'number')
    .reduce((sum, value) => sum + value, 0);

module.exports = countValues;
