'use strict';
// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  const substring = inputString.substring(startIndex);

  if (!suffix) return substring;

  const suffixIndex = substring.indexOf(suffix);
  if (suffixIndex === -1) return '';

  return substring.substring(0, suffixIndex);
};

module.exports = getValueBetween;
