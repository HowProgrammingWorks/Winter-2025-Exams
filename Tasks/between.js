// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, prefix, suffix) => {
  const prefixPosition = str.indexOf(prefix);
  if (prefixPosition === -1) {
    return '';
  }

  const substringStart = prefixPosition + prefix.length;
  str = str.substring(substringStart);

  if (!suffix) {
    return str;
  }

  const suffixPosition = str.indexOf(suffix);
  if (suffixPosition === -1) {
    return '';
  }

  return str.substring(0, suffixPosition);
}




module.exports = getValueBetween;
