'use strict';
// Step 2
// Improve naming
// Replace 'k' with 'index'

const getValueBetween = (str, prefix, suffix) => {
  let index = str.indexOf(prefix);
  if (index === -1) return '';
  else {
    const k = index + prefix.length;
    str = str.substring(k);
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
