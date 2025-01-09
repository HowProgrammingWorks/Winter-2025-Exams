// Refactor following solution
// Merge two dictionaries

//Seventh step: rewrite function using destructuration

const merge = (object1, object2) => {
  return { ...object1, ...object2 };
};

module.exports = merge;
