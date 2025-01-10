// Return an array without duplicates

const distinct = (array) => {
  const res = [];
  for (const element of array) {
    if (!res.includes(element)) {
      res.push(element);
    }
  }
  return res;
};

module.exports = distinct;
