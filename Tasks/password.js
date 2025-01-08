// Refactor following solution
// Generate random password
'use strict';

const paramsPassword = (alphabet, pswrdLength) => {
  const MAX_INDEX = alphabet.length;
  let password = '';
  for (let i = 0; i < pswrdLength; i++) {
    const randIndex = Math.floor(Math.random() * MAX_INDEX);
    password += alphabet[randIndex];
  }
  return password;
};

module.exports = paramsPassword;
