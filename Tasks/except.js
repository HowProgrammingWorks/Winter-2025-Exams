'use strict';

// Step8(optional): Improve functional style:
// Use methods like fromEntries, filter and others

const except = (inputObject, ...exceptedKeys) =>
  Object.fromEntries(
    Object.entries(inputObject)
      .filter((entry) => !exceptedKeys.includes(entry[0])),
  );

module.exports = except;
