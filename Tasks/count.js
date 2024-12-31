// STEP 2:
//Remove .forEach with "Object.values(obj).reduce"
//Add new const "res"
////Remove useless parts

const count = (obj) => {
    const res = Object.values(obj).reduce((sum, value) => {
      if (typeof value === 'number') {
        return sum + value;
      }
      return sum;
    }, 0);
    return res
  };
  
  module.exports = count;
