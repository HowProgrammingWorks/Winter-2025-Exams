/**
 * Reverses an array without using the built-in reverse() method.
 * @param {Array} inputArray - The array to reverse
 * @returns {Array} A new array with elements in reverse order
 */
const reverseArray = (inputArray) => {
  // Create a copy to avoid mutating the input
  const arrayLength = inputArray.length;
  const result = new Array(arrayLength);
  
  // Iterate through the array once, placing elements in reverse order
  for (let i = 0; i < arrayLength; i++) {
      result[i] = inputArray[arrayLength - 1 - i];
  }
  
  return result;
};

// Use CommonJS export
// eslint-disable-next-line no-undef
module.exports = reverseArray;
