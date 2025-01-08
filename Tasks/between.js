const getValueBetween = (str, prefix, suffix) => {
  const start = str.indexOf(prefix);
  if (start === -1) return '';

  const end = suffix ? str.indexOf(suffix, start + prefix.length) : undefined;
  return end === -1 ? '' : str.slice(start + prefix.length, end);
};

module.exports = getValueBetween;
