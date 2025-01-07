// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (str, start, end) => {
  const startIndex = str.indexOf(start);
  if (startIndex === -1) return '';

  const substringStart = startIndex + start.length;
  let result = str.substring(substringStart);

  if (end) {
    const endIndex = result.indexOf(end);
    if (endIndex === -1) return '';
    result = result.substring(0, endIndex);
  }

  return result;
};

module.exports = getValueBetween;
