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

  const seenElements = new Set();
  return data.filter(element => {
    if (typeof element !== 'number') return false;
    if (seenElements.has(element)) {
      return false;
    } else {
      seenElements.add(element);
      return true;
    }
  });
};


module.exports = removeDuplicates;

