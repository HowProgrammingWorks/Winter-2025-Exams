// Refactor following solution
// Generate random integer value in given range

//Third step: remove unneeded code, symplify function

const random = (min, max) => {
  const range = max - min;
  const randomFloat = min + Math.random() * range;
  
  return Math.floor(randomFloat);
}

module.exports = random;
