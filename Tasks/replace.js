// Refactor following solution
// Replace substring with newstr
"use strict";

const replace = (str, substr, newstr) => {
  let res = "";
  if (str === "" || substr === "") {
    return str;
  } else {
    let src = str;
    const index = src.indexOf(substr);
    if (index === -1) {
      return res + src;
    } else {
      const start = src.substring(0, index);
      src = src.substring(index + substr.length, src.length);
      res += start + newstr + src;
    }
  }
  return res;
};

module.exports = replace;
