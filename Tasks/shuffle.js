// Shuffle an array

// Step 1
//
// Add 'use strict';
// Fix formatting
// Prefer const
// Improve naming
'use strict'

const shuffle = (...list) => {
  const [arr] = list;
  arr.sort(() => Math.random() - 0.5);
  {
    return arr;
  }
};

module.exports = shuffle;

// sort => toSorted
// Math.random = [0, 1]
// [0-1] - 0.5 => [-0.5, 0.5]