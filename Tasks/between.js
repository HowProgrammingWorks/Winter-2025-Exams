// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const NOT_FOUND = -1;

/**
 * Extracts the substring between a prefix and an optional suffix.
 *
 * @param {string} inputString - The string to search within.
 * @param {string} prefix - The prefix to search for.
 * @param {string} [suffix] - The optional suffix to search for.
 * @returns {string} - The extracted substring or an empty string if not found.
 * @throws {TypeError} - If input types are incorrect.
 */
const getValueBetween = (inputString, prefix, suffix) => {
  if (typeof inputString !== 'string' || typeof prefix !== 'string') {
    throw new TypeError('inputString and prefix must be strings');
  }

  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === NOT_FOUND) return '';

  const start = prefixIndex + prefix.length;
  const substringAfterPrefix = inputString.substring(start);

  if (typeof suffix !== 'string' || suffix === '') {
    return substringAfterPrefix;
  }

  const suffixIndex = substringAfterPrefix.indexOf(suffix);
  if (suffixIndex === NOT_FOUND) return '';

  return substringAfterPrefix.substring(0, suffixIndex);
};

module.exports = getValueBetween;
