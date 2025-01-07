// Refactor following solution
// Change double quotation to open or close quotation

// Step 4:
// Simplify if else statement

const EMPTY = '';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const quotes = (string) => {
  const res = [];
  let open = false;
  for (const char of string) {
    if (char === QUOTE) {
      res.push(open ? CLOSE_QUOTE : OPEN_QUOTE);
      open = !open;
    } else {
      res.push(char);
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
