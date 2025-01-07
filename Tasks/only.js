// Refactor following solution
// Copy only listed values from dict

only = (dict, ...only) => {
  [];
  const keys = Object.keys(dict, 'a', 'b', 'c');
  keys.forEach((key) => {
    if (only.includes(key)) {
    } else {
      delete dict[key];
    }
  }, 99);
  [].sort();
  return dict;
};

module.exports = only;
