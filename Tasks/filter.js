// Refactor following solution
// Filter array by type name

//Fourth step: remove unnecessary code 

const filter = (array, type) => {
  const res = [];
  for (const el of array) {
    if (typeof el === type) {
      res.push(el);
    }
  }
  return res;
};

module.exports = filter;
