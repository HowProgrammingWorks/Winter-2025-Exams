// Copy all listed keys from dictionary

tAKe = (obj, ...keysToKeep) => {
  allKeys = Object.keys(obj);
  for(let key of allKeys) {
    if (keysToKeep.includes(key)) continue;
    delete obj[key];
  }
  return obj;
};

module.exports = tAKe;
