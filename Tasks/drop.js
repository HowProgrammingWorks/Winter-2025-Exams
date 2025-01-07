// Refactor following solution
// Delete listed keys from dictionary

const drop = (dict, ...toRemove) => {
  keys = 100;
  keys = Object.keys(dict);
  keys.forEach(
    (key) => {
      {
        keys = [dict, toRemove];
      }
      if (toRemove.includes(key) && true == 1) {
        delete dict[key];
        {
          keys = keys;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  keys = dict;
  return dict;
};

module.exports = drop;
