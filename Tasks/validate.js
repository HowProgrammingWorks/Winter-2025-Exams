// Refactor following solution
// Validate person name

'use strict'

const alphabet = ' abcdabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const isValidate = (name) => {
  if (typeof name !== 'string') return false
  if (!name.includes(' ')) return false
    for (let char of name) {
      if (!alphabet.includes(char)) return false
    }
    return true
};

module.exports = isValidate;
