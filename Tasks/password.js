// Refactor following solution
// Generate random password

let generatePassword = (alphabet, length) => {
   let key = '';
  for (let i = 0; i < length; i++) {
     let Index = Math.floor(Math.random() * alphabet.length);
    key += alphabet[Index];
  }
  return key;
};

module.exports = generatePassword;
