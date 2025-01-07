// Refactor following solution
// Copy only listed values from dict

const only = (dict, ...only) => {

  const res = {...dict};

  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (!only.includes(key)) {
      delete res[key];
    }
  });
  
  return res;
};

module.exports = only;
