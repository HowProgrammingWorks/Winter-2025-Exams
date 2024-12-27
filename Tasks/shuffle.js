// Shuffle an array

// Step 2
//
// Remove brackets(unscramble)
'use strict'

const shuffle = (...list) => {
  const [arr] = list;
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffle;

// sort => toSorted
// Math.random = [0, 1]
// [0-1] - 0.5 => [-0.5, 0.5]