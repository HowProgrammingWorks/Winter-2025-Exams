// Step 3
// Remove infinity loop
// Simplify the code

'use strict';

const Replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  }
  let src = str;
  const _index = src.indexOf(substr);
  if (_index === -1) {
    return src;
  }
  const start = src.substring(0, _index);
  src = src.substring(_index + substr.length, src.length);
  const res = start + newstr + src;
  return res;
};

module.exports = Replace;
