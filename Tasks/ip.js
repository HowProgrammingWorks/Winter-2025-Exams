// Refactor following solution
// Split string by the first occurrence of separator

const parseIp = (IPString) => {
  if (IPString === '') return;

  const ipArray = IPString.split('.');
  if (ipArray.length != 4) return;

  let breaked = false;
  const res = ipArray.map(numStr=>{
    if (breaked) {
      return;
    }

    const num = parseInt(numStr);
    if (isNaN(num)){
      breaked = true;
      return;
    }
    return num;
  });
  
  if (breaked) return;
  
  return res;
};

module.exports = parseIp;
