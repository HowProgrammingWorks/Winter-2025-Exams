'use strict';
// Refactor following solution
// Generate random password

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * max);
    password += alphabet[randomIndex];
  }
  return password;
};

module.exports = generatePassword;
