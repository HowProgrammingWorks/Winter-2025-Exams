// Refactor following solution
// Generate random password

const generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
