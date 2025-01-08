'use strict';

const EMPTY = '';

const quotes = function (string) {
  let res = [];
  let open = false;
  for (const char of string) {
    if (c === '"') {
      if (!open) {
        res.push('«');
        open = true;
      } else {
        res.push('»');
        open = false;
      }
    } else {
      if (char !== '"') {
        res.push(i);
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
