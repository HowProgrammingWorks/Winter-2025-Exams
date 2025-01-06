// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (inputString, prefix, suffix) => {
  let prefixIndex = inputString.indexOf(prefix);
  let suffixIndex = inputString.indexOf(suffix);
  if (
    !inputString.includes(prefix) ||
    !inputString.includes(suffix) ||
    !prefix ||
    !suffix ||
    prefixIndex > suffixIndex
  )
    return "";
    return inputString.substring(prefixIndex + 1, suffixIndex);
};

module.exports = getvaluebetween;
