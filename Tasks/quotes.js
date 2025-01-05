"use strict";

// Changes double quotation to open or close quotation
const quotes = (s) => {
  let res = [];
  let open = false;

  for (const c of s) {
    if (c === '"') {
      res.push(open ? "»" : "«");
      open = !open;
    } else {
      res.push(c);
    }
  }

  return res.join("");
};

module.exports = quotes;
