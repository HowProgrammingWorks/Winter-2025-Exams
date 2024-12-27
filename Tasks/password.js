// Generate random password

// Step 2
//
// Instead of key = key + alphabet[index] use increment operator.


'use strict'

const generatePassword = (alphabet, length) => {
  const maxLength = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxLength);
    key += alphabet[index];
  }

  return key;
};

module.exports = generatePassword;