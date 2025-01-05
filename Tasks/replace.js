// Step 7
// Remove condition

'use strict';

const replaceWords = (str, substr, newStr) => {
  const words = str.split(' ');
  const index = words.indexOf(substr);
  words[index] = newStr;
  return words.join(' ');
};

module.exports = replaceWords;
