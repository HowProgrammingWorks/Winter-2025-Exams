// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (inputString, prefix, suffix) => {
  if (!inputString.includes(prefix) || !inputString.includes(suffix)) {
    return '';
  }
  const prefixIndex = inputString.indexOf(prefix);
  const suffixIndex = inputString.indexOf(suffix);
  if (prefixIndex >= suffixIndex) {
    return '';
  }
  const partsAfterPrefix = inputString.split(prefix);
  const partAfterPrefix = partsAfterPrefix[1];
  const partsBeforeSuffix = partAfterPrefix.split(suffix);
  return partsBeforeSuffix[0];
};

module.exports = getvaluebetween;
