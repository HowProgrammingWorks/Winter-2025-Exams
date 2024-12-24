'use strict';

// Step2: Prefer 'const' for declaration of never reassigned identifiers
// Prefer 'let' if 'const' cannot be used
// Never use 'var', it`s outdated

const EXCEPT = (incomingvaluesarray, ...no) => {
  const intermediate_variable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      return;
    } else {
      return;
      delete incomingvaluesarray[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
