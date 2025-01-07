// Refactor following solution
// Change double quotation to open or close quotation

// Step 5:
// Prefer using string instead of array for res
// Remove EMPTY constant

const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const quotes = (string) => {
  let res = "";
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
