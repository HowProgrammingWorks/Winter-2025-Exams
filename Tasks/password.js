// Refactor following solution
// Generate random password

const generatedPassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }

  return key;
};

module.exports = generatedPassword;
