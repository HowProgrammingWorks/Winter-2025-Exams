const diff = (object_1, object_2) => {
  const differences = {};

  for (const key in object_1) {
    if (!(key in object_2)) {
      differences[key] = object_1[key];
    }
  }


  return differences;
};

module.exports = diff;
