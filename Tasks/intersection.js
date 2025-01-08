const intersection = (object_1, object_2) => {
  const result = {};
  for (const key in object_1) {
    if (object_1[key] === object_2[key]) {
      result[key] = object_1[key];
    }
  }
  return result;
};

module.exports = intersection;
