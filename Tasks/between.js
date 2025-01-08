// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (inputString, prefix, suffix) => {
  if (typeof inputString !== 'string' || typeof prefix !== 'string') {
    throw new Error('Invalid arguments: inputString and prefix must be strings');
  }

  const prefixIndex = inputString.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  let result = inputString.substring(startIndex);

  if (suffix && typeof suffix === 'string') {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) return '';
    result = result.substring(0, suffixIndex);
  }

  return result;
};

module.exports = getValueBetween;
