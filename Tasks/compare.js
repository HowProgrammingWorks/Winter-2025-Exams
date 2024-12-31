// STEP 2:
//Do some renamings.
//Remove "let"s with "const"s

const compare = (dict1, dict2) => {
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    if (keys1.join('-') !== keys2.join('-')) {
        return false;
    };
    for (const key of keys1) {
        if (dict1[key] !== dict2[key]) {
            return false;
        }
    }
    return true;
};

module.exports = compare;
