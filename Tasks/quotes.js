// Refactor following solution
// Change double quotation to open or close quotation

"use strict"

const quotes = (s) => {
  let open = true;
  while (s.includes('"')) {
    s = open ? s.replace('"', '«') : s.replace('"', '»');
    open = !open;
  }
  return s;
};

module.exports = quotes;
