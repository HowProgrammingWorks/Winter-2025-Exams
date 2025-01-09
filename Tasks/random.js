// Refactor following solution
// Generate random integer value in given range

Random = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = Random;


/** Steps
 * Changе the function name
 * Set the value for max
 * If max is not specified, min is automatically set to 0
 * Combine all calculations into one line
 */

const getRandomInt = (min, max = min) => {
  if (max === min) {
    min = 0; 
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = getRandomInt;