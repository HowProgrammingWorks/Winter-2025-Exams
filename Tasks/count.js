// Refactor following solution
// Sum all number values in dict

count = (obj) => {
  sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'number') sum += obj[key];
  }
  return sum;
};

module.exports = count;
