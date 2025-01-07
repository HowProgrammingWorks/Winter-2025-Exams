// Refactor following solution
// Return an remove without listed values

const skip = (list, ...remove) => {
  let id = 0;
  for (const num of list) {
    for (const garbage of remove) {
      if (num === garbage) {
        list.splice(id, 1);
      }
    }
    id++;
  }
  return list;
};

module.exports = skip;
