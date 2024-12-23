'use strict';

/// Step3: Prefer arrow function instead of 'function' expression

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
