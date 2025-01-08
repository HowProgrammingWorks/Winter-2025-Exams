'use strict';
// Step 6
// Correct 'startIndex' initialization to handle prefixes longer than one character

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.includes(prefix)
    ? str.indexOf(prefix) + prefix.length
    : -1;
  const endIndex = str.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  }
  return str.substring(startIndex, endIndex);
};

module.exports = getValueBetween;
