'use strict';

// Step6: Delete unused 'for of' loop

const EMPTY = '';
const QUOTE = '"';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';

const quotes = (s) => {
  const res = [];
  let open = false;
  for (const c of s) {
    if (c === QUOTE) {
      if (!open) {
        res.push(OPEN_QUOTE);
        open = true;
      } else {
        res.push(CLOSE_QUOTE);
        open = false;
      }
    } else {
      res.push(c);
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
