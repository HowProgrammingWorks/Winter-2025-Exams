// Refactor following solution
// Return an array without duplicates
'use strict';

/**
 * Removes duplicate numeric values from an array.
 *
 * @param {Array} data - The array to remove duplicates from.
 * @returns {Array} - A new array containing only unique numeric values.
 * @throws {TypeError} - Throws if `data` is not an array.
 */
const removeDuplicates = (data) => {
  if (!Array.isArray(data)) {
    throw new TypeError('Input must be an array');
  }

  return [...new Set(data.filter((element) => typeof element === 'number'))];
};

module.exports = removeDuplicates;
