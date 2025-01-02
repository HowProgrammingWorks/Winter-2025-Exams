// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  if (typeof inputString !== 'string' || typeof prefix !== 'string') {
    throw new TypeError('inputString and prefix must be strings');
  }

  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const start = prefixIndex + prefix.length;
  const substringAfterPrefix = inputString.substring(start);

  if (typeof suffix !== 'string' || suffix === '') {
    return substringAfterPrefix;
  }

  const suffixIndex = substringAfterPrefix.indexOf(suffix);
  if (suffixIndex === -1) return '';

  return substringAfterPrefix.substring(0, suffixIndex);
};



module.exports = getValueBetween;
