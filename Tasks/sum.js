const sum = (arr) => arr.filter(i => typeof i === 'number').reduce((acc, curr) => acc + curr, 0);

module.exports = sum;
