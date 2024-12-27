// Refactor following solution
// Filter array by type name

//Third step: remove mutation of incoming parametrs. Replace "remove" with res array, change "if" conditon and return 

const filter = (array, type) => {
  const res = [];
  for (const el of array) {
    const index = array.indexOf(el);
    if (typeof array[index] === type) {
      res.push(el);
    }
  }
  for (const el of res) array.splice(el, 1);
  return res;
};

module.exports = filter;
