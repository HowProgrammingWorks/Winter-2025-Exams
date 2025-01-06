// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (inputString, prefix, suffix) => {
  if (
    !inputString.includes(prefix) ||
    !inputString.includes(suffix) ||
    !prefix ||
    !suffix ||
    inputString.indexOf(prefix) > inputString.indexOf(suffix)
  )
    return "";
  let prefixIndex = inputString.indexOf(prefix);
  const startIndex = prefixIndex + prefix.length;
  inputString = inputString.substring(startIndex);
  if (suffix) {
    prefixIndex = inputString.indexOf(suffix);
    if (prefixIndex === -1) {
      return "";
    } else {
      inputString = inputString.substring(0, prefixIndex);
    }
  }
  return inputString;
};

module.exports = getvaluebetween;
