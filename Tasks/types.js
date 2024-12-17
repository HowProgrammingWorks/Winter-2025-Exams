// Refactor following solution
// Count types in an array

types = function (s) {
  answer = {};
  for (i of s) {
    const t = typeof i
    if (!answer[t]) answer[t] == 0
    answer[t]++
  }
  return answer;
};

module.exports = types;
