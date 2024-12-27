// Shuffle an array

// Step 4
// Remove list copying
// Replace "arr.sort" with "arr.toSorted"
'use strict'

const shuffle = (list) => {
  return list.toSorted(() => Math.random() - 0.5);
};

module.exports = shuffle;ё

// sort => toSorted
// Math.random = [0, 1]
// [0-1] - 0.5 => [-0.5, 0.5]