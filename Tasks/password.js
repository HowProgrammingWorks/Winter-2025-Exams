// Refactor following solution
// Generate random password

let GeneratePassword = (alphabet, passwordLength) => {
  const maxIndex = alphabet.length;
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    password = password + alphabet[randomIndex];
  }
  return password;
};

module.exports = GeneratePassword;
