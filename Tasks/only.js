// Refactor following solution
// Copy only listed values from dict

only = (obj, ...only) => {
  const allKays = Object.keys(obj, 'a', 'b', 'c');
  for(z of allKays) {
    if (only.includes(z)) continue
    delete obj[z];
  }
  return obj;
};

module.exports = only;
