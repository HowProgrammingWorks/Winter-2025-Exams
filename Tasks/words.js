// Refactor following solution
// Count words in a string

// Step 6: replaced flag logic with split method, done

'use strict';

const words = (str) => {
  if (!str) return 0;

  const wordsList = str.split(' ');
  return wordsList.length;
};

module.exports = words;
