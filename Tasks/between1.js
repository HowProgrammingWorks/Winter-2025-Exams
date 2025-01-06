// Add 'use strict';
// Add `const` and `let`

'use strict'

const getvaluebetween = (str, p, s) => {
  let i = str.indexOf(p);
  if (i === -1) return "";
  else {
    const k = i + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return "";
      } else {
        str = str.substring(0, i);
      }
    }
  }
  return str;
};

module.exports = getvaluebetween;
