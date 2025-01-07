// Refactor following solution
// Change double quotation to open or close quotation

// Step 6:
// Fix and use "use strict"
// Formatting

"use strict";

const OPEN_QUOTE = "«",
  CLOSE_QUOTE = "»",
  QUOTE = "\"";

const quotes = (string) => {
  let res = "",
    open = false;

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
