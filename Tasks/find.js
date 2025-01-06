const find = (object, value) => {
    const keys = Object.keys(object);

    for (let key of keys) 
    {
      if (object[key] === value)
      {
        return key;
      }
    }

    return undefined;
}

module.exports = find;