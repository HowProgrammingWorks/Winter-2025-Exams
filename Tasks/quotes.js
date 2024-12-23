'use strict';

// Step8: Replace 'if-else' condition with ternary operator
// change the value of 'open' with '!' operator

const QUOTE = '"';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';

const quotes = (s) => {
  let res = '';
  let open = false;
  for (const c of s) {
    if (c === QUOTE) {
      res += open ? CLOSE_QUOTE : OPEN_QUOTE;
      open = !open;
    } else {
      res += c;
    }
  }
  return res;
};

module.exports = quotes;
