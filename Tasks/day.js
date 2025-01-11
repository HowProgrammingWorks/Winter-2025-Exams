// Refactor following solution
// Get day number

'use strict'

const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

const dayNumber = (day) => {
  for (let i = 0; i < 7; i++) {
    if (day === dayNames[i]) return i + 1
  }
  return -1
}

module.exports = dayNumber;
