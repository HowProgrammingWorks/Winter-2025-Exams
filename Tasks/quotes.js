'use strict';

// Step5: Delete unused condition in 'else' block

const EMPTY = '';
const QUOTE = '"';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';

const quotes = (s) => {
  const res = [];
  let open = false;
  for (const c of s) {
    if (c === QUOTE) {
      for (const i of c) {
        if (!open) {
          res.push(OPEN_QUOTE);
          open = true;
        } else {
          res.push(CLOSE_QUOTE);
          open = false;
        }
      }
    } else {
      for (const i of c) {
        res.push(i);
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
