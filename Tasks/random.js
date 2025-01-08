const Random = (min, max = min) => {
  return max === min 
    ? Math.floor(Math.random() * (max + 1)) 
    : min + Math.floor(Math.random() * (max - min + 1));
};

module.exports = Random;