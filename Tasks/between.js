'use strict';

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  const substring = inputString.substring(startIndex);

  if (!suffix) return substring;

  const suffixIndex = substring.indexOf(suffix);
  return suffixIndex === -1 ? '' : substring.substring(0, suffixIndex);
};

module.exports = getValueBetween;
