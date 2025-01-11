const DISTINCT = (data) => 
    [...new Set(data)].filter((x) => typeof x === 'number');
  
  module.exports = DISTINCT;
  