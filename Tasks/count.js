// Refactor following solution
// Sum all number values in dict
'use strict';

/**
 * Sums all numeric values in an object.
 *
 * @param {Object} sourceObj - The object to sum numeric values from.
 * @returns {number} - The total sum of numeric values.
 * @throws {TypeError} - Throws if `sourceObj` is not a non-null object.
 */
const sumNumericValues = (sourceObj) => {
  if (typeof sourceObj !== 'object' || sourceObj === null) {
    throw new TypeError('Argument must be a non-null object');
  }

  return Object.keys(sourceObj).reduce((accumulator, key) => {
    const value = sourceObj[key];
    return typeof value === 'number' ? accumulator + value : accumulator;
  }, 0);
};

module.exports = sumNumericValues;

