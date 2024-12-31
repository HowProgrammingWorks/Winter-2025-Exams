// STEP 3:
//add new const "values"

const count = (obj) => {
    const values = Object.values(obj);
    const res = values.reduce((sum, value) => {
      if (typeof value === 'number') {
        return sum + value;
      }
      return sum;
    }, 0);
    return res;
  };
  
  module.exports = count;
