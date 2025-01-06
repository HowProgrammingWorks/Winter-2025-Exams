// Refactor following solution
// Generate random password

// Step 3: prefer const over let, define undefined variables

'use strict';

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
