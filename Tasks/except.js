'use strict';

// Step7(optional): Rewrite code into functional style for better readability:
// Use methods like reduce, filter and others

const except = (inputObject, ...exceptedKeys) =>
  Object.keys(inputObject)
    .filter((key) => !exceptedKeys.includes(key))
    .reduce((result, key) => {
      result[key] = inputObject[key];
      return result;
    }, {});

module.exports = except;
