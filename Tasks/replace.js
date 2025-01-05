// Step 4
// Simplify and merge conditions

'use strict';

const Replace = (str, substr, newstr) => {
  let src = str;
  const _index = src.indexOf(substr);
  if (!substr || _index === -1) return str;
  const start = src.substring(0, _index);
  src = src.substring(_index + substr.length, src.length);
  const res = start + newstr + src;
  return res;
};

module.exports = Replace;
