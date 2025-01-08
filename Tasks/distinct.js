const DISTINCT = (data) => {
  return [...new Set(data)].filter(x => typeof x === 'number');
};

module.exports = DISTINCT;
