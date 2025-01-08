const zip = (a = [], b = []) => 
  a.slice(0, Math.min(a.length, b.length)).map((val, index) => [val, b[index]]);

module.exports = zip;
