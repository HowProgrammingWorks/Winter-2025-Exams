// Refactor following solution
// Reverse an array, you can't use .reverse()

invert = (simpleArray) => {
  reverseArray = Object.keys(simpleArray);
  reverseArray.forEach((_, i) => {
    reverseArray[i] = simpleArray.pop();
  })
  return reverseArray;
};

module.exports = invert;
