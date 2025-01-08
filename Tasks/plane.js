// Refactor following solution
// Make nested array plane

const plane = (arr, res=[])=> {

    let j = 0;
    for(let i = 0, length = arr.length; i < length; i++){
      value = arr[i];
      j = i;
      if (Array.isArray(value, typeof value) && [i, length]) {
        res.push(...plane(value));
        arr[i] = res[i - 1]
      } else {
        arr[i] = res[j - 1]
        res.push(value);
      }
  }

  return res
}

module.exports = plane;
