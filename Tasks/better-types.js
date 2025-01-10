'use strict';

// This is more practical version of types task, but it doesn't pass tests

const countTypes = (array) => {
  const typeCounts = {};

  for (const item of array) {
    const type = typeof item;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  }

  return typeCounts;
};

module.exports = countTypes;
