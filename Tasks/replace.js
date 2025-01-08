'use strict';

const replace = (str, substr, newstr) => {
  if (substr === '')
    return str;

  let temp = str;
  let res = '';
  do {
    let index = temp.indexOf(substr);
    if (index === -1) {
      return res + temp;
    } else {
      const start = temp.substring(0, index);
      temp = temp.substring(index + substr.length, temp.length);
      res += start + newstr;
    }
  } while (true);
};

module.exports = replace;
