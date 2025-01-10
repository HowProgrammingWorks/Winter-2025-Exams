// STEP 4 v2:
//we can use filter instead of ternary operator

const count = (obj) => {
  const values = Object.values(obj);
  const filtered = values.filter((value)=>typeof value === "number");
  const res = filtered.reduce((acc, value) => acc + value, 0);
  return res;
};

module.exports = count;
