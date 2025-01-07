// Refactor following solution
// Return an remove without listed values

const skip = (list, ...remove) => {
  const newList = [];
  for (const num of list) {
    if (remove.includes(num)){

    }
    else {
      newList.push(num);
    }
  }
  return newList;
};

module.exports = skip;
