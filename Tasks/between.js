'use strict';
// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  let prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  inputString = inputString.substring(startIndex);

  if (!suffix) return inputString;

  const suffixIndex = inputString.indexOf(suffix);
  if (suffixIndex === -1) return '';

  return inputString.substring(0, suffixIndex);
};

module.exports = getValueBetween;
