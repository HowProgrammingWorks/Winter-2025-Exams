// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const start = prefixIndex + prefix.length;
  const substringAfterPrefix = inputString.substring(start);

  if (suffix) {
    const suffixIndex = substringAfterPrefix.indexOf(suffix);
    if (suffixIndex === -1) {
      return '';
    }
    return substringAfterPrefix.substring(0, suffixIndex);
  }

  return substringAfterPrefix;
};



module.exports = getValueBetween;
