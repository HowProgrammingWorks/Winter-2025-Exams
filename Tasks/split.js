// const part2 is not neccesery,but I let it exist for good looking code.

const split = (index, array) => {
  const part1 = array.splice(0,index);
  const part2 = array;
  return [part1,part2];
};

module.exports = split;
