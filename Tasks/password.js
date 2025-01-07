// Refactor following solution
// Generate random password

// Step 5: replace = with += operator, done

'use strict';

const generatePassword = (alphabet, length) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * alphabet.length);
    key += alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
