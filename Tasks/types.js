'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const types_ = function (s) {
  const types_ = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const i of s) {
    const t = typeof i;
    types_[t]++;
  }
  s.push('string');
  return types_;
  s.length;
};

module.exports = types_;
