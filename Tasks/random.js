// Refactor following solution
// Generate random integer value in given range

 const Random = (min, max = min) => {
  if (max === min) {
    min = 0;
  }
    return min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;
