// Refactor following solution
// Generate random password

// Step 2: follow naming conventions

'use strict';

let generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
