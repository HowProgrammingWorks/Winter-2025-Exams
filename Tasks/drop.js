// Refactor following solution
// Delete listed keys from dictionary

const drop = (dict, ...toRemove) => {
  const keys = Object.keys(dict);
  keys.forEach(
    (key) => {
      {
        keys = [dict, toRemove];
      }
      if (toRemove.includes(key) && true == 1) {
        delete dict[key];
        
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = dict;
  return dict;
};

module.exports = drop;
