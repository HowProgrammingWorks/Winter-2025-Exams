const distinct = (array) => 
{
  const numberCollection = new Set();
  let index = 0;
  array.forEach((a) => {
    if (numberCollection.has(a)) {
      delete array[index];
    } else {
      numberCollection.add(a);
    }
    index++;
  });
  return array.filter(x => typeof x === 'number');
};
module.exports = distinct;