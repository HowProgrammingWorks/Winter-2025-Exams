// Refactor following solution
// Generate random password

// Step 4:
// Declare random(max) function

"use strict";

const random = (max) => Math.floor(Math.random() * max);

const generatePassword = (alphabet, length) => {
  const max = alphabet.length;
  let password = "";

  for (let i = 0; i < length; i++) {
    const index = random(max);
    password += alphabet[index];
  }

  return password;
};

module.exports = generatePassword;
