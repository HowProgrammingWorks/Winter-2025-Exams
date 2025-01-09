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

  return Object.values(sourceObj)
    .filter((value) => typeof value === 'number')
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};


module.exports = sumNumericValues;
