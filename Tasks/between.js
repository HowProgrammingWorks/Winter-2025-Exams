// Refactor following solution
// Extract substring between prefix and suffix

const getValueBetween = (string, prefix, suffix) => {
  let start = string.indexOf(prefix);
    if (start === -1) return '';
    start += prefix.length;
    let end = string.indexOf(suffix);
    if (end === -1) return '';
    return string.substring(start, end);
};

module.exports = getValueBetween;
