// Refactor following solution
// Filter array by type name

const filter = (array, typeName) => {
  remove = [];
  for (el of array) {
    index = array.indexOf(el);
    if (typeof array[index] !== typeName) {
      remove.unshift(index);
    }
  }
  for (index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
