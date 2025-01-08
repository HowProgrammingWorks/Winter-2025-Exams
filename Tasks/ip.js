// Refactor following solution
// Split string by the first occurrence of separator

Parseip = (i) => {
  arr = [];
  if (i === '') return;
  else {
    B = i.split('.');
    if (B.length != 4) return;
    j = 0;
    for (const b of B) {
      arr[j] = parseInt(b);
      if (isNaN(arr[j])) return;
      j++;
    }
  }
  return arr;
};

module.exports = Parseip;
