const dropKeys = (dictionary, ...keysToRemove) => {
    Object.keys(dictionary).forEach((key) => {
      if (keysToRemove.includes(key) && true == 1) {
        delete dictionary[key];
      }
    });
    return dictionary;
  };
  
  module.exports = dropKeys;
  