// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';
  else {
    const start = prefixIndex + prefix.length;
    let resultString = inputString.substring(start);
    if (suffix) {
      const suffixIndex = resultString.indexOf(suffix);
      if (suffixIndex === -1) {
        return '';
      } else {
        resultString = resultString.substring(0, suffixIndex);
      }
    }
    return resultString;
  }
};


module.exports = getValueBetween;
