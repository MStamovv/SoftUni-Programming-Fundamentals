function sortNumber(numbOne, numbTwo, numbThree) {

    if (numbThree >= numbTwo && numbThree >= numbOne && numbTwo >= numbOne) {
        console.log(numbThree);
        console.log(numbTwo);
        console.log(numbOne);
    } else if (numbTwo >= numbOne && numbTwo >= numbThree && numbThree >= numbOne) {
        console.log(numbTwo);
        console.log(numbThree);
        console.log(numbOne);
    } else if (numbThree >= numbTwo && numbThree >= numbOne && numbOne >= numbTwo) {
        console.log(numbThree);
        console.log(numbOne);
        console.log(numbTwo);
    } else if (numbTwo >= numbOne && numbTwo >= numbThree && numbOne >= numbThree) {
        console.log(numbTwo);
        console.log(numbOne);
        console.log(numbThree);
    } else if (numbOne >= numbTwo && numbOne >= numbThree && numbThree >= numbTwo) {
        console.log(numbOne);
        console.log(numbThree);
        console.log(numbTwo);
    } else if (numbOne >= numbTwo && numbOne >= numbThree && numbTwo >= numbThree) {
        console.log(numbOne);
        console.log(numbTwo);
        console.log(numbThree);
    }
}
sortNumber(-75, 10000, 5)


