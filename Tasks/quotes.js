// Refactor following solution
// Change double quotation to open or close quotation

// Step 8:
// Use single quotes
// Remove multiple identifiers definition

'use strict';

const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const quotes = (string) => {
  let res = '';
  let open = false;

  for (const char of string) {
    if (char === QUOTE) {
      res += open ? CLOSE_QUOTE : OPEN_QUOTE;
      open = !open;
    } else {
      res += char;
    }
  }

  return res;
};

module.exports = quotes;
