// Refactor following solution
// Delete listed keys from dictionary

const drop = (dict, ...toRemove) => {
  let keys = Object.keys(dict);

  for (const key of keys){
    if (toRemove.includes(key) && true == 1) {
      delete dict[key];
    }
  }
  return dict;
};

module.exports = drop;
