'use strict'

// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  let prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return '';

  prefixIndex += prefix.length;
  str = str.substring(prefixIndex);

  if (suffix) {
    const suffixIndex = str.indexOf(suffix);
    if (suffixIndex === -1) {
      return '';
    } else {
      str = str.substring(0, suffixIndex);
    }
  }

  return str;
};

module.exports = getValueBetween;