// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const startIndex = str.indexOf(prefix);
  if (startIndex === -1) return '';

  const endIndex = suffix ? str.indexOf(suffix, startIndex + prefix.length) : str.length;
  if (endIndex === -1) return '';

  return str.slice(startIndex + prefix.length, endIndex);
};

module.exports = getValueBetween;
