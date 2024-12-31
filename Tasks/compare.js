// STEP 1:
//Second parametr with rest operator complitely useless.
//Remove "e" and everething that related to it,
// change logic of values`es checking.
//Use eslint.

let compare = (first_values, second_values) => {
    let a = Object.keys(first_values);
    let b = Object.keys(second_values);
    if (a.join('-') !== b.join('-')) return false;
    for (c of a) {
        if (first_values[c] !== second_values[c]) {
            return false;
        }
    };
    return true;
}

module.exports = compare;
