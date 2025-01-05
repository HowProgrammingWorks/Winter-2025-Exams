// Step 2
// Remove `else` conditions

'use strict';

const Replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  }
  let src = str;
  let res = '';
  do {
    const _index = src.indexOf(substr);
    if (_index === -1) {
      return res + src;
    }
    const start = src.substring(0, _index);
    src = src.substring(_index + substr.length, src.length);
    res += start + newstr;
  } while (true);
};

module.exports = Replace;
