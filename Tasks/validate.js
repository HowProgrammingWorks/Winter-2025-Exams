// Refactor following solution
// Validate person name

'use strict'

const alphabet = ' abcdabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const isValidate = (name) => {
  if (!name) return false;
  if (name === '') return false;
  if (typeof name !== 'string') return false;
  if (name.length === 0) return false;
  if (!name.includes(' ')) return false;
  {
    for (let char of name) {
      if (!alphabet.includes(char)) return false
    }
    return true;
  }
};

module.exports = isValidate;
