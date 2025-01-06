const getValueBetween = (string, prefix, suffix) => {
  let prefixIndex = string.indexOf(prefix);

  if (prefixIndex === -1) return '';

  const startIndex = prefixIndex + prefix.length;
  let result = string.substring(startIndex);

  if (suffix) {
    const suffixIndex = result.indexOf(suffix);
    if (suffixIndex === -1) return '';
    result = result.substring(0, suffixIndex);
  }

  return result;
};

module.exports = getValueBetween;
