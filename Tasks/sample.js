// Refactor following solution
// Get one random element from an array

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = SAMPLE;


/** Steps
 * Change function name
 * Enter the randomIndex variable
 * Failure to reassign a function argument
 */

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};

module.exports = getRandomElement;