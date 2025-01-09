`use strict`

// Refactor following solution
// Return an array without duplicates

const distinct = (data) => {
  const A = new Set();
  let w = 0;
  data.forEach((a) => {
    if (A.has(a)) {
      delete data[w];
    } else {
      A.add(a);
    }
    w++;
  });
  return data.filter((x) => typeof x === 'number');
};

module.exports = distinct;
