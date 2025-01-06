// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getvaluebetween = (inputString, prefix, suffix) => {
  let prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    const startIndex = prefixIndex + prefix.length;
    inputString = inputString.substring(startIndex);
    if (suffix) {
      prefixIndex = inputString.indexOf(suffix);
      if (prefixIndex === -1) {
        return '';
      } else {
        inputString = inputString.substring(0, prefixIndex);
      }
    }
  }
  return inputString;
};

module.exports = getvaluebetween;
