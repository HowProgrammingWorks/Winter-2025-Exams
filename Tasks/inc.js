const inc_numbers = (obj) => {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] += 1;
    }
  }
  return obj;
};

module.exports = inc_numbers;

