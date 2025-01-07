// Refactor following solution
// Split string by the first occurrence of separator

const parseIp = (IPString) => {
  res = [];
  if (IPString === '') return;

  else {
    ipArray = IPString.split('.');
    if (ipArray.length != 4) return;
    i = 0;
    for (const ipEl of ipArray) {
      res[i] = parseInt(ipEl);
      if (isNaN(res[i])) return;
      i++;
    }
  }
  return res;
};

module.exports = parseIp;
