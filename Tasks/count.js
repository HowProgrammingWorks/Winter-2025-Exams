// Refactor following solution
// Sum all number values in dict

const count = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') {
      sum += value;
    }
  });

  return sum;
};


module.exports = count;
