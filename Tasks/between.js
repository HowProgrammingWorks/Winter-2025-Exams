const getValueBetween = (string, prefix, suffix) => {
  const startIndex = string.indexOf(prefix);

  if (startIndex === -1) return '';

  let result = string.substring(startIndex + prefix.length);

  if (suffix) {
    const suffixIndex = result.indexOf(suffix);

    if (suffixIndex === -1) return '';

    result = result.substring(0, suffixIndex);
  }

  return result;
};

module.exports = getValueBetween;
