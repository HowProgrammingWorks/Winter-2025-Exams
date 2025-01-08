// Refactor following solution
// Generate random password

'use strict';

let generatePassword = (alphabet, length) => {
  
  password = '';
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * alphabet.length);
    password += alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
