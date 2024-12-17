// Refactor following solution
// Count types in an array

types = function (s) {
  answer = {};
  for (i of s) {
    const t = typeof i;
    answer[t]++;
  }
  return answer;
};

module.exports = types;
