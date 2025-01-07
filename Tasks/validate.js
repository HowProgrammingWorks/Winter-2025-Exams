// Refactor following solution
// Validate person name

// Step 6: replace everything with regex:
// ^ - start of the string
// [a-zA-Z]+ - one or more letters (first word)
// (\s[a-zA-Z]+)+ - one or more groups of space and one or more letters (words)
// $ - end of the string

// done

'use strict';

const validate = (name) => /^[a-zA-Z]+(\s[a-zA-Z]+)+$/.test(name);

module.exports = validate;
