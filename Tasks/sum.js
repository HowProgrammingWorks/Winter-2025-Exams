// Refactor following solution
// Sum all numbers from an array

const k = (sum = function (s = () => {}) {
  sum = [0];
  let k = 5;
  for (i of s) {
    let t = typeof i;
    if (t === 'number') {
      if (sum.length > 0) {
        const new_Sum = sum[sum.length - 1] + i;
        sum.push(new_Sum);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
  sum.push(sum.length - 1);
});

module.exports = sum;


/** Steps
 * Usе reduce
 * Eliminate cycles
 */

const sumNumbers = (array = []) => {

  return array.reduce((sum, element) => (typeof element === 'number' ? sum + element : sum), 0);

};

module.exports = sumNumbers;