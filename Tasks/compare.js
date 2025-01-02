// Refactor following solution
// Compare two dictionaries
'use strict';

/**
 * Compares two dictionaries (objects) for equality.
 *
 * @param {Object} firstDict - The first dictionary to compare.
 * @param {...Object} parametersList - A list of additional dictionaries to compare. The first object in this list is treated as the second dictionary.
 * @returns {boolean} - Returns `true` if both dictionaries have the same keys in the same order and corresponding values, otherwise `false`.
 * @throws {TypeError} - Throws if either `firstDict` or the first object in `parametersList` is not a non-null object.
 */
// const compareDictionaries = (firstDict, ...parametersList) => {
//   if (
//     typeof firstDict !== 'object' || firstDict === null ||
//     parametersList.length === 0 ||
//     typeof parametersList[0] !== 'object' || parametersList[0] === null
//   ) {
//     throw new TypeError('Both arguments must be non-null objects');
//   }
//
//   const secondDict = parametersList[0];
//   const firstKeys = Object.keys(firstDict);
//   const secondKeys = Object.keys(secondDict);
//
//   if (firstKeys.length !== secondKeys.length) return false;
//
//   for (let i = 0; i < firstKeys.length; i++) {
//     const key1 = firstKeys[i];
//     const key2 = secondKeys[i];
//
//     if (key1 !== key2 || firstDict[key1] !== secondDict[key2]) {
//       return false;
//     }
//   }
//
//   return true;
// };


/**
 * Compares two dictionaries (objects) for equality, including key order.
 *
 * @param {Object} firstDict - The first dictionary to compare.
 * @param {Object} secondDict - The second dictionary to compare.
 * @returns {boolean} - Returns `true` if both dictionaries have the same keys in the same order and corresponding values, otherwise `false`.
 * @throws {TypeError} - Throws if either `firstDict` or `secondDict` is not a non-null object.
 */
const compareDictionaries = (firstDict, secondDict) => {
  if (
    typeof firstDict !== 'object' || firstDict === null ||
    typeof secondDict !== 'object' || secondDict === null
  ) {
    throw new TypeError('Both arguments must be non-null objects');
  }

  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  if (firstKeys.length !== secondKeys.length) return false;

  for (let i = 0; i < firstKeys.length; i++) {
    const key1 = firstKeys[i];
    const key2 = secondKeys[i];

    if (key1 !== key2 || firstDict[key1] !== secondDict[key2]) {
      return false;
    }
  }

  return true;
};


module.exports = compareDictionaries;
