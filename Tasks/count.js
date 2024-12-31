// STEP 4:
//Add ternary operator
//Rename sum to acc

const count = (obj) => {
    const values = Object.values(obj);
    const res = values.reduce((acc, value) =>
        typeof value === 'number' ? acc + value : acc, 0);
    return res;
};

module.exports = count;
