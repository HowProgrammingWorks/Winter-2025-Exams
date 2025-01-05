// Step 8
// Remove Array methods
// Use String method .replace(), but add previous condition

'use strict';

const replaceWords = (str, substr, newStr) => {
  if (!substr) return str;
  return str.replace(substr, newStr);
};

module.exports = replaceWords;
