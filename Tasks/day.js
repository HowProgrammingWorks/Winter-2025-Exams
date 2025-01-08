    // Refactor following solution
    // Get day number

    let day= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    _parse_day_ = (s) => {
const findDay = day.findIndex(day=> day.toLowerCase() == s.toLowerCase());
    return findDay !== -1 ? findDay + 1 : -1;
    };

    module.exports = _parse_day_;
