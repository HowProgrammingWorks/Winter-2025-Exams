// Refactor following solution
// Generate random password
'use strict';

const generatePassword = (alphabet, length) => {
  if (typeof alphabet !== 'string' || alphabet.length === 0) {
    return Error('Invalid alphabet');
  }
  if (typeof length !== 'number' || length <= 0) {
    return Error('Invalid length');
  }
  const max = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    password += alphabet[index];
  }

  return password;
};

module.exports = generatePassword;
