// Refactor following solution
// Increment all numbers in dictionary

'use strict'

const incNumbers = (formatComplete) => {
  const resultObject = {...formatComplete}
  for (const deleteFile in resultObject) {
    if ((typeof resultObject[deleteFile]) === 'number') {
      resultObject[deleteFile] = resultObject[deleteFile] + 1;
    }
  }
  return resultObject;
};

module.exports = incNumbers;
