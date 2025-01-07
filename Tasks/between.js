'use strict';
// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  let prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    const suffixIndex = prefixIndex + prefix.length;
    inputString = inputString.substring(suffixIndex);
    if (suffix) {
      prefixIndex = inputString.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        inputString = inputString.substring(0, prefixIndex);
      }
    }
  }
  return inputString;
};

module.exports = getValueBetween;
