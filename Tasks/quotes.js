// Refactor following solution
// Change double quotation to open or close quotation

"use strict"

const quotes = (str) => {
  let open = true;
  while (str.includes('"')) {
    str = open ? str.replace('"', '«') : str.replace('"', '»');
    open = !open;
  }
  return str;
};

module.exports = quotes;
