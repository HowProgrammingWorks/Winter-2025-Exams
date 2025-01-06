'use strict';
// Step 5
// Remove else branching and 'selected' variable
// Simplify code

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix) + 1;
  const endIndex = str.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  }
  return str.substring(startIndex, endIndex);
};

module.exports = getValueBetween;
