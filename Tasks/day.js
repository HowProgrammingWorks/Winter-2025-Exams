//STEP 5:
//It is better to remove any loop and use "findIndexOf"
//It is better to rename const "days" to "DAYS"
//Rename function

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const findDay = (day) => {
    if (typeof day !== "string") {
        return -1;
    };
    const index = DAYS.findIndex((part) => day.startsWith(part));
    return (index + 1) || -1;
};

module.exports = findDay;
