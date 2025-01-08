'use strict';
// Refactor following solution
// Generate random password

let generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  key = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * max);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
