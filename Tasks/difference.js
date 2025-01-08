const diff = (object_1, object_2) => {
  const difference = {};
  
  for (let key in object_1) {
    if (!(key in object_2)) {
      difference[key] = object_1[key];
    }
  }

  return difference;
};

module.exports = diff;
