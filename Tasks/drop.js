// Refactor following solution
// Delete listed keys from dictionary

const drop = (dict, ...toRemove) => {
  const res = new Map();
  const keys = Object.keys(dict);

  for (const key of keys){
    if (!toRemove.includes(key)) {
      res.set(key, dict[key]);
    }
  }
  return Object.fromEntries(res);
};

module.exports = drop;
