// Refactor following solution
// Extract substring between prefix and suffix

'use strict'

const getValueBetween = (str, prefix, suffix) => {
  let index = str.indexOf(prefix);
  if (index === -1) return '';
  else {
    const start = index + prefix.length;
    str = str.substring(start);
    if (suffix) {
      index = str.indexOf(suffix);
      if (index === -1) {
        return '';
      } else {
        str = str.substring(0, index);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;
