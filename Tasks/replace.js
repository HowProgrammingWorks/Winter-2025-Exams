// Step 6
// Improve methods
// Remove String methods .indexOf() and .substring()
// Use String.split() and Array methods .indexOf(), .join()

'use strict';

const replaceWords = (str, substr, newStr) => {
  const words = str.split(' ');
  const index = words.indexOf(substr);
  if (!substr || index === -1) return str;
  words[index] = newStr;
  return words.join(' ');
};

module.exports = replaceWords;
