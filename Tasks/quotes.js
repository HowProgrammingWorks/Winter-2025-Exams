// Refactor following solution
// Change double quotation to open or close quotation

// Step 1:
// Use "use strict"
// Use const and let
// Prefer using arrow functions

const EMPTY = '';

const quotes = (s) => {
  const res = [];
  let open = false;
  for (const c of s) {
    if (c === '"') {
      for (const i of c) {
        if (!open) {
          res.push('«');
          open = true;
        } else {
          res.push('»');
          open = false;
        }
      }
    } else {
      if (c !== '"') {
        for (const i of c) {
          res.push(i);
        }
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
