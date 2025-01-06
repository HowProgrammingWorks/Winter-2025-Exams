'use strict';
// Step 4
// Declare variable 'selected'
// Use 'selected' to not mutate incoming parameters

const getValueBetween = (str, prefix, suffix) => {
  let selected;
  const startIndex = str.indexOf(prefix) + 1;
  const endIndex = str.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  } else {
    selected = str.substring(startIndex, endIndex);
  }
  return selected;
};

module.exports = getValueBetween;
