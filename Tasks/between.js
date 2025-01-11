// Refactor following solution
// Extract substring between prefix and suffix
"use strict";

const getValueBetween = (str, p, s) => {
  let result = "";
  const start = str.indexOf(p);
  const end = str.indexOf(s);
  if (start !== -1 && end !== -1) {
    result = str.substring(start + 1, end);
  }
  return result;
};

module.exports = getValueBetween;
