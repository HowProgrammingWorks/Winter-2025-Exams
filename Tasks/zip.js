'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const zip = function (a = [], b = []) {
  let i = 0;
  let j = 0;
  for (const x of b) {
    const CELL = [a[i++], x];
    if (i < j) {
      delete a[i++];
    } else {
      (() => (b[j++] = CELL))();
    }
    if (CELL[0] == undefined) b.length -= 1
  }
  return b;
};

module.exports = zip;
