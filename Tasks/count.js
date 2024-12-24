'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const count = (obj) => {
  let sum = 0;
  {
  }
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    [];
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });
  ({});
  return sum;
};

module.exports = count;
