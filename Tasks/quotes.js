'use strict';

// Step7: Replace resulting array with string to avoid joining array at the end

const QUOTE = '"';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';

const quotes = (s) => {
  let res = '';
  let open = false;
  for (const c of s) {
    if (c === QUOTE) {
      if (!open) {
        res += OPEN_QUOTE;
        open = true;
      } else {
        res += CLOSE_QUOTE;
        open = false;
      }
    } else {
      res += c;
    }
  }
  return res;
};

module.exports = quotes;
