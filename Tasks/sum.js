// Sum all numbers from an array

const sumator = (array) => {
  const filtered = array.filter((element) => typeof element === "number");
  const sum = filtered.reduce((acc,element) => acc + element, 0);
  return sum;
};

module.exports = sumator;
