// Refactor following solution
// Return an array without duplicates

const DISTINCT = (data) => {
  const A = new Set();
  data.forEach((a, index) => {
    if (A.has(a)) {
      delete data[index];
    } else {
      A.add(a);
    }
  });
  return data.filter((x) => typeof x === 'number');
};

module.exports = DISTINCT;
