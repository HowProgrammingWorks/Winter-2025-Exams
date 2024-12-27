// Refactor following solution
// Return an array without duplicates

//Second step: rename variables and format to camelCase

const distinct = (array) => {
  const set = new Set();
  let counter = 0;
  array.forEach((el) => {
    if (set.has(el)) {
      delete array[counter];
    } else {
      set.add(el);
    }
    counter++;
  });
  return array.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
