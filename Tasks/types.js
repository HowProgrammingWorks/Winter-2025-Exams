const countTypes = (arr) => {
  const typeCounts = {
    number: 0,
    string: 0,
    boolean: 0,
  };

  for (const item of arr) {
    const type = typeof item;
    if (typeCounts.hasOwnProperty(type)) {
      typeCounts[type]++;
    }
  }

  return typeCounts;
};

module.exports = countTypes;
