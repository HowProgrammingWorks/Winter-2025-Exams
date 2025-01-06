const dropKeys = (obj, ...keysToRemove) => {
  let objectKeys = Object.keys(obj);

  objectKeys.forEach((key) => {
    if (keysToRemove.includes(key)) {
      delete obj[key];
    }
  });

  return obj;
};

module.exports = dropKeys;
