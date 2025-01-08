'use strict'


// Refactor following solution
// Generate random password

const GeneratePassword = (alphabet, length) => {
  const max_index = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max_index);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = GeneratePassword;
