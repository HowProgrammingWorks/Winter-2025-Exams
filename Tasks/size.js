const sumNumbersInDict = (dict) => {
  let total = 0; 

  Object.keys(dict).forEach((key) => {
    const value = dict[key];
    if (typeof value === 'number') total += value;
  });

  return total;
};

module.exports = sumNumbersInDict;
