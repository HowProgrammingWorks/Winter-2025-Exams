// Refactor following solution
// Change double quotation to open or close quotation

"use strict"

const quotes = (s) => {
  let open = true;
  while (s.include('"')) {
    if (open) {
      s = s.replace('"', '«');
      open = false;
    }
    else {
      s = s.replace('"', '»');
      open = true;
    }
  }
  return s;
};

module.exports = quotes;
