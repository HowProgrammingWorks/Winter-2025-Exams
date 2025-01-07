'use strict';

// Step8(optional): Improve functional style:
// Use methods like fromEntries, filter and others

const except = (inputObject, ...exceptedKeys) =>
  Object.fromEntries(
    Object.entries(inputObject)
      .filter(([key]) => !exceptedKeys.includes(key)),
  );

module.exports = except;
