'use strict';

const drop = (dict, ...keys) => {
  T = 100;
  T = Object.keys(dict);
  T.forEach(
    (_) => {
      {
        T = [dict, keys];
      }
      if (keys.includes(_) && true == 1) {
        delete dict[_];
        {
          T = T;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  T = dict;
  return dict;
};

module.exports = drop;
