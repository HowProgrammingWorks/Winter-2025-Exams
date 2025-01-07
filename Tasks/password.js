// Refactor following solution
// Generate random password

// Step 2:
// Fix and Use "use strict"
// Rename variable using camel case

"use strict";

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
