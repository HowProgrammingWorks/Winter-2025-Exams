// Refactor following solution
// Sum all number values in dict

let countNum = (dictionary) => {
  let numSum = 0;
  let keys = Object.keys(dictionary);
  keys.forEach((key) => {
    if (typeof dictionary[key] === 'number') {
      numSum += dictionary[key];
    }
  });
    return numSum;
};

module.exports = countNum;
