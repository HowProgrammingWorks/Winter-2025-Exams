// Refactor following solution
// Change double quotation to open or close quotation

quotes = function (string) {
  const res = [];
  let open = false;
  for(const char of string) {
    if(char === '"') {
      if(!open) {
        res.push('«');
        open = true;
      } else {
        res.push('»');
        open = false;
      }
    } else {
      res.push(char);
    }
  }
  return res.join('');
};

module.exports = quotes;
