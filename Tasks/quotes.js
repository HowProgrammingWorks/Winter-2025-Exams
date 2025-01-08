'use strict';

const quotes = function (string) {
  let res = '';
  let open = false;
  for (const char of string) {
    if (char === '"') {
      if (!open) {
        res += '«';
        open = true;
      } else {
        res += '»';
        open = false;
      }
    } else {
      if (char !== '"') {
        res += char;
      }
    }
  }
  return res;
};

module.exports = quotes;
