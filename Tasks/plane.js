// Make nested array plane

const_plane = function(arr, res = []) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if(Array.isArray(value)) 
    res.push(...const_plane(value));
    else res.push(value);
  };
  return res;
}

module.exports = const_plane;
