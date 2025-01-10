// Refactor following solution
// Find an intersection of two dictionaries

'use strict'

const intersection = (firstObject, secondObject) => {
  return Object.keys(firstObject).reduce((acc, current)=> {
      if (firstObject[current] === secondObject[current]){
          acc[current] = firstObject[current];
      }
      return acc;
  })
};

module.exports = intersection;
