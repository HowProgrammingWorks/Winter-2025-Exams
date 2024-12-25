// Count words in a string

Words = function(string) { 
  if(string === '') return 0;
  return string.split(/\s+/).length;
};
module.exports = Words;
