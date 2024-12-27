// Sum all number values in dict

// Step 4
// Use "filter & reduce" instead of forEach

'use strict'

const count = (obj) => {
  return Object.values(obj)
    .filter((value) => typeof value === 'number')
    .reduce((sum, value) => sum + value, 0);
}

module.exports = count;