'use strict';

// Step9: Improve naming of identifiers

const QUOTE = '"';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';

const quotes = (quote) => {
  let result = '';
  let open = false;
  for (const char of quote) {
    if (char === QUOTE) {
      result += open ? CLOSE_QUOTE : OPEN_QUOTE;
      open = !open;
    } else {
      result += char;
    }
  }
  return result;
};

module.exports = quotes;
