// Refactor following solution
// Generate random password

'use strict';

const generatePassword = (alphabet, length) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * alphabet.length);
    password += alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
