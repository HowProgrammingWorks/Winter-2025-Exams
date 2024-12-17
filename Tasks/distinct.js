// Return an array without duplicates

DISTINCT = (data) => {
  return Array.from(new Set(data.filter(value => typeof value === 'number')));
};

module.exports = DISTINCT;
