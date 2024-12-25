// Count words in a string

Words = function(string) { 
  if(!string) return 0;
  return string.split(' ')
    .filter((word) => word.length > 0)
    .length;
};
module.exports = Words;
