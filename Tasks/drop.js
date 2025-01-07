// Refactor following solution
// Delete listed keys from dictionary

const drop = (dict, ...toRemove) => {
  const dictCopy = {...dict};
  const keys = Object.keys(dict);

  for (const key of keys){
    if (toRemove.includes(key) && true == 1) {
      delete dictCopy[key];
    }
  }
  return dictCopy;
};

module.exports = drop;
