//STEP 4:
//Remove current keys`es checker with "some" method.
//Add new const,use boolean`s logic,rename "check" to "check2".

const compare = (dict1, dict2) => {
    const keys1 = Object.keys(dict1);
    const keys2 = Object.keys(dict2);
    const check1 = keys1.every((key,index) => key === keys2[index]);
    const check2 = keys1.every((key) => dict1[key] === dict2[key]);
    return check1 && check2;
};

module.exports = compare;
