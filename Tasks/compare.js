const compare = (firstValue, secondValue) => {
    const firstKeys = Object.keys(firstValue);
    const secondKeys = Object.keys(secondValue);

    if (firstKeys.join('-') !== secondKeys.join('-')) 
    {
        return false;
    }

    for(let key of firstKeys)
    {
        if(firstValue[key] !== secondValue[key])
        {
            return false;
        }
    }

    return true;
}
  
module.exports = compare;