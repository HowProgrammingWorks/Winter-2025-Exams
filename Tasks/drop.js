const dropKeys = (obj, ...keysToRemove) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (!keysToRemove.includes(key)) {
      result[key] = obj[key];
    }
  }

  return result;
};

module.exports = dropKeys;
