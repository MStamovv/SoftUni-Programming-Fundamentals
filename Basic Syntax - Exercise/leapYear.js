function leapYear(year) {

    let itsLeapYear = (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0);

    if (itsLeapYear) {
        console.log(`yes`)
    } else {
        console.log(`no`);
    }
}
leapYear(4)