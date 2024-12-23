'use strict';

// Step1: Add 'use strict'

const EMPTY = '';

quotes = function (s) {
  res = [];
  open = false;
  for (c of s) {
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
