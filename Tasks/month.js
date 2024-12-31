// STEP 1:
//Do some renamings 
//Remove "let"s with "const"s
//Add new const scope
//Use eslint

const list = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

const position = (month) => {
    const scope = list.length;
    for (let i = 0; i < scope; i++) {
        if (month.toLowerCase().startsWith(list[i])) return i + 1;
    }
    return -1;
};

module.exports = position;
