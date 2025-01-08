'use strict';

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * max);
    password.push(alphabet[randomIndex]);
  }
  return password.join('');
};

module.exports = generatePassword;
