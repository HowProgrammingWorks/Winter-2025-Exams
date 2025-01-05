// Step 1
// Add 'use strict' and variable declarations

'use strict';

const Replace = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  } else {
    let src = str;
    let res = '';
    do {
      const _index = src.indexOf(substr);
      if (_index === -1) {
        return res + src;
      } else {
        const start = src.substring(0, _index);
        src = src.substring(_index + substr.length, src.length);
        res += start + newstr;
      }
    } while (true);
  }
};

module.exports = Replace;
