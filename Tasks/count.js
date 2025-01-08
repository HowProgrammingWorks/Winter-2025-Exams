const count = (obj) => 
  Object.values(obj).reduce((sum, value) => 
    typeof value === 'number' ? sum + value : sum, 0);

module.exports = count;
