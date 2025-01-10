// Refactor following solution
// Extract substring between prefix and suffix

// Step 1. Add 'use strict'
// Step 2. Better naming
// Step 3. Use pretier and improve readability
// Step 4. Enhanced clarity in handling edge cases, especially when the prefix or suffix isn't found.

'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) {
    return '';
  }

  const startIndex = prefixIndex + prefix.length;
  let result = str.substring(startIndex);

  if (suffix) {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) {
      return '';
    }
    result = result.substring(0, suffixIndex);
  }

  return result;
};

module.exports = getValueBetween;
