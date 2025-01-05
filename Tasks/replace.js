// Step 5
// Improve names of identifiers

'use strict';

const replaceWords = (str, substr, newStr) => {
  let anotherStr = str;
  const index = anotherStr.indexOf(substr);
  if (!substr || index === -1) return str;
  const start = anotherStr.substring(0, index);
  anotherStr = anotherStr.substring(index + substr.length, anotherStr.length);
  const result = start + newStr + anotherStr;
  return result;
};

module.exports = replaceWords;
