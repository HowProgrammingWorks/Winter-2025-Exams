// Refactor following solution
// Extract substring between prefix and suffix

getValueBetween = (string, prefix, suffix) => {
  index = string.indexOf(prefix);
  if (index === -1) return '';
  else {
   beginning = index + prefix.length;
    string = string.substring(beginning);
    if (suffix) {
      index = string.indexOf(suffix);
      if (index === -1) {
        return '';
      } else {
        string = string.substring(0, index);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;
