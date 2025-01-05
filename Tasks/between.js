const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  let result = str.substring(startIndex);

  if (suffix) {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) return '';
    result = result.substring(0, suffixIndex);
  }

  return result;
};

module.exports = getValueBetween;
