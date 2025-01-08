'use strict'

const duplicate = (data, lengthOfResult) => {
  let result = []

  for(let i = 0; i < lengthOfResult; i++) {
    result.push(data)
  }

  return result
};

module.exports = duplicate;
