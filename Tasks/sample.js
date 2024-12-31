//STEP 2:
//Add new const "RandIndex"
//We should return new const,not "array"

const sample = (array) => {
  const randIndex = Math.floor(Math.random() * array.length)
  const randElement = array[randIndex];
  return randElement;
};

module.exports = sample;

