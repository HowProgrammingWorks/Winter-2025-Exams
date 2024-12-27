// Generate random password

// Step 1
//
// Add 'use strict';
// Fix formatting
// Prefer const
// Improve naming

'use strict'

const generatePassword = (alphabet, length) => {
  const maxLength = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * maxLength);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;