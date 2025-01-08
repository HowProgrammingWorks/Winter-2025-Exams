const generatePassword = (alphabet, length) => {
    const maxLength = alphabet.length;
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * maxLength);
        password = password + alphabet[index];
    }
    return password;
};

module.exports = generatePassword;
