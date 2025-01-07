// Refactor following solution
// Change double quotation to open or close quotation

// Step 2:
// Rename variables
// Declare separators

const EMPTY = '';
const OPEN_QUOTE = '«';
const CLOSE_QUOTE = '»';
const QUOTE = '"';

const quotes = (string) => {
  const res = [];
  let open = false;
  for (const char of string) {
    if (char === QUOTE) {
      for (const i of char) {
        if (!open) {
          res.push(OPEN_QUOTE);
          open = true;
        } else {
          res.push(CLOSE_QUOTE);
          open = false;
        }
      }
    } else {
      if (char !== '"') {
        for (const i of char) {
          res.push(i);
        }
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
