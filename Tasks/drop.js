const dropKeys = (obj, ...keysToRemove) => {
  Object.keys(obj).forEach((key) => {
    if (keysToRemove.includes(key)) {
      delete obj[key];
    }
  });

  return obj;
};

module.exports = dropKeys;
