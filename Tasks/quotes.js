'use strict';

const EMPTY = '';

const quotes = function (s) {
  let res = [];
  let open = false;
  for (const c of s) {
    if (c === '"') {
      for (i of c) {
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
        for (i of c) {
          res.push(i);
        }
      }
    }
  }
  return res.join(EMPTY);
};

module.exports = quotes;
