// Refactor following solution
// Filter array by type name

const filter = (array, type) => {
  let remove = [];

  for (item of array) {
    const itemIndex = array.indexOf(item);
    if (typeof array[itemIndex] !== type) {
      remove.unshift(itemIndex);
    }
  }

  for (item of remove) array.splice(item, 1);

  return array;
};

module.exports = filter;
git 