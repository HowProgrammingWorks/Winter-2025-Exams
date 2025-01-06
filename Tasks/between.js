'use strict';
// Step 3
// Declare variables 'startIndex' and 'endIndex' instead 'index'
// Simplify and remove unnecessary code

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix) + 1;
  const endIndex = str.indexOf(suffix);
  if (startIndex === -1 || endIndex === -1) {
    return '';
  } else {
    str = str.substring(startIndex, endIndex);
  }
  return str;
};

module.exports = getValueBetween;
