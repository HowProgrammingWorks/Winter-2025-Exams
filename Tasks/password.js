// Refactor following solution
// Generate random password

// Step 4: removed unnecessary intermediate variable MAX

'use strict';

const generatePassword = (alphabet, length) => {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * alphabet.length);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = generatePassword;
