const dropKeys = (dictionary, ...keysToRemove) => {
    keysToRemove.forEach((key) => {
      if (key in dictionary) {
        delete dictionary[key];
      }
    });
    return dictionary;
  };
  
  module.exports = dropKeys;
  