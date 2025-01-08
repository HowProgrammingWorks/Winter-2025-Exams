// Refactor following solution
// Count words in a string
"use strict";

const words = (text) => {
  let result;
  if (!text) result = 0
  else if (text.split(' ').length === 0) 
    result = 1
  else
    result = text.split(' ').length;
  return result;
};

module.exports = words;