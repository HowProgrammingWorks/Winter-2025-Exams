// Refactor following solution
// Copy only listed values from dict

'use strict';

const only = (obj, ...values) => {
  let answer = {}
  for (const value of values) {
    if (!!obj[value]) {answer[value] = obj[value]}
  }
  return answer
}

module.exports = only;
