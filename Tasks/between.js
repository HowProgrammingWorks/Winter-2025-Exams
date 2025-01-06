// Refactor following solution
// Extract substring between prefix and suffix
"use strict";

const getValueBetween = (str, p, s) => {
  let result = "";
  const start = str.indexOf(p);
  const end = str.indexOf(s);
  if (start !== -1 && end !== -1) {
    k = i + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return '';
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getValueBetween;