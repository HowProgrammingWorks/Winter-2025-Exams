// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  let index = str.indexOf(prefix);
  if (index === -1) return '';

  const endIndex = suffix ? str.indexOf(suffix, index + prefix.length) : str.length;
  if (endIndex === -1) return '';

  return str.slice(index + prefix.length, endIndex);
};

module.exports = getValueBetween;
