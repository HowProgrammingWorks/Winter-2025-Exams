const compare = (firstDict, secondDict) => {

  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);

  if (firstKeys.length !== secondKeys.length || !firstKeys.every((key, index) => key === secondKeys[index])) {
    return false;
  }

  return firstKeys.every(key => firstDict[key] === secondDict[key]);
};

module.exports = compare;
