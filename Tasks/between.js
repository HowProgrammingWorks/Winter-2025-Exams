// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, p, s) => {
  const i = str.indexOf(p);
  if (i === -1) return '';
  else {
    const k = i + p.length;
    str = str.substring(k);
    if (s) {
      const innerIndex = str.indexOf(s);
      if (innerIndex === -1) {
        return '';
      } else {
        str = str.substring(0, innerIndex);
      }
    }
  }
  return str;
};


module.exports = getvaluebetween;
