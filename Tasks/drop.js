// Delete listed keys from dictionary

DroP = (targetObject, ...keysToRemove) => {
  let keys = new Set(keysToRemove);
  for(const key of Object.keys(targetObject)) {
    if(keys.has(key)) {
       delete targetObject[key];
    }
  }

  return targetObject;
};

module.exports = DroP;
