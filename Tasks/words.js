// Refactor following solution
// Count words in a string

//Step 5
//Implement without loop, using .split()

'use strict';

const words = (string) => {
  if (string.trim() === '') return 0; //preventing array with an empty string

  const wordsArray = string.split(' ');
  const numberOfWords = wordsArray.length;
  
  return numberOfWords;
};

module.exports = words;
