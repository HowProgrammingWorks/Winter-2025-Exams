// Refactor following solution
// Get day number
"use strict";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDayNum = (str) => {
    if (typeof str !== `string`) return -1;

    for (let num = 0; num < DAYS.length; num++) {
        let isDay = str.startsWith(DAYS[num].toLowerCase());

        if (isDay) return num + 1;
    }

    return -1;
};

module.exports = getDayNum;
