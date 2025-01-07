'use strict';
// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  i = inputString.indexOf(prefix);
  if (i === -1) return '';
  else {
    k = i + prefix.length;
    inputString = inputString.substring(k);
    if (suffix) {
      i = inputString.indexOf(suffix);
      if (i === -1) {
        return '';
      } else {
        inputString = inputString.substring(0, i);
      }
    }
  }
  return inputString;
};

module.exports = getValueBetween;
