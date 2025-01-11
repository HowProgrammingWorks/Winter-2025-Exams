const DISTINCT = (data) => 
    Array.from(new Set(data)).filter((x) => typeof x === 'number');
  
  module.exports = DISTINCT;
  