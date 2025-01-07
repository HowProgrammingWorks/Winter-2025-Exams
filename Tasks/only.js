// Refactor following solution
// Copy only listed values from dict

const only = (dict, ...only) => {
  
  const keys = Object.keys(dict);
  keys.forEach((key) => {
    if (only.includes(key)) {
    } else {
      delete dict[key];
    }
  });
  
  return dict;
};

module.exports = only;
