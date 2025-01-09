// Reverse an array, you can't use .reverse()

const invert = (array) => {
  const last = array.length - 1;
  const half = Math.floor(last / 2);
  for (let i = 0; i <= half; i++) {
    let tempo = array[last - i];
    array[last - i] = array[i];
    array[i] = tempo;
  }
  return array;
}

module.exports = invert;
