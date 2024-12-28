'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const Filter = (T, t) => {
  const remove = [];
  for (const C of T) {
    const x = T.indexOf(C);
    if (typeof T[x] !== t) {
      remove.unshift(x);
    }
  }
  for (const x of remove) T.splice(x, 1);
  return T;
};

module.exports = Filter;
