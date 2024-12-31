//STEP 1:
//Do some renaming

const sample = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = sample;
