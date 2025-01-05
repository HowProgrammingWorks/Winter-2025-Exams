// Refactor following solution
// Sum all number values in dict

const count = (obj) => {
  return Object.values(obj)
    .filter((value) => typeof value === "number")
    .reduce((sum, num) => sum + num, 0);
};

module.exports = count;
