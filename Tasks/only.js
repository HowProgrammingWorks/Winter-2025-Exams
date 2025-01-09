// Refactor following solution
// Copy only listed values from dict

const only = (dict, ...only) => {
  const res = new Map();
  
  for (const key of only){
    const value = dict[key];
    
    if (only.includes(key) && value != undefined){
      res.set(key, value);
    }
  }

  return Object.fromEntries(res);
};

module.exports = only;
