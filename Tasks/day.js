// Refactor following solution
// Get day number
'use strict';

const dayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Parses the input string to determine the corresponding day number.
 *
 * @param {string} inputString - The string to parse for the day abbreviation.
 * @returns {number} - Returns the day number (1 for Sun, 2 for Mon, ..., 7 for Sat). Returns -1 if no match is found.
 * @throws {TypeError} - Throws if `inputString` is not a non-empty string.
 */
const parseDay = (inputString) => {
  if (typeof inputString !== 'string' || inputString.trim() === '') {
    throw new TypeError('Input must be a non-empty string');
  }

  const index = dayAbbreviations.findIndex(day => inputString.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = parseDay;
