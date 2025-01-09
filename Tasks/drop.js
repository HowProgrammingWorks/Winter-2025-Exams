// Refactor following solution
// Delete listed keys from dictionary
'use strict';

/**
 * Removes specified keys from a dictionary.
 *
 * @param {Object} dictionary - The object from which keys will be removed.
 * @param {...string} keysToDelete - The keys to remove from the dictionary.
 * @returns {Object} - The modified dictionary with specified keys removed.
 * @throws {TypeError} - Throws if `dictionary` is not a non-null object or if any key to delete is not a string.
 */
const removeKeys = (dictionary, ...keysToDelete) => {
  if (typeof dictionary !== 'object' || dictionary === null) {
    throw new TypeError('First argument must be a non-null object');
  }

  keysToDelete.forEach((key) => {
    if (typeof key !== 'string') {
      throw new TypeError('All keys to delete must be strings');
    }
  });

  return Object.keys(dictionary).reduce((acc, key) => {
    if (!keysToDelete.includes(key)) {
      acc[key] = dictionary[key];
    }
    return acc;
  }, {});
};


module.exports = removeKeys;
