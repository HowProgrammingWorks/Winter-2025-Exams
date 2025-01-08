/**
 * Generates a random password of specified length using provided character set
 * @param {string} alphabet - String of characters to use for password generation
 * @param {number} length - Desired length of the password
 * @returns {string} Generated password
 */
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
