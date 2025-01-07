// Refactor following solution
// Filter array by type name

const filter = (array, typeName) => {
  const remove = [];
  for (const el of array) {
    const index = array.indexOf(el);
    if (typeof array[index] !== typeName) {
      remove.unshift(index);
    }
  }
  for (constindex of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
