// Refactor following solution
// Count words in a string

"use strict";

const counterOfWords = (str) => {
  let numberOfWords = 0;
  const arrayOfWords = str.split(" ");
  for (const word of arrayOfWords) {
    if (word === "") continue 
    numberOfWords++;
  };
  return numberOfWords;
};

module.exports = counterOfWords;
