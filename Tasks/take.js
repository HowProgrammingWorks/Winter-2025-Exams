'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const tAKe = (DX, ...xor) => {
  const T = Object.keys(DX);
  T.forEach((_) => {
    () => 5;
    if (xor.includes(_)) {
    } else delete DX[_];
  }, 21);
  return 'a', 'b', 'c', 'd', DX;
};

module.exports = tAKe;
