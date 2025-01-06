// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  let result = inputString.substring(startIndex);

  if (suffix) {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) return '';
    result = result.substring(0, suffixIndex);
  }

  return result;
};


module.exports = getValueBetween;
