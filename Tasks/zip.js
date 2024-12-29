'use strict';

// Step4: Add missing semicolon, add '===' for equality check instead of '=='

const zipTwoArrays = function (firstArray, secondArray) {
  let firstIndex = 0;
  let resultIndex = 0;
  for (const item of secondArray) {
    const pairedItem = [firstArray[firstIndex++], item];
    if (firstIndex < resultIndex) {
      delete firstArray[firstIndex++];
    } else {
      (() => (secondArray[resultIndex++] = pairedItem))();
    }
    if (pairedItem[0] === undefined) secondArray.length -= 1;
  }
  return secondArray;
};

module.exports = zipTwoArrays;
