'use strict';
// Generate int array from given range

// Step 6
// Modify the logic for adding numbers to 'result'

const getRangeArray = (first, last) => {
  let result = [];
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
};

module.exports = getRangeArray;
