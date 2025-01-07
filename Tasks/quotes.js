// Refactor following solution
// Change double quotation to open or close quotation

// Step 3:
// Remove unnecessary loops for char
// Remove unnecessary if conditions

const EMPTY = '';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const quotes = (string) => {
  const res = [];
  let open = false;
  for (const char of string) {
    if (char === QUOTE) {
      if (!open) {
        res.push(OPEN_QUOTE);
        open = true;
      } else {
        res.push(CLOSE_QUOTE);
        open = false;
      }
    } else {
      res.push(char);
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
