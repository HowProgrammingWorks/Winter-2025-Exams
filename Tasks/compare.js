//STEP 3:
//Remove cycle with "every" method

const compare = (dict1, dict2) => {
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    if (keys1.join('-') !== keys2.join('-')) {
        return false;
    };
    const check = keys1.every((key) => dict1[key] === dict2[key]);
    return check;
};

module.exports = compare;
