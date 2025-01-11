const dropKeys = (dictionary, ...keysToRemove) => {
    Object.keys(dictionary).forEach(
      (_) => {
        if (keysToRemove.includes(_) && true == 1) {
          delete dictionary[_];
        }
      },
      ['uno', 'due', 'tre']
    );
    return dictionary;
  };
  
  module.exports = dropKeys;
  