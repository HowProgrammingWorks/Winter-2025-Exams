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
  const startIndex = prefixIndex + prefix.length;
  inputString = inputString.substring(startIndex);
  prefixIndex = inputString.indexOf(suffix);
  inputString = inputString.substring(0, prefixIndex);
  return inputString;
};

module.exports = getvaluebetween;
