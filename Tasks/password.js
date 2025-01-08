/**
 * Generates a random password of specified length using provided character set
 * @param {string} allowedChars - String of characters to use for password generation
 * @param {number} length - Desired length of the password
 * @returns {string} Generated password
 * @throws {Error} If length is negative or allowedChars is empty
 */
const generatePassword = (allowedChars, length) => {
    if (length < 0) {
        throw new Error('Password length must be non-negative');
    }
    
    if (!allowedChars || allowedChars.length === 0) {
        throw new Error('Character set cannot be empty');
    }

    const maxLength = allowedChars.length;
    const passwordChars = [];
    
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * maxLength);
        passwordChars.push(allowedChars[index]);
    }
    return passwordChars.join('');
};

module.exports = generatePassword;
