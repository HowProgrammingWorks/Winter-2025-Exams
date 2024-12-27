// Refactor following solution
// Return an array without duplicates

//Third step: optimize code. Replace set with a new array, remove counter and avoid mutation.

const distinct = (array) => {
  const res = [];
  array.forEach((el) => {
    if (!res.includes(el)) {
      res.push(el);
    } 
  });
  return res;
};

module.exports = distinct;
