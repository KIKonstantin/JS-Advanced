function daysInMonth(month, year) {
    let d = new Date(year, month + 1, 0).getDate();
    console.log(d);
}
daysInMonth(1, 2012);
daysInMonth(2, 2021);