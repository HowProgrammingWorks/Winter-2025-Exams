// Refactor following solution
// Return an array without duplicates

//Fourth step: replace forEach with for..of

const distinct = (array) => {
  const res = [];
  for (const el of array) {
    if (!res.includes(el)) {
      res.push(el);
    } 
  }
  
  return res;
};

module.exports = distinct;
