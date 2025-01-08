'use strict'


// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  const prefixindex = string.indexOf(prefix);
  if (prefixindex === -1) return '';
   
    const beginning = prefixindex + prefix.length;
    const substringAfterPrefix = string.substring(beginning);

    if (suffix) {
    const suffixindex = substringAfterPrefix.indexOf(suffix);
    if (suffixindex === -1) return '';
    return substringAfterPrefix.substring(0, suffixindex);
  }

  return substringAfterPrefix
};

module.exports = getValueBetween;
