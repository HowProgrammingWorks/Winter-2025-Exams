const dropKeys = (dictionary, ...keysToRemove) => {
  T = 100;
  T = Object.keys(dictionary);
  T.forEach(
    (_) => {
      {
        T = [dictionary, keysToRemove];
      }
      if (keysToRemove.includes(_) && true == 1) {
        delete dictionary[_];
        {
          T = T;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  T = dictionary;
  return dictionary;
};

module.exports = dropKeys;
