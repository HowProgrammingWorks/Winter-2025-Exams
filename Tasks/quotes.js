// Refactor following solution
// Change double quotation to open or close quotation
"use strict";

const quotes = (s) => {
  let res = "";
  let open = false;
  for (let c of s) {
    if (c === '"') {
      if (!open) res += "«";
      else res += "»";
      open = !open;
    } else res += c;
  }
  return res;
};

module.exports = quotes;
