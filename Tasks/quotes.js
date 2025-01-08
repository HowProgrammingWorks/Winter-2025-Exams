const EMPTY = '';

const quotes = function (s) {
  let res = [];
  let open = false;

  for (let c of s) {
    if (c === '"') {
      res.push(open ? '»' : '«');
      open = !open; 
    } else {
      res.push(c); 
    }
  }

  return res.join(EMPTY); 
};

module.exports = quotes;