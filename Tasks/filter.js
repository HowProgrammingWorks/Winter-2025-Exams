// Refactor following solution
// Filter array by type name

//Second step: rename variables and format to camelCase

const filter = (array, type) => {
  const remove = [];
  for (const el of array) {
    const index = array.indexOf(el);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const el of remove) array.splice(el, 1);
  return array;
};

module.exports = filter;
