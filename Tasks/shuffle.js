// Shuffle an array

// Step 3
//
// Remove rest operator
// Remove unpack operator
// Add list copying

'use strict'

const shuffle = (list) => {
  const arr = list.slice();
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;

// sort => toSorted
// Math.random = [0, 1]
// [0-1] - 0.5 => [-0.5, 0.5]