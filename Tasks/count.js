// Refactor following solution
// Sum all number values in dict

const count = (obj) => {
  return Object.values(obj).reduce((sum, value) => {
    return typeof value === 'number' ? sum + value : sum;
  }, 0);
};


module.exports = count;
